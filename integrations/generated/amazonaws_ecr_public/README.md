# @datafire/amazonaws_ecr_public

Client library for Amazon Elastic Container Registry Public

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ecr_public
```
```js
let amazonaws_ecr_public = require('@datafire/amazonaws_ecr_public').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elastic Container Registry Public</fullname> <p>Amazon Elastic Container Registry (Amazon ECR) is a managed container image registry service. Amazon ECR provides both public and private registries to host your container images. You can use the familiar Docker CLI, or their preferred client, to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry for your Docker or Open Container Initiative (OCI) images. Amazon ECR supports public repositories with this API. For information about the Amazon ECR API for private repositories, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/APIReference/Welcome.html">Amazon Elastic Container Registry API Reference</a>.</p>

## Actions

### BatchCheckLayerAvailability



```js
amazonaws_ecr_public.BatchCheckLayerAvailability({
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
amazonaws_ecr_public.BatchDeleteImage({
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

### CompleteLayerUpload



```js
amazonaws_ecr_public.CompleteLayerUpload({
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
amazonaws_ecr_public.CreateRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * catalogData
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoImageBlob
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText
  * repositoryName **required**

#### Output
* output [CreateRepositoryResponse](#createrepositoryresponse)

### DeleteRepository



```js
amazonaws_ecr_public.DeleteRepository({
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
amazonaws_ecr_public.DeleteRepositoryPolicy({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [DeleteRepositoryPolicyResponse](#deleterepositorypolicyresponse)

### DescribeImageTags



```js
amazonaws_ecr_public.DescribeImageTags({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [DescribeImageTagsResponse](#describeimagetagsresponse)

### DescribeImages



```js
amazonaws_ecr_public.DescribeImages({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * imageIds
    * items [ImageIdentifier](#imageidentifier)
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

#### Output
* output [DescribeImagesResponse](#describeimagesresponse)

### DescribeRegistries



```js
amazonaws_ecr_public.DescribeRegistries({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [DescribeRegistriesResponse](#describeregistriesresponse)

### DescribeRepositories



```js
amazonaws_ecr_public.DescribeRepositories({}, context)
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
amazonaws_ecr_public.GetAuthorizationToken({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAuthorizationTokenResponse](#getauthorizationtokenresponse)

### GetRegistryCatalogData



```js
amazonaws_ecr_public.GetRegistryCatalogData({}, context)
```

#### Input
* input `object`

#### Output
* output [GetRegistryCatalogDataResponse](#getregistrycatalogdataresponse)

### GetRepositoryCatalogData



```js
amazonaws_ecr_public.GetRepositoryCatalogData({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [GetRepositoryCatalogDataResponse](#getrepositorycatalogdataresponse)

### GetRepositoryPolicy



```js
amazonaws_ecr_public.GetRepositoryPolicy({
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
amazonaws_ecr_public.InitiateLayerUpload({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * registryId
  * repositoryName **required**

#### Output
* output [InitiateLayerUploadResponse](#initiatelayeruploadresponse)

### PutImage



```js
amazonaws_ecr_public.PutImage({
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

### PutRegistryCatalogData



```js
amazonaws_ecr_public.PutRegistryCatalogData({}, context)
```

#### Input
* input `object`
  * displayName

#### Output
* output [PutRegistryCatalogDataResponse](#putregistrycatalogdataresponse)

### PutRepositoryCatalogData



```js
amazonaws_ecr_public.PutRepositoryCatalogData({
  "repositoryName": null,
  "catalogData": null
}, context)
```

#### Input
* input `object`
  * catalogData **required**
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoImageBlob
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText
  * registryId
  * repositoryName **required**

#### Output
* output [PutRepositoryCatalogDataResponse](#putrepositorycatalogdataresponse)

### SetRepositoryPolicy



```js
amazonaws_ecr_public.SetRepositoryPolicy({
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

### UploadLayerPart



```js
amazonaws_ecr_public.UploadLayerPart({
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

### AboutText
* AboutText `string`

### Architecture
* Architecture `string`

### ArchitectureList
* ArchitectureList `array`
  * items [Architecture](#architecture)

### Arn
* Arn `string`

### AuthorizationData
* AuthorizationData `object`: An authorization token data object that corresponds to a public registry.
  * authorizationToken
  * expiresAt

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
* BatchDeleteImageRequest `object`
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
  * catalogData
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoImageBlob
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText
  * repositoryName **required**

### CreateRepositoryResponse
* CreateRepositoryResponse `object`
  * catalogData [RepositoryCatalogData](#repositorycatalogdata)
  * repository
    * createdAt
    * registryId
    * repositoryArn
    * repositoryName
    * repositoryUri

### CreationTimestamp
* CreationTimestamp `string`

### DefaultRegistryAliasFlag
* DefaultRegistryAliasFlag `boolean`

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
    * registryId
    * repositoryArn
    * repositoryName
    * repositoryUri

### DescribeImageTagsRequest
* DescribeImageTagsRequest `object`
  * maxResults
  * nextToken
  * registryId
  * repositoryName **required**

### DescribeImageTagsResponse
* DescribeImageTagsResponse `object`
  * imageTagDetails
    * items [ImageTagDetail](#imagetagdetail)
  * nextToken

### DescribeImagesRequest
* DescribeImagesRequest `object`
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

### DescribeRegistriesRequest
* DescribeRegistriesRequest `object`
  * maxResults
  * nextToken

### DescribeRegistriesResponse
* DescribeRegistriesResponse `object`
  * nextToken
  * registries **required**
    * items [Registry](#registry)

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


### ExpirationTimestamp
* ExpirationTimestamp `string`

### ForceFlag
* ForceFlag `boolean`

### GetAuthorizationTokenRequest
* GetAuthorizationTokenRequest `object`

### GetAuthorizationTokenResponse
* GetAuthorizationTokenResponse `object`
  * authorizationData
    * authorizationToken
    * expiresAt

### GetRegistryCatalogDataRequest
* GetRegistryCatalogDataRequest `object`

### GetRegistryCatalogDataResponse
* GetRegistryCatalogDataResponse `object`
  * registryCatalogData **required**
    * displayName

### GetRepositoryCatalogDataRequest
* GetRepositoryCatalogDataRequest `object`
  * registryId
  * repositoryName **required**

### GetRepositoryCatalogDataResponse
* GetRepositoryCatalogDataResponse `object`
  * catalogData
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoUrl
    * marketplaceCertified
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText

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

### ImageAlreadyExistsException


### ImageDetail
* ImageDetail `object`: An object that describes an image returned by a <a>DescribeImages</a> operation.
  * artifactMediaType
  * imageDigest
  * imageManifestMediaType
  * imagePushedAt
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

### ImageManifest
* ImageManifest `string`

### ImageNotFoundException


### ImageSizeInBytes
* ImageSizeInBytes `integer`

### ImageTag
* ImageTag `string`

### ImageTagAlreadyExistsException


### ImageTagDetail
* ImageTagDetail `object`: An object representing the image tag details for an image.
  * createdAt
  * imageDetail
    * artifactMediaType
    * imageDigest
    * imageManifestMediaType
    * imagePushedAt
    * imageSizeInBytes
  * imageTag

### ImageTagDetailList
* ImageTagDetailList `array`
  * items [ImageTagDetail](#imagetagdetail)

### ImageTagList
* ImageTagList `array`
  * items [ImageTag](#imagetag)

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

### LayerList
* LayerList `array`
  * items [Layer](#layer)

### LayerPartBlob
* LayerPartBlob `string`

### LayerPartTooSmallException


### LayerSizeInBytes
* LayerSizeInBytes `integer`

### LayersNotFoundException


### LimitExceededException


### LogoImageBlob
* LogoImageBlob `string`

### MarketplaceCertified
* MarketplaceCertified `boolean`

### MaxResults
* MaxResults `integer`

### MediaType
* MediaType `string`

### NextToken
* NextToken `string`

### OperatingSystem
* OperatingSystem `string`

### OperatingSystemList
* OperatingSystemList `array`
  * items [OperatingSystem](#operatingsystem)

### PartSize
* PartSize `integer`

### PrimaryRegistryAliasFlag
* PrimaryRegistryAliasFlag `boolean`

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

### PutRegistryCatalogDataRequest
* PutRegistryCatalogDataRequest `object`
  * displayName

### PutRegistryCatalogDataResponse
* PutRegistryCatalogDataResponse `object`
  * registryCatalogData **required**
    * displayName

### PutRepositoryCatalogDataRequest
* PutRepositoryCatalogDataRequest `object`
  * catalogData **required**
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoImageBlob
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText
  * registryId
  * repositoryName **required**

### PutRepositoryCatalogDataResponse
* PutRepositoryCatalogDataResponse `object`
  * catalogData
    * aboutText
    * architectures
      * items [Architecture](#architecture)
    * description
    * logoUrl
    * marketplaceCertified
    * operatingSystems
      * items [OperatingSystem](#operatingsystem)
    * usageText

### ReferencedImageDetail
* ReferencedImageDetail `object`: An object that describes the image tag details returned by a <a>DescribeImageTags</a> action.
  * artifactMediaType
  * imageDigest
  * imageManifestMediaType
  * imagePushedAt
  * imageSizeInBytes

### ReferencedImagesNotFoundException


### Registry
* Registry `object`: The details of a public registry.
  * aliases **required**
    * items [RegistryAlias](#registryalias)
  * registryArn **required**
  * registryId **required**
  * registryUri **required**
  * verified **required**

### RegistryAlias
* RegistryAlias `object`: An object representing the aliases for a public registry. A public registry is given an alias upon creation but a custom alias can be set using the Amazon ECR console. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html">Registries</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
  * defaultRegistryAlias **required**
  * name **required**
  * primaryRegistryAlias **required**
  * status **required**

### RegistryAliasList
* RegistryAliasList `array`
  * items [RegistryAlias](#registryalias)

### RegistryAliasName
* RegistryAliasName `string`

### RegistryAliasStatus
* RegistryAliasStatus `string` (values: ACTIVE, PENDING, REJECTED)

### RegistryCatalogData
* RegistryCatalogData `object`: The metadata for a public registry.
  * displayName

### RegistryDisplayName
* RegistryDisplayName `string`

### RegistryId
* RegistryId `string`

### RegistryIdOrAlias
* RegistryIdOrAlias `string`

### RegistryList
* RegistryList `array`
  * items [Registry](#registry)

### RegistryNotFoundException


### RegistryVerified
* RegistryVerified `boolean`

### Repository
* Repository `object`: An object representing a repository.
  * createdAt
  * registryId
  * repositoryArn
  * repositoryName
  * repositoryUri

### RepositoryAlreadyExistsException


### RepositoryCatalogData
* RepositoryCatalogData `object`: The catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
  * aboutText
  * architectures
    * items [Architecture](#architecture)
  * description
  * logoUrl
  * marketplaceCertified
  * operatingSystems
    * items [OperatingSystem](#operatingsystem)
  * usageText

### RepositoryCatalogDataInput
* RepositoryCatalogDataInput `object`: An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
  * aboutText
  * architectures
    * items [Architecture](#architecture)
  * description
  * logoImageBlob
  * operatingSystems
    * items [OperatingSystem](#operatingsystem)
  * usageText

### RepositoryDescription
* RepositoryDescription `string`

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

### ResourceUrl
* ResourceUrl `string`

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

### UnsupportedCommandException


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

### UsageText
* UsageText `string`


