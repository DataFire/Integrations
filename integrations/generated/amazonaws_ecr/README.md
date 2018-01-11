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

amazonaws_ecr.BatchCheckLayerAvailability({}).then(data => {
  console.log(data);
})
```

## Description

Amazon EC2 Container Registry (Amazon ECR) is a managed Docker registry service. Customers can use the familiar Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry. Amazon ECR supports private Docker repositories with resource-based permissions using IAM so that specific users or Amazon EC2 instances can access repositories and images. Developers can use the Docker CLI to author and manage images.

## Actions

### BatchCheckLayerAvailability



```js
amazonaws_ecr.BatchCheckLayerAvailability({
  "repositoryName": "",
  "layerDigests": []
}, context)
```

#### Input
* input `object`
  * layerDigests **required** [BatchedOperationLayerDigestList](#batchedoperationlayerdigestlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [BatchCheckLayerAvailabilityResponse](#batchchecklayeravailabilityresponse)

### BatchDeleteImage



```js
amazonaws_ecr.BatchDeleteImage({
  "repositoryName": "",
  "imageIds": []
}, context)
```

#### Input
* input `object`
  * imageIds **required** [ImageIdentifierList](#imageidentifierlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [BatchDeleteImageResponse](#batchdeleteimageresponse)

### BatchGetImage



```js
amazonaws_ecr.BatchGetImage({
  "repositoryName": "",
  "imageIds": []
}, context)
```

#### Input
* input `object`
  * acceptedMediaTypes [MediaTypeList](#mediatypelist)
  * imageIds **required** [ImageIdentifierList](#imageidentifierlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [BatchGetImageResponse](#batchgetimageresponse)

### CompleteLayerUpload



```js
amazonaws_ecr.CompleteLayerUpload({
  "repositoryName": "",
  "uploadId": "",
  "layerDigests": []
}, context)
```

#### Input
* input `object`
  * layerDigests **required** [LayerDigestList](#layerdigestlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * uploadId **required** [UploadId](#uploadid)

#### Output
* output [CompleteLayerUploadResponse](#completelayeruploadresponse)

### CreateRepository



```js
amazonaws_ecr.CreateRepository({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [CreateRepositoryResponse](#createrepositoryresponse)

### DeleteLifecyclePolicy



```js
amazonaws_ecr.DeleteLifecyclePolicy({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DeleteLifecyclePolicyResponse](#deletelifecyclepolicyresponse)

### DeleteRepository



```js
amazonaws_ecr.DeleteRepository({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * force [ForceFlag](#forceflag)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DeleteRepositoryResponse](#deleterepositoryresponse)

### DeleteRepositoryPolicy



```js
amazonaws_ecr.DeleteRepositoryPolicy({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DeleteRepositoryPolicyResponse](#deleterepositorypolicyresponse)

### DescribeImages



```js
amazonaws_ecr.DescribeImages({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter [DescribeImagesFilter](#describeimagesfilter)
  * imageIds [ImageIdentifierList](#imageidentifierlist)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DescribeImagesResponse](#describeimagesresponse)

### DescribeRepositories



```js
amazonaws_ecr.DescribeRepositories({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryNames [RepositoryNameList](#repositorynamelist)

#### Output
* output [DescribeRepositoriesResponse](#describerepositoriesresponse)

### GetAuthorizationToken



```js
amazonaws_ecr.GetAuthorizationToken({}, context)
```

#### Input
* input `object`
  * registryIds [GetAuthorizationTokenRegistryIdList](#getauthorizationtokenregistryidlist)

#### Output
* output [GetAuthorizationTokenResponse](#getauthorizationtokenresponse)

### GetDownloadUrlForLayer



```js
amazonaws_ecr.GetDownloadUrlForLayer({
  "repositoryName": "",
  "layerDigest": ""
}, context)
```

#### Input
* input `object`
  * layerDigest **required** [LayerDigest](#layerdigest)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetDownloadUrlForLayerResponse](#getdownloadurlforlayerresponse)

### GetLifecyclePolicy



```js
amazonaws_ecr.GetLifecyclePolicy({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetLifecyclePolicyResponse](#getlifecyclepolicyresponse)

### GetLifecyclePolicyPreview



```js
amazonaws_ecr.GetLifecyclePolicyPreview({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * filter [LifecyclePolicyPreviewFilter](#lifecyclepolicypreviewfilter)
  * imageIds [ImageIdentifierList](#imageidentifierlist)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetLifecyclePolicyPreviewResponse](#getlifecyclepolicypreviewresponse)

### GetRepositoryPolicy



```js
amazonaws_ecr.GetRepositoryPolicy({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetRepositoryPolicyResponse](#getrepositorypolicyresponse)

### InitiateLayerUpload



```js
amazonaws_ecr.InitiateLayerUpload({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [InitiateLayerUploadResponse](#initiatelayeruploadresponse)

### ListImages



```js
amazonaws_ecr.ListImages({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filter [ListImagesFilter](#listimagesfilter)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [ListImagesResponse](#listimagesresponse)

### PutImage



```js
amazonaws_ecr.PutImage({
  "repositoryName": "",
  "imageManifest": ""
}, context)
```

#### Input
* input `object`
  * imageManifest **required** [ImageManifest](#imagemanifest)
  * imageTag [ImageTag](#imagetag)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [PutImageResponse](#putimageresponse)

### PutLifecyclePolicy



```js
amazonaws_ecr.PutLifecyclePolicy({
  "repositoryName": "",
  "lifecyclePolicyText": ""
}, context)
```

#### Input
* input `object`
  * lifecyclePolicyText **required** [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [PutLifecyclePolicyResponse](#putlifecyclepolicyresponse)

### SetRepositoryPolicy



```js
amazonaws_ecr.SetRepositoryPolicy({
  "repositoryName": "",
  "policyText": ""
}, context)
```

#### Input
* input `object`
  * force [ForceFlag](#forceflag)
  * policyText **required** [RepositoryPolicyText](#repositorypolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [SetRepositoryPolicyResponse](#setrepositorypolicyresponse)

### StartLifecyclePolicyPreview



```js
amazonaws_ecr.StartLifecyclePolicyPreview({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [StartLifecyclePolicyPreviewResponse](#startlifecyclepolicypreviewresponse)

### UploadLayerPart



```js
amazonaws_ecr.UploadLayerPart({
  "repositoryName": "",
  "uploadId": "",
  "partFirstByte": 0,
  "partLastByte": 0,
  "layerPartBlob": ""
}, context)
```

#### Input
* input `object`
  * layerPartBlob **required** [LayerPartBlob](#layerpartblob)
  * partFirstByte **required** [PartSize](#partsize)
  * partLastByte **required** [PartSize](#partsize)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * uploadId **required** [UploadId](#uploadid)

#### Output
* output [UploadLayerPartResponse](#uploadlayerpartresponse)



## Definitions

### Arn
* Arn `string`

### AuthorizationData
* AuthorizationData `object`: An object representing authorization data for an Amazon ECR registry.
  * authorizationToken [Base64](#base64)
  * expiresAt [ExpirationTimestamp](#expirationtimestamp)
  * proxyEndpoint [ProxyEndpoint](#proxyendpoint)

### AuthorizationDataList
* AuthorizationDataList `array`
  * items [AuthorizationData](#authorizationdata)

### Base64
* Base64 `string`

### BatchCheckLayerAvailabilityRequest
* BatchCheckLayerAvailabilityRequest `object`
  * layerDigests **required** [BatchedOperationLayerDigestList](#batchedoperationlayerdigestlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### BatchCheckLayerAvailabilityResponse
* BatchCheckLayerAvailabilityResponse `object`
  * failures [LayerFailureList](#layerfailurelist)
  * layers [LayerList](#layerlist)

### BatchDeleteImageRequest
* BatchDeleteImageRequest `object`: Deletes specified images within a specified repository. Images are specified with either the <code>imageTag</code> or <code>imageDigest</code>.
  * imageIds **required** [ImageIdentifierList](#imageidentifierlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### BatchDeleteImageResponse
* BatchDeleteImageResponse `object`
  * failures [ImageFailureList](#imagefailurelist)
  * imageIds [ImageIdentifierList](#imageidentifierlist)

### BatchGetImageRequest
* BatchGetImageRequest `object`
  * acceptedMediaTypes [MediaTypeList](#mediatypelist)
  * imageIds **required** [ImageIdentifierList](#imageidentifierlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### BatchGetImageResponse
* BatchGetImageResponse `object`
  * failures [ImageFailureList](#imagefailurelist)
  * images [ImageList](#imagelist)

### BatchedOperationLayerDigest
* BatchedOperationLayerDigest `string`

### BatchedOperationLayerDigestList
* BatchedOperationLayerDigestList `array`
  * items [BatchedOperationLayerDigest](#batchedoperationlayerdigest)

### CompleteLayerUploadRequest
* CompleteLayerUploadRequest `object`
  * layerDigests **required** [LayerDigestList](#layerdigestlist)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * uploadId **required** [UploadId](#uploadid)

### CompleteLayerUploadResponse
* CompleteLayerUploadResponse `object`
  * layerDigest [LayerDigest](#layerdigest)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)
  * uploadId [UploadId](#uploadid)

### CreateRepositoryRequest
* CreateRepositoryRequest `object`
  * repositoryName **required** [RepositoryName](#repositoryname)

### CreateRepositoryResponse
* CreateRepositoryResponse `object`
  * repository [Repository](#repository)

### CreationTimestamp
* CreationTimestamp `string`

### DeleteLifecyclePolicyRequest
* DeleteLifecyclePolicyRequest `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteLifecyclePolicyResponse
* DeleteLifecyclePolicyResponse `object`
  * lastEvaluatedAt [EvaluationTimestamp](#evaluationtimestamp)
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### DeleteRepositoryPolicyRequest
* DeleteRepositoryPolicyRequest `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteRepositoryPolicyResponse
* DeleteRepositoryPolicyResponse `object`
  * policyText [RepositoryPolicyText](#repositorypolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### DeleteRepositoryRequest
* DeleteRepositoryRequest `object`
  * force [ForceFlag](#forceflag)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteRepositoryResponse
* DeleteRepositoryResponse `object`
  * repository [Repository](#repository)

### DescribeImagesFilter
* DescribeImagesFilter `object`: An object representing a filter on a <a>DescribeImages</a> operation.
  * tagStatus [TagStatus](#tagstatus)

### DescribeImagesRequest
* DescribeImagesRequest `object`
  * filter [DescribeImagesFilter](#describeimagesfilter)
  * imageIds [ImageIdentifierList](#imageidentifierlist)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### DescribeImagesResponse
* DescribeImagesResponse `object`
  * imageDetails [ImageDetailList](#imagedetaillist)
  * nextToken [NextToken](#nexttoken)

### DescribeRepositoriesRequest
* DescribeRepositoriesRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryNames [RepositoryNameList](#repositorynamelist)

### DescribeRepositoriesResponse
* DescribeRepositoriesResponse `object`
  * nextToken [NextToken](#nexttoken)
  * repositories [RepositoryList](#repositorylist)

### EmptyUploadException
* EmptyUploadException `object`: The specified layer upload does not contain any layer parts.
  * message [ExceptionMessage](#exceptionmessage)

### EvaluationTimestamp
* EvaluationTimestamp `string`

### ExceptionMessage
* ExceptionMessage `string`

### ExpirationTimestamp
* ExpirationTimestamp `string`

### ForceFlag
* ForceFlag `boolean`

### GetAuthorizationTokenRegistryIdList
* GetAuthorizationTokenRegistryIdList `array`
  * items [RegistryId](#registryid)

### GetAuthorizationTokenRequest
* GetAuthorizationTokenRequest `object`
  * registryIds [GetAuthorizationTokenRegistryIdList](#getauthorizationtokenregistryidlist)

### GetAuthorizationTokenResponse
* GetAuthorizationTokenResponse `object`
  * authorizationData [AuthorizationDataList](#authorizationdatalist)

### GetDownloadUrlForLayerRequest
* GetDownloadUrlForLayerRequest `object`
  * layerDigest **required** [LayerDigest](#layerdigest)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetDownloadUrlForLayerResponse
* GetDownloadUrlForLayerResponse `object`
  * downloadUrl [Url](#url)
  * layerDigest [LayerDigest](#layerdigest)

### GetLifecyclePolicyPreviewRequest
* GetLifecyclePolicyPreviewRequest `object`
  * filter [LifecyclePolicyPreviewFilter](#lifecyclepolicypreviewfilter)
  * imageIds [ImageIdentifierList](#imageidentifierlist)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetLifecyclePolicyPreviewResponse
* GetLifecyclePolicyPreviewResponse `object`
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * nextToken [NextToken](#nexttoken)
  * previewResults [LifecyclePolicyPreviewResultList](#lifecyclepolicypreviewresultlist)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)
  * status [LifecyclePolicyPreviewStatus](#lifecyclepolicypreviewstatus)
  * summary [LifecyclePolicyPreviewSummary](#lifecyclepolicypreviewsummary)

### GetLifecyclePolicyRequest
* GetLifecyclePolicyRequest `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetLifecyclePolicyResponse
* GetLifecyclePolicyResponse `object`
  * lastEvaluatedAt [EvaluationTimestamp](#evaluationtimestamp)
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### GetRepositoryPolicyRequest
* GetRepositoryPolicyRequest `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetRepositoryPolicyResponse
* GetRepositoryPolicyResponse `object`
  * policyText [RepositoryPolicyText](#repositorypolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### Image
* Image `object`: An object representing an Amazon ECR image.
  * imageId [ImageIdentifier](#imageidentifier)
  * imageManifest [ImageManifest](#imagemanifest)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### ImageActionType
* ImageActionType `string` (values: EXPIRE)

### ImageAlreadyExistsException
* ImageAlreadyExistsException `object`: The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.
  * message [ExceptionMessage](#exceptionmessage)

### ImageCount
* ImageCount `integer`

### ImageDetail
* ImageDetail `object`: An object that describes an image returned by a <a>DescribeImages</a> operation.
  * imageDigest [ImageDigest](#imagedigest)
  * imagePushedAt [PushTimestamp](#pushtimestamp)
  * imageSizeInBytes [ImageSizeInBytes](#imagesizeinbytes)
  * imageTags [ImageTagList](#imagetaglist)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### ImageDetailList
* ImageDetailList `array`
  * items [ImageDetail](#imagedetail)

### ImageDigest
* ImageDigest `string`

### ImageFailure
* ImageFailure `object`: An object representing an Amazon ECR image failure.
  * failureCode [ImageFailureCode](#imagefailurecode)
  * failureReason [ImageFailureReason](#imagefailurereason)
  * imageId [ImageIdentifier](#imageidentifier)

### ImageFailureCode
* ImageFailureCode `string` (values: InvalidImageDigest, InvalidImageTag, ImageTagDoesNotMatchDigest, ImageNotFound, MissingDigestAndTag)

### ImageFailureList
* ImageFailureList `array`
  * items [ImageFailure](#imagefailure)

### ImageFailureReason
* ImageFailureReason `string`

### ImageIdentifier
* ImageIdentifier `object`: An object with identifying information for an Amazon ECR image.
  * imageDigest [ImageDigest](#imagedigest)
  * imageTag [ImageTag](#imagetag)

### ImageIdentifierList
* ImageIdentifierList `array`
  * items [ImageIdentifier](#imageidentifier)

### ImageList
* ImageList `array`
  * items [Image](#image)

### ImageManifest
* ImageManifest `string`

### ImageNotFoundException
* ImageNotFoundException `object`: The image requested does not exist in the specified repository.
  * message [ExceptionMessage](#exceptionmessage)

### ImageSizeInBytes
* ImageSizeInBytes `integer`

### ImageTag
* ImageTag `string`

### ImageTagList
* ImageTagList `array`
  * items [ImageTag](#imagetag)

### InitiateLayerUploadRequest
* InitiateLayerUploadRequest `object`
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### InitiateLayerUploadResponse
* InitiateLayerUploadResponse `object`
  * partSize [PartSize](#partsize)
  * uploadId [UploadId](#uploadid)

### InvalidLayerException
* InvalidLayerException `object`: The layer digest calculation performed by Amazon ECR upon receipt of the image layer does not match the digest specified.
  * message [ExceptionMessage](#exceptionmessage)

### InvalidLayerPartException
* InvalidLayerPartException `object`: The layer part size is not valid, or the first byte specified is not consecutive to the last byte of a previous layer part upload.
  * lastValidByteReceived [PartSize](#partsize)
  * message [ExceptionMessage](#exceptionmessage)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)
  * uploadId [UploadId](#uploadid)

### InvalidParameterException
* InvalidParameterException `object`: The specified parameter is invalid. Review the available parameters for the API request.
  * message [ExceptionMessage](#exceptionmessage)

### Layer
* Layer `object`: An object representing an Amazon ECR image layer.
  * layerAvailability [LayerAvailability](#layeravailability)
  * layerDigest [LayerDigest](#layerdigest)
  * layerSize [LayerSizeInBytes](#layersizeinbytes)
  * mediaType [MediaType](#mediatype)

### LayerAlreadyExistsException
* LayerAlreadyExistsException `object`: The image layer already exists in the associated repository.
  * message [ExceptionMessage](#exceptionmessage)

### LayerAvailability
* LayerAvailability `string` (values: AVAILABLE, UNAVAILABLE)

### LayerDigest
* LayerDigest `string`

### LayerDigestList
* LayerDigestList `array`
  * items [LayerDigest](#layerdigest)

### LayerFailure
* LayerFailure `object`: An object representing an Amazon ECR image layer failure.
  * failureCode [LayerFailureCode](#layerfailurecode)
  * failureReason [LayerFailureReason](#layerfailurereason)
  * layerDigest [BatchedOperationLayerDigest](#batchedoperationlayerdigest)

### LayerFailureCode
* LayerFailureCode `string` (values: InvalidLayerDigest, MissingLayerDigest)

### LayerFailureList
* LayerFailureList `array`
  * items [LayerFailure](#layerfailure)

### LayerFailureReason
* LayerFailureReason `string`

### LayerInaccessibleException
* LayerInaccessibleException `object`: The specified layer is not available because it is not associated with an image. Unassociated image layers may be cleaned up at any time.
  * message [ExceptionMessage](#exceptionmessage)

### LayerList
* LayerList `array`
  * items [Layer](#layer)

### LayerPartBlob
* LayerPartBlob `string`

### LayerPartTooSmallException
* LayerPartTooSmallException `object`: Layer parts must be at least 5 MiB in size.
  * message [ExceptionMessage](#exceptionmessage)

### LayerSizeInBytes
* LayerSizeInBytes `integer`

### LayersNotFoundException
* LayersNotFoundException `object`: The specified layers could not be found, or the specified layer is not valid for this repository.
  * message [ExceptionMessage](#exceptionmessage)

### LifecyclePolicyNotFoundException
* LifecyclePolicyNotFoundException `object`: The lifecycle policy could not be found, and no policy is set to the repository.
  * message [ExceptionMessage](#exceptionmessage)

### LifecyclePolicyPreviewFilter
* LifecyclePolicyPreviewFilter `object`: The filter for the lifecycle policy preview.
  * tagStatus [TagStatus](#tagstatus)

### LifecyclePolicyPreviewInProgressException
* LifecyclePolicyPreviewInProgressException `object`: The previous lifecycle policy preview request has not completed. Please try again later.
  * message [ExceptionMessage](#exceptionmessage)

### LifecyclePolicyPreviewNotFoundException
* LifecyclePolicyPreviewNotFoundException `object`: There is no dry run for this repository.
  * message [ExceptionMessage](#exceptionmessage)

### LifecyclePolicyPreviewResult
* LifecyclePolicyPreviewResult `object`: The result of the lifecycle policy preview.
  * action [LifecyclePolicyRuleAction](#lifecyclepolicyruleaction)
  * appliedRulePriority [LifecyclePolicyRulePriority](#lifecyclepolicyrulepriority)
  * imageDigest [ImageDigest](#imagedigest)
  * imagePushedAt [PushTimestamp](#pushtimestamp)
  * imageTags [ImageTagList](#imagetaglist)

### LifecyclePolicyPreviewResultList
* LifecyclePolicyPreviewResultList `array`
  * items [LifecyclePolicyPreviewResult](#lifecyclepolicypreviewresult)

### LifecyclePolicyPreviewStatus
* LifecyclePolicyPreviewStatus `string` (values: IN_PROGRESS, COMPLETE, EXPIRED, FAILED)

### LifecyclePolicyPreviewSummary
* LifecyclePolicyPreviewSummary `object`: The summary of the lifecycle policy preview request.
  * expiringImageTotalCount [ImageCount](#imagecount)

### LifecyclePolicyRuleAction
* LifecyclePolicyRuleAction `object`: The type of action to be taken.
  * type [ImageActionType](#imageactiontype)

### LifecyclePolicyRulePriority
* LifecyclePolicyRulePriority `integer`

### LifecyclePolicyText
* LifecyclePolicyText `string`

### LimitExceededException
* LimitExceededException `object`: The operation did not succeed because it would have exceeded a service limit for your account. For more information, see <a href="http://docs.aws.amazon.com/AmazonECR/latest/userguide/service_limits.html">Amazon ECR Default Service Limits</a> in the Amazon EC2 Container Registry User Guide.
  * message [ExceptionMessage](#exceptionmessage)

### ListImagesFilter
* ListImagesFilter `object`: An object representing a filter on a <a>ListImages</a> operation.
  * tagStatus [TagStatus](#tagstatus)

### ListImagesRequest
* ListImagesRequest `object`
  * filter [ListImagesFilter](#listimagesfilter)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### ListImagesResponse
* ListImagesResponse `object`
  * imageIds [ImageIdentifierList](#imageidentifierlist)
  * nextToken [NextToken](#nexttoken)

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
  * imageManifest **required** [ImageManifest](#imagemanifest)
  * imageTag [ImageTag](#imagetag)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### PutImageResponse
* PutImageResponse `object`
  * image [Image](#image)

### PutLifecyclePolicyRequest
* PutLifecyclePolicyRequest `object`
  * lifecyclePolicyText **required** [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### PutLifecyclePolicyResponse
* PutLifecyclePolicyResponse `object`
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### RegistryId
* RegistryId `string`

### Repository
* Repository `object`: An object representing a repository.
  * createdAt [CreationTimestamp](#creationtimestamp)
  * registryId [RegistryId](#registryid)
  * repositoryArn [Arn](#arn)
  * repositoryName [RepositoryName](#repositoryname)
  * repositoryUri [Url](#url)

### RepositoryAlreadyExistsException
* RepositoryAlreadyExistsException `object`: The specified repository already exists in the specified registry.
  * message [ExceptionMessage](#exceptionmessage)

### RepositoryList
* RepositoryList `array`
  * items [Repository](#repository)

### RepositoryName
* RepositoryName `string`

### RepositoryNameList
* RepositoryNameList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryNotEmptyException
* RepositoryNotEmptyException `object`: The specified repository contains images. To delete a repository that contains images, you must force the deletion with the <code>force</code> parameter.
  * message [ExceptionMessage](#exceptionmessage)

### RepositoryNotFoundException
* RepositoryNotFoundException `object`: The specified repository could not be found. Check the spelling of the specified repository and ensure that you are performing operations on the correct registry.
  * message [ExceptionMessage](#exceptionmessage)

### RepositoryPolicyNotFoundException
* RepositoryPolicyNotFoundException `object`: The specified repository and registry combination does not have an associated repository policy.
  * message [ExceptionMessage](#exceptionmessage)

### RepositoryPolicyText
* RepositoryPolicyText `string`

### ServerException
* ServerException `object`: These errors are usually caused by a server-side issue.
  * message [ExceptionMessage](#exceptionmessage)

### SetRepositoryPolicyRequest
* SetRepositoryPolicyRequest `object`
  * force [ForceFlag](#forceflag)
  * policyText **required** [RepositoryPolicyText](#repositorypolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### SetRepositoryPolicyResponse
* SetRepositoryPolicyResponse `object`
  * policyText [RepositoryPolicyText](#repositorypolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)

### StartLifecyclePolicyPreviewRequest
* StartLifecyclePolicyPreviewRequest `object`
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### StartLifecyclePolicyPreviewResponse
* StartLifecyclePolicyPreviewResponse `object`
  * lifecyclePolicyText [LifecyclePolicyText](#lifecyclepolicytext)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)
  * status [LifecyclePolicyPreviewStatus](#lifecyclepolicypreviewstatus)

### TagStatus
* TagStatus `string` (values: TAGGED, UNTAGGED)

### UploadId
* UploadId `string`

### UploadLayerPartRequest
* UploadLayerPartRequest `object`
  * layerPartBlob **required** [LayerPartBlob](#layerpartblob)
  * partFirstByte **required** [PartSize](#partsize)
  * partLastByte **required** [PartSize](#partsize)
  * registryId [RegistryId](#registryid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * uploadId **required** [UploadId](#uploadid)

### UploadLayerPartResponse
* UploadLayerPartResponse `object`
  * lastByteReceived [PartSize](#partsize)
  * registryId [RegistryId](#registryid)
  * repositoryName [RepositoryName](#repositoryname)
  * uploadId [UploadId](#uploadid)

### UploadNotFoundException
* UploadNotFoundException `object`: The upload could not be found, or the specified upload id is not valid for this repository.
  * message [ExceptionMessage](#exceptionmessage)

### Url
* Url `string`


