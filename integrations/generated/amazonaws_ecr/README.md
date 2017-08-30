# @datafire/amazonaws_ecr

Client library for Amazon EC2 Container Registry

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ecr
```

```js
let datafire = require('datafire');
let amazonaws_ecr = require('@datafire/amazonaws_ecr').create();

amazonaws_ecr.BatchCheckLayerAvailability({}).then(data => {
  console.log(data);
})
```

## Description
Amazon EC2 Container Registry (Amazon ECR) is a managed AWS Docker registry service. Customers can use the familiar Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry. Amazon ECR supports private Docker repositories with resource-based permissions using AWS IAM so that specific users or Amazon EC2 instances can access repositories and images. Developers can use the Docker CLI to author and manage images.

## Actions
### BatchCheckLayerAvailability



```js
amazonaws_ecr.BatchCheckLayerAvailability({
  "repositoryName": "",
  "layerDigests": []
}, context)
```

#### Parameters
* layerDigests (array) **required**
* registryId (string)
* repositoryName (string) **required**

### BatchDeleteImage



```js
amazonaws_ecr.BatchDeleteImage({
  "repositoryName": "",
  "imageIds": []
}, context)
```

#### Parameters
* imageIds (array) **required**
* registryId (string)
* repositoryName (string) **required**

### BatchGetImage



```js
amazonaws_ecr.BatchGetImage({
  "repositoryName": "",
  "imageIds": []
}, context)
```

#### Parameters
* acceptedMediaTypes (array)
* imageIds (array) **required**
* registryId (string)
* repositoryName (string) **required**

### CompleteLayerUpload



```js
amazonaws_ecr.CompleteLayerUpload({
  "repositoryName": "",
  "uploadId": "",
  "layerDigests": []
}, context)
```

#### Parameters
* layerDigests (array) **required**
* registryId (string)
* repositoryName (string) **required**
* uploadId (string) **required**

### CreateRepository



```js
amazonaws_ecr.CreateRepository({
  "repositoryName": ""
}, context)
```

#### Parameters
* repositoryName (string) **required**

### DeleteRepository



```js
amazonaws_ecr.DeleteRepository({
  "repositoryName": ""
}, context)
```

#### Parameters
* force (boolean)
* registryId (string)
* repositoryName (string) **required**

### DeleteRepositoryPolicy



```js
amazonaws_ecr.DeleteRepositoryPolicy({
  "repositoryName": ""
}, context)
```

#### Parameters
* registryId (string)
* repositoryName (string) **required**

### DescribeImages



```js
amazonaws_ecr.DescribeImages({
  "repositoryName": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) - An object representing a filter on a <a>DescribeImages</a> operation.
* imageIds (array)
* maxResults (integer)
* nextToken (string)
* registryId (string)
* repositoryName (string) **required**

### DescribeRepositories



```js
amazonaws_ecr.DescribeRepositories({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)
* registryId (string)
* repositoryNames (array)

### GetAuthorizationToken



```js
amazonaws_ecr.GetAuthorizationToken({}, context)
```

#### Parameters
* registryIds (array)

### GetDownloadUrlForLayer



```js
amazonaws_ecr.GetDownloadUrlForLayer({
  "repositoryName": "",
  "layerDigest": ""
}, context)
```

#### Parameters
* layerDigest (string) **required**
* registryId (string)
* repositoryName (string) **required**

### GetRepositoryPolicy



```js
amazonaws_ecr.GetRepositoryPolicy({
  "repositoryName": ""
}, context)
```

#### Parameters
* registryId (string)
* repositoryName (string) **required**

### InitiateLayerUpload



```js
amazonaws_ecr.InitiateLayerUpload({
  "repositoryName": ""
}, context)
```

#### Parameters
* registryId (string)
* repositoryName (string) **required**

### ListImages



```js
amazonaws_ecr.ListImages({
  "repositoryName": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) - An object representing a filter on a <a>ListImages</a> operation.
* maxResults (integer)
* nextToken (string)
* registryId (string)
* repositoryName (string) **required**

### PutImage



```js
amazonaws_ecr.PutImage({
  "repositoryName": "",
  "imageManifest": ""
}, context)
```

#### Parameters
* imageManifest (string) **required**
* imageTag (string)
* registryId (string)
* repositoryName (string) **required**

### SetRepositoryPolicy



```js
amazonaws_ecr.SetRepositoryPolicy({
  "repositoryName": "",
  "policyText": ""
}, context)
```

#### Parameters
* force (boolean)
* policyText (string) **required**
* registryId (string)
* repositoryName (string) **required**

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

#### Parameters
* layerPartBlob (string) **required**
* partFirstByte (integer) **required**
* partLastByte (integer) **required**
* registryId (string)
* repositoryName (string) **required**
* uploadId (string) **required**

