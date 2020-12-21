# @datafire/amazonaws_ecr

Client library for Amazon EC2 Container Registry

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ecr
```
```js
let amazonaws_ecr = require('@datafire/amazonaws_ecr').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elastic Container Registry</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Customers can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports private repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images.</p>

## Actions

### BatchCheckLayerAvailability



```js
amazonaws_ecr.BatchCheckLayerAvailability({
  "repositoryName": null,
  "layerDigests": null
}, context)
```

#### Input
* input `object`
  * layerDigests **required**
    * items [BatchedOperationLayerDigest](#batchedoperationlayerdigest)
  * registryId
  * repositoryName **required**

#### Output
* output [BatchCheckLayerAvailabilityResponse](#batchchecklayeravailabilityresponse)

### BatchDeleteImage



```js
amazonaws_ecr.BatchDeleteImage({
  "repositoryName": null,
  "imageIds": null
}, context)
```

#### Input
* input `object`
  * imageIds **required**
    * items [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

#### Output
* output [BatchDeleteImageResponse](#batchdeleteimageresponse)

### BatchGetImage



```js
amazonaws_ecr.BatchGetImage({
  "repositoryName": null,
  "imageIds": null
}, context)
```

#### Input
* input `object`
  * acceptedMediaTypes
    * items [MediaType](#mediatype)
  * imageIds **required**
    * items [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

#### Output
* output [BatchGetImageResponse](#batchgetimageresponse)

### CompleteLayerUpload



```js
amazonaws_ecr.CompleteLayerUpload({
  "repositoryName": null,
  "uploadId": null,
  "layerDigests": null
}, context)
```

#### Input
* input `object`
  * layerDigests **required**
    * items [LayerDigest](#layerdigest)
  * registryId
  * repositoryName **required**
  * uploadId **required**

#### Output
* output [CompleteLayerUploadResponse](#completelayeruploadresponse)

### CreateRepository



```js
amazonaws_ecr.CreateRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * encryptionConfiguration
    * encryptionType **required**
    * kmsKey
  * imageScanningConfiguration
    * scanOnPush
  * imageTagMutability
  * repositoryName **required**

#### Output
* output [CreateRepositoryResponse](#createrepositoryresponse)

### DeleteLifecyclePolicy



```js
amazonaws_ecr.DeleteLifecyclePolicy({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [DeleteLifecyclePolicyResponse](#deletelifecyclepolicyresponse)

### DeleteRegistryPolicy



```js
amazonaws_ecr.DeleteRegistryPolicy({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteRegistryPolicyResponse](#deleteregistrypolicyresponse)

### DeleteRepository



```js
amazonaws_ecr.DeleteRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * force
  * registryId
  * repositoryName **required**

#### Output
* output [DeleteRepositoryResponse](#deleterepositoryresponse)

### DeleteRepositoryPolicy



```js
amazonaws_ecr.DeleteRepositoryPolicy({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [DeleteRepositoryPolicyResponse](#deleterepositorypolicyresponse)

### DescribeImageScanFindings



```js
amazonaws_ecr.DescribeImageScanFindings({
  "repositoryName": null,
  "imageId": {}
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * imageId **required** [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [DescribeImageScanFindingsResponse](#describeimagescanfindingsresponse)

### DescribeImages



```js
amazonaws_ecr.DescribeImages({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * tagStatus
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [DescribeImagesResponse](#describeimagesresponse)

### DescribeRegistry



```js
amazonaws_ecr.DescribeRegistry({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeRegistryResponse](#describeregistryresponse)

### DescribeRepositories



```js
amazonaws_ecr.DescribeRepositories({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * registryId
  * repositoryNames
    * items [RepositoryName](#repositoryname)

#### Output
* output [DescribeRepositoriesResponse](#describerepositoriesresponse)

### GetAuthorizationToken



```js
amazonaws_ecr.GetAuthorizationToken({}, context)
```

#### Input
* input `object`
  * registryIds
    * items [RegistryId](#registryid)

#### Output
* output [GetAuthorizationTokenResponse](#getauthorizationtokenresponse)

### GetDownloadUrlForLayer



```js
amazonaws_ecr.GetDownloadUrlForLayer({
  "repositoryName": null,
  "layerDigest": null
}, context)
```

#### Input
* input `object`
  * layerDigest **required**
  * registryId
  * repositoryName **required**

#### Output
* output [GetDownloadUrlForLayerResponse](#getdownloadurlforlayerresponse)

### GetLifecyclePolicy



```js
amazonaws_ecr.GetLifecyclePolicy({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [GetLifecyclePolicyResponse](#getlifecyclepolicyresponse)

### GetLifecyclePolicyPreview



```js
amazonaws_ecr.GetLifecyclePolicyPreview({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * tagStatus
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [GetLifecyclePolicyPreviewResponse](#getlifecyclepolicypreviewresponse)

### GetRegistryPolicy



```js
amazonaws_ecr.GetRegistryPolicy({}, context)
```

#### Input
* input `object`

#### Output
* output [GetRegistryPolicyResponse](#getregistrypolicyresponse)

### GetRepositoryPolicy



```js
amazonaws_ecr.GetRepositoryPolicy({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [GetRepositoryPolicyResponse](#getrepositorypolicyresponse)

### InitiateLayerUpload



```js
amazonaws_ecr.InitiateLayerUpload({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [InitiateLayerUploadResponse](#initiatelayeruploadresponse)

### ListImages



```js
amazonaws_ecr.ListImages({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter
    * tagStatus
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [ListImagesResponse](#listimagesresponse)

### ListTagsForResource



```js
amazonaws_ecr.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### PutImage



```js
amazonaws_ecr.PutImage({
  "repositoryName": null,
  "imageManifest": null
}, context)
```

#### Input
* input `object`
  * imageDigest
  * imageManifest **required**
  * imageManifestMediaType
  * imageTag
  * registryId
  * repositoryName **required**

#### Output
* output [PutImageResponse](#putimageresponse)

### PutImageScanningConfiguration



```js
amazonaws_ecr.PutImageScanningConfiguration({
  "repositoryName": null,
  "imageScanningConfiguration": null
}, context)
```

#### Input
* input `object`
  * imageScanningConfiguration **required**
    * scanOnPush
  * registryId
  * repositoryName **required**

#### Output
* output [PutImageScanningConfigurationResponse](#putimagescanningconfigurationresponse)

### PutImageTagMutability



```js
amazonaws_ecr.PutImageTagMutability({
  "repositoryName": null,
  "imageTagMutability": null
}, context)
```

#### Input
* input `object`
  * imageTagMutability **required**
  * registryId
  * repositoryName **required**

#### Output
* output [PutImageTagMutabilityResponse](#putimagetagmutabilityresponse)

### PutLifecyclePolicy



```js
amazonaws_ecr.PutLifecyclePolicy({
  "repositoryName": null,
  "lifecyclePolicyText": null
}, context)
```

#### Input
* input `object`
  * lifecyclePolicyText **required**
  * registryId
  * repositoryName **required**

#### Output
* output [PutLifecyclePolicyResponse](#putlifecyclepolicyresponse)

### PutRegistryPolicy



```js
amazonaws_ecr.PutRegistryPolicy({
  "policyText": null
}, context)
```

#### Input
* input `object`
  * policyText **required**

#### Output
* output [PutRegistryPolicyResponse](#putregistrypolicyresponse)

### PutReplicationConfiguration



```js
amazonaws_ecr.PutReplicationConfiguration({
  "replicationConfiguration": null
}, context)
```

#### Input
* input `object`
  * replicationConfiguration **required**
    * rules **required**
      * items [ReplicationRule](#replicationrule)

#### Output
* output [PutReplicationConfigurationResponse](#putreplicationconfigurationresponse)

### SetRepositoryPolicy



```js
amazonaws_ecr.SetRepositoryPolicy({
  "repositoryName": null,
  "policyText": null
}, context)
```

#### Input
* input `object`
  * force
  * policyText **required**
  * registryId
  * repositoryName **required**

#### Output
* output [SetRepositoryPolicyResponse](#setrepositorypolicyresponse)

### StartImageScan



```js
amazonaws_ecr.StartImageScan({
  "repositoryName": null,
  "imageId": {}
}, context)
```

#### Input
* input `object`
  * imageId **required** [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

#### Output
* output [StartImageScanResponse](#startimagescanresponse)

### StartLifecyclePolicyPreview



```js
amazonaws_ecr.StartLifecyclePolicyPreview({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * lifecyclePolicyText
  * registryId
  * repositoryName **required**

#### Output
* output [StartLifecyclePolicyPreviewResponse](#startlifecyclepolicypreviewresponse)

### TagResource



```js
amazonaws_ecr.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_ecr.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UploadLayerPart



```js
amazonaws_ecr.UploadLayerPart({
  "repositoryName": null,
  "uploadId": null,
  "partFirstByte": null,
  "partLastByte": null,
  "layerPartBlob": null
}, context)
```

#### Input
* input `object`
  * layerPartBlob **required**
  * partFirstByte **required**
  * partLastByte **required**
  * registryId
  * repositoryName **required**
  * uploadId **required**

#### Output
* output [UploadLayerPartResponse](#uploadlayerpartresponse)



## Definitions

### Arn
* Arn `string`

### Attribute
* Attribute `object`: This data type is used in the <a>ImageScanFinding</a> data type.
  * key **required**
  * value

### AttributeKey
* AttributeKey `string`

### AttributeList
* AttributeList `array`
  * items [Attribute](#attribute)

### AttributeValue
* AttributeValue `string`

### AuthorizationData
* AuthorizationData `object`: An object representing authorization data for an Amazon ECR registry.
  * authorizationToken
  * expiresAt
  * proxyEndpoint

### AuthorizationDataList
* AuthorizationDataList `array`
  * items [AuthorizationData](#authorizationdata)

### Base64
* Base64 `string`

### BatchCheckLayerAvailabilityRequest
* BatchCheckLayerAvailabilityRequest `object`
  * layerDigests **required**
    * items [BatchedOperationLayerDigest](#batchedoperationlayerdigest)
  * registryId
  * repositoryName **required**

### BatchCheckLayerAvailabilityResponse
* BatchCheckLayerAvailabilityResponse `object`
  * failures
    * items [LayerFailure](#layerfailure)
  * layers
    * items [Layer](#layer)

### BatchDeleteImageRequest
* BatchDeleteImageRequest `object`: Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
  * imageIds **required**
    * items [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

### BatchDeleteImageResponse
* BatchDeleteImageResponse `object`
  * failures
    * items [ImageFailure](#imagefailure)
  * imageIds
    * items [ImageIdentifier](#imageidentifier)

### BatchGetImageRequest
* BatchGetImageRequest `object`
  * acceptedMediaTypes
    * items [MediaType](#mediatype)
  * imageIds **required**
    * items [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

### BatchGetImageResponse
* BatchGetImageResponse `object`
  * failures
    * items [ImageFailure](#imagefailure)
  * images
    * items [Image](#image)

### BatchedOperationLayerDigest
* BatchedOperationLayerDigest `string`

### BatchedOperationLayerDigestList
* BatchedOperationLayerDigestList `array`
  * items [BatchedOperationLayerDigest](#batchedoperationlayerdigest)

### CompleteLayerUploadRequest
* CompleteLayerUploadRequest `object`
  * layerDigests **required**
    * items [LayerDigest](#layerdigest)
  * registryId
  * repositoryName **required**
  * uploadId **required**

### CompleteLayerUploadResponse
* CompleteLayerUploadResponse `object`
  * layerDigest
  * registryId
  * repositoryName
  * uploadId

### CreateRepositoryRequest
* CreateRepositoryRequest `object`
  * tags
    * items [Tag](#tag)
  * encryptionConfiguration
    * encryptionType **required**
    * kmsKey
  * imageScanningConfiguration
    * scanOnPush
  * imageTagMutability
  * repositoryName **required**

### CreateRepositoryResponse
* CreateRepositoryResponse `object`
  * repository
    * createdAt
    * encryptionConfiguration
      * encryptionType **required**
      * kmsKey
    * imageScanningConfiguration [ImageScanningConfiguration](#imagescanningconfiguration)
    * imageTagMutability
    * registryId
    * repositoryArn
    * repositoryName
    * repositoryUri

### CreationTimestamp
* CreationTimestamp `string`

### DeleteLifecyclePolicyRequest
* DeleteLifecyclePolicyRequest `object`
  * registryId
  * repositoryName **required**

### DeleteLifecyclePolicyResponse
* DeleteLifecyclePolicyResponse `object`
  * lastEvaluatedAt
  * lifecyclePolicyText
  * registryId
  * repositoryName

### DeleteRegistryPolicyRequest
* DeleteRegistryPolicyRequest `object`

### DeleteRegistryPolicyResponse
* DeleteRegistryPolicyResponse `object`
  * policyText
  * registryId

### DeleteRepositoryPolicyRequest
* DeleteRepositoryPolicyRequest `object`
  * registryId
  * repositoryName **required**

### DeleteRepositoryPolicyResponse
* DeleteRepositoryPolicyResponse `object`
  * policyText
  * registryId
  * repositoryName

### DeleteRepositoryRequest
* DeleteRepositoryRequest `object`
  * force
  * registryId
  * repositoryName **required**

### DeleteRepositoryResponse
* DeleteRepositoryResponse `object`
  * repository
    * createdAt
    * encryptionConfiguration
      * encryptionType **required**
      * kmsKey
    * imageScanningConfiguration [ImageScanningConfiguration](#imagescanningconfiguration)
    * imageTagMutability
    * registryId
    * repositoryArn
    * repositoryName
    * repositoryUri

### DescribeImageScanFindingsRequest
* DescribeImageScanFindingsRequest `object`
  * imageId **required** [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

### DescribeImageScanFindingsResponse
* DescribeImageScanFindingsResponse `object`
  * imageId [ImageIdentifier](#imageidentifier)
  * imageScanFindings
    * findingSeverityCounts
    * findings
      * items [ImageScanFinding](#imagescanfinding)
    * imageScanCompletedAt
    * vulnerabilitySourceUpdatedAt
  * imageScanStatus
    * description
    * status
  * nextToken
  * registryId
  * repositoryName

### DescribeImagesFilter
* DescribeImagesFilter `object`: An object representing a filter on a <a>DescribeImages</a> operation.
  * tagStatus

### DescribeImagesRequest
* DescribeImagesRequest `object`
  * filter
    * tagStatus
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

### DescribeImagesResponse
* DescribeImagesResponse `object`
  * imageDetails
    * items [ImageDetail](#imagedetail)
  * nextToken

### DescribeRegistryRequest
* DescribeRegistryRequest `object`

### DescribeRegistryResponse
* DescribeRegistryResponse `object`
  * registryId
  * replicationConfiguration
    * rules **required**
      * items [ReplicationRule](#replicationrule)

### DescribeRepositoriesRequest
* DescribeRepositoriesRequest `object`
  * maxResults
  * nextToken
  * registryId
  * repositoryNames
    * items [RepositoryName](#repositoryname)

### DescribeRepositoriesResponse
* DescribeRepositoriesResponse `object`
  * nextToken
  * repositories
    * items [Repository](#repository)

### EmptyUploadException


### EncryptionConfiguration
* EncryptionConfiguration `object`: <p>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</p> <p>By default, when no encryption configuration is set or the <code>AES256</code> encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.</p> <p>For more control over the encryption of the contents of your repository, you can use server-side encryption with customer master keys (CMKs) stored in AWS Key Management Service (AWS KMS) to encrypt your images. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html">Amazon ECR encryption at rest</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
  * encryptionType **required**
  * kmsKey

### EncryptionType
* EncryptionType `string` (values: AES256, KMS)

### EvaluationTimestamp
* EvaluationTimestamp `string`

### ExpirationTimestamp
* ExpirationTimestamp `string`

### FindingDescription
* FindingDescription `string`

### FindingName
* FindingName `string`

### FindingSeverity
* FindingSeverity `string` (values: INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL, UNDEFINED)

### FindingSeverityCounts
* FindingSeverityCounts `object`

### ForceFlag
* ForceFlag `boolean`

### GetAuthorizationTokenRegistryIdList
* GetAuthorizationTokenRegistryIdList `array`
  * items [RegistryId](#registryid)

### GetAuthorizationTokenRequest
* GetAuthorizationTokenRequest `object`
  * registryIds
    * items [RegistryId](#registryid)

### GetAuthorizationTokenResponse
* GetAuthorizationTokenResponse `object`
  * authorizationData
    * items [AuthorizationData](#authorizationdata)

### GetDownloadUrlForLayerRequest
* GetDownloadUrlForLayerRequest `object`
  * layerDigest **required**
  * registryId
  * repositoryName **required**

### GetDownloadUrlForLayerResponse
* GetDownloadUrlForLayerResponse `object`
  * downloadUrl
  * layerDigest

### GetLifecyclePolicyPreviewRequest
* GetLifecyclePolicyPreviewRequest `object`
  * filter
    * tagStatus
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

### GetLifecyclePolicyPreviewResponse
* GetLifecyclePolicyPreviewResponse `object`
  * lifecyclePolicyText
  * nextToken
  * previewResults
    * items [LifecyclePolicyPreviewResult](#lifecyclepolicypreviewresult)
  * registryId
  * repositoryName
  * status
  * summary
    * expiringImageTotalCount

### GetLifecyclePolicyRequest
* GetLifecyclePolicyRequest `object`
  * registryId
  * repositoryName **required**

### GetLifecyclePolicyResponse
* GetLifecyclePolicyResponse `object`
  * lastEvaluatedAt
  * lifecyclePolicyText
  * registryId
  * repositoryName

### GetRegistryPolicyRequest
* GetRegistryPolicyRequest `object`

### GetRegistryPolicyResponse
* GetRegistryPolicyResponse `object`
  * policyText
  * registryId

### GetRepositoryPolicyRequest
* GetRepositoryPolicyRequest `object`
  * registryId
  * repositoryName **required**

### GetRepositoryPolicyResponse
* GetRepositoryPolicyResponse `object`
  * policyText
  * registryId
  * repositoryName

### Image
* Image `object`: An object representing an Amazon ECR image.
  * imageId
    * imageDigest
    * imageTag
  * imageManifest
  * imageManifestMediaType
  * registryId
  * repositoryName

### ImageActionType
* ImageActionType `string` (values: EXPIRE)

### ImageAlreadyExistsException


### ImageCount
* ImageCount `integer`

### ImageDetail
* ImageDetail `object`: An object that describes an image returned by a <a>DescribeImages</a> operation.
  * artifactMediaType
  * imageDigest
  * imageManifestMediaType
  * imagePushedAt
  * imageScanFindingsSummary
    * findingSeverityCounts
    * imageScanCompletedAt
    * vulnerabilitySourceUpdatedAt
  * imageScanStatus
    * description
    * status
  * imageSizeInBytes
  * imageTags
    * items [ImageTag](#imagetag)
  * registryId
  * repositoryName

### ImageDetailList
* ImageDetailList `array`
  * items [ImageDetail](#imagedetail)

### ImageDigest
* ImageDigest `string`

### ImageDigestDoesNotMatchException


### ImageFailure
* ImageFailure `object`: An object representing an Amazon ECR image failure.
  * failureCode
  * failureReason
  * imageId
    * imageDigest
    * imageTag

### ImageFailureCode
* ImageFailureCode `string` (values: InvalidImageDigest, InvalidImageTag, ImageTagDoesNotMatchDigest, ImageNotFound, MissingDigestAndTag, ImageReferencedByManifestList, KmsError)

### ImageFailureList
* ImageFailureList `array`
  * items [ImageFailure](#imagefailure)

### ImageFailureReason
* ImageFailureReason `string`

### ImageIdentifier
* ImageIdentifier `object`: An object with identifying information for an Amazon ECR image.
  * imageDigest
  * imageTag

### ImageIdentifierList
* ImageIdentifierList `array`
  * items [ImageIdentifier](#imageidentifier)

### ImageList
* ImageList `array`
  * items [Image](#image)

### ImageManifest
* ImageManifest `string`

### ImageNotFoundException


### ImageScanFinding
* ImageScanFinding `object`: Contains information about an image scan finding.
  * attributes
    * items [Attribute](#attribute)
  * description
  * name
  * severity
  * uri

### ImageScanFindingList
* ImageScanFindingList `array`
  * items [ImageScanFinding](#imagescanfinding)

### ImageScanFindings
* ImageScanFindings `object`: The details of an image scan.
  * findingSeverityCounts
  * findings
    * items [ImageScanFinding](#imagescanfinding)
  * imageScanCompletedAt
  * vulnerabilitySourceUpdatedAt

### ImageScanFindingsSummary
* ImageScanFindingsSummary `object`: A summary of the last completed image scan.
  * findingSeverityCounts
  * imageScanCompletedAt
  * vulnerabilitySourceUpdatedAt

### ImageScanStatus
* ImageScanStatus `object`: The current status of an image scan.
  * description
  * status

### ImageScanningConfiguration
* ImageScanningConfiguration `object`: The image scanning configuration for a repository.
  * scanOnPush

### ImageSizeInBytes
* ImageSizeInBytes `integer`

### ImageTag
* ImageTag `string`

### ImageTagAlreadyExistsException


### ImageTagList
* ImageTagList `array`
  * items [ImageTag](#imagetag)

### ImageTagMutability
* ImageTagMutability `string` (values: MUTABLE, IMMUTABLE)

### InitiateLayerUploadRequest
* InitiateLayerUploadRequest `object`
  * registryId
  * repositoryName **required**

### InitiateLayerUploadResponse
* InitiateLayerUploadResponse `object`
  * partSize
  * uploadId

### InvalidLayerException


### InvalidLayerPartException


### InvalidParameterException


### InvalidTagParameterException


### KmsException


### KmsKey
* KmsKey `string`

### Layer
* Layer `object`: An object representing an Amazon ECR image layer.
  * layerAvailability
  * layerDigest
  * layerSize
  * mediaType

### LayerAlreadyExistsException


### LayerAvailability
* LayerAvailability `string` (values: AVAILABLE, UNAVAILABLE)

### LayerDigest
* LayerDigest `string`

### LayerDigestList
* LayerDigestList `array`
  * items [LayerDigest](#layerdigest)

### LayerFailure
* LayerFailure `object`: An object representing an Amazon ECR image layer failure.
  * failureCode
  * failureReason
  * layerDigest

### LayerFailureCode
* LayerFailureCode `string` (values: InvalidLayerDigest, MissingLayerDigest)

### LayerFailureList
* LayerFailureList `array`
  * items [LayerFailure](#layerfailure)

### LayerFailureReason
* LayerFailureReason `string`

### LayerInaccessibleException


### LayerList
* LayerList `array`
  * items [Layer](#layer)

### LayerPartBlob
* LayerPartBlob `string`

### LayerPartTooSmallException


### LayerSizeInBytes
* LayerSizeInBytes `integer`

### LayersNotFoundException


### LifecyclePolicyNotFoundException


### LifecyclePolicyPreviewFilter
* LifecyclePolicyPreviewFilter `object`: The filter for the lifecycle policy preview.
  * tagStatus

### LifecyclePolicyPreviewInProgressException


### LifecyclePolicyPreviewNotFoundException


### LifecyclePolicyPreviewResult
* LifecyclePolicyPreviewResult `object`: The result of the lifecycle policy preview.
  * action
    * type
  * appliedRulePriority
  * imageDigest
  * imagePushedAt
  * imageTags
    * items [ImageTag](#imagetag)

### LifecyclePolicyPreviewResultList
* LifecyclePolicyPreviewResultList `array`
  * items [LifecyclePolicyPreviewResult](#lifecyclepolicypreviewresult)

### LifecyclePolicyPreviewStatus
* LifecyclePolicyPreviewStatus `string` (values: IN_PROGRESS, COMPLETE, EXPIRED, FAILED)

### LifecyclePolicyPreviewSummary
* LifecyclePolicyPreviewSummary `object`: The summary of the lifecycle policy preview request.
  * expiringImageTotalCount

### LifecyclePolicyRuleAction
* LifecyclePolicyRuleAction `object`: The type of action to be taken.
  * type

### LifecyclePolicyRulePriority
* LifecyclePolicyRulePriority `integer`

### LifecyclePolicyText
* LifecyclePolicyText `string`

### LifecyclePreviewMaxResults
* LifecyclePreviewMaxResults `integer`

### LimitExceededException


### ListImagesFilter
* ListImagesFilter `object`: An object representing a filter on a <a>ListImages</a> operation.
  * tagStatus

### ListImagesRequest
* ListImagesRequest `object`
  * filter
    * tagStatus
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

### ListImagesResponse
* ListImagesResponse `object`
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### MediaType
* MediaType `string`

### MediaTypeList
* MediaTypeList `array`
  * items [MediaType](#mediatype)

### NextToken
* NextToken `string`

### PartSize
* PartSize `integer`

### ProxyEndpoint
* ProxyEndpoint `string`

### PushTimestamp
* PushTimestamp `string`

### PutImageRequest
* PutImageRequest `object`
  * imageDigest
  * imageManifest **required**
  * imageManifestMediaType
  * imageTag
  * registryId
  * repositoryName **required**

### PutImageResponse
* PutImageResponse `object`
  * image
    * imageId
      * imageDigest
      * imageTag
    * imageManifest
    * imageManifestMediaType
    * registryId
    * repositoryName

### PutImageScanningConfigurationRequest
* PutImageScanningConfigurationRequest `object`
  * imageScanningConfiguration **required**
    * scanOnPush
  * registryId
  * repositoryName **required**

### PutImageScanningConfigurationResponse
* PutImageScanningConfigurationResponse `object`
  * imageScanningConfiguration
    * scanOnPush
  * registryId
  * repositoryName

### PutImageTagMutabilityRequest
* PutImageTagMutabilityRequest `object`
  * imageTagMutability **required**
  * registryId
  * repositoryName **required**

### PutImageTagMutabilityResponse
* PutImageTagMutabilityResponse `object`
  * imageTagMutability
  * registryId
  * repositoryName

### PutLifecyclePolicyRequest
* PutLifecyclePolicyRequest `object`
  * lifecyclePolicyText **required**
  * registryId
  * repositoryName **required**

### PutLifecyclePolicyResponse
* PutLifecyclePolicyResponse `object`
  * lifecyclePolicyText
  * registryId
  * repositoryName

### PutRegistryPolicyRequest
* PutRegistryPolicyRequest `object`
  * policyText **required**

### PutRegistryPolicyResponse
* PutRegistryPolicyResponse `object`
  * policyText
  * registryId

### PutReplicationConfigurationRequest
* PutReplicationConfigurationRequest `object`
  * replicationConfiguration **required**
    * rules **required**
      * items [ReplicationRule](#replicationrule)

### PutReplicationConfigurationResponse
* PutReplicationConfigurationResponse `object`
  * replicationConfiguration
    * rules **required**
      * items [ReplicationRule](#replicationrule)

### ReferencedImagesNotFoundException


### Region
* Region `string`

### RegistryId
* RegistryId `string`

### RegistryPolicyNotFoundException


### RegistryPolicyText
* RegistryPolicyText `string`

### ReplicationConfiguration
* ReplicationConfiguration `object`: The replication configuration for a registry.
  * rules **required**
    * items [ReplicationRule](#replicationrule)

### ReplicationDestination
* ReplicationDestination `object`: An array of objects representing the details of a replication destination.
  * region **required**
  * registryId **required**

### ReplicationDestinationList
* ReplicationDestinationList `array`
  * items [ReplicationDestination](#replicationdestination)

### ReplicationRule
* ReplicationRule `object`: An array of objects representing the replication destinations for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
  * destinations **required**
    * items [ReplicationDestination](#replicationdestination)

### ReplicationRuleList
* ReplicationRuleList `array`
  * items [ReplicationRule](#replicationrule)

### Repository
* Repository `object`: An object representing a repository.
  * createdAt
  * encryptionConfiguration
    * encryptionType **required**
    * kmsKey
  * imageScanningConfiguration [ImageScanningConfiguration](#imagescanningconfiguration)
  * imageTagMutability
  * registryId
  * repositoryArn
  * repositoryName
  * repositoryUri

### RepositoryAlreadyExistsException


### RepositoryList
* RepositoryList `array`
  * items [Repository](#repository)

### RepositoryName
* RepositoryName `string`

### RepositoryNameList
* RepositoryNameList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryNotEmptyException


### RepositoryNotFoundException


### RepositoryPolicyNotFoundException


### RepositoryPolicyText
* RepositoryPolicyText `string`

### ScanNotFoundException


### ScanOnPushFlag
* ScanOnPushFlag `boolean`

### ScanStatus
* ScanStatus `string` (values: IN_PROGRESS, COMPLETE, FAILED)

### ScanStatusDescription
* ScanStatusDescription `string`

### ScanTimestamp
* ScanTimestamp `string`

### ServerException


### SetRepositoryPolicyRequest
* SetRepositoryPolicyRequest `object`
  * force
  * policyText **required**
  * registryId
  * repositoryName **required**

### SetRepositoryPolicyResponse
* SetRepositoryPolicyResponse `object`
  * policyText
  * registryId
  * repositoryName

### SeverityCount
* SeverityCount `integer`

### StartImageScanRequest
* StartImageScanRequest `object`
  * imageId **required** [ImageIdentifier](#imageidentifier)
  * registryId
  * repositoryName **required**

### StartImageScanResponse
* StartImageScanResponse `object`
  * imageId [ImageIdentifier](#imageidentifier)
  * imageScanStatus
    * description
    * status
  * registryId
  * repositoryName

### StartLifecyclePolicyPreviewRequest
* StartLifecyclePolicyPreviewRequest `object`
  * lifecyclePolicyText
  * registryId
  * repositoryName **required**

### StartLifecyclePolicyPreviewResponse
* StartLifecyclePolicyPreviewResponse `object`
  * lifecyclePolicyText
  * registryId
  * repositoryName
  * status

### Tag
* Tag `object`: The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
  * Key
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagStatus
* TagStatus `string` (values: TAGGED, UNTAGGED, ANY)

### TagValue
* TagValue `string`

### TooManyTagsException


### UnsupportedImageTypeException


### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UploadId
* UploadId `string`

### UploadLayerPartRequest
* UploadLayerPartRequest `object`
  * layerPartBlob **required**
  * partFirstByte **required**
  * partLastByte **required**
  * registryId
  * repositoryName **required**
  * uploadId **required**

### UploadLayerPartResponse
* UploadLayerPartResponse `object`
  * lastByteReceived
  * registryId
  * repositoryName
  * uploadId

### UploadNotFoundException


### Url
* Url `string`

### ValidationException


### VulnerabilitySourceUpdateTimestamp
* VulnerabilitySourceUpdateTimestamp `string`


