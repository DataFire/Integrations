# @datafire/amazonaws_ecr

Client library for Amazon EC2 Container Registry

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_ecr
```

```js
let datafire = require('datafire');
let amazonaws_ecr = require('@datafire/amazonaws_ecr').actions;
let context = new datafire.Context();

amazonaws_ecr.BatchCheckLayerAvailability({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon EC2 Container Registry (Amazon ECR) is a managed AWS Docker registry service. Customers can use the familiar Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and reliable registry. Amazon ECR supports private Docker repositories with resource-based permissions using AWS IAM so that specific users or Amazon EC2 instances can access repositories and images. Developers can use the Docker CLI to author and manage images.

## Actions
### BatchCheckLayerAvailability



```js
amazonaws_ecr.BatchCheckLayerAvailability({}, context)
```

#### Parameters

### BatchDeleteImage



```js
amazonaws_ecr.BatchDeleteImage({}, context)
```

#### Parameters

### BatchGetImage



```js
amazonaws_ecr.BatchGetImage({}, context)
```

#### Parameters

### CompleteLayerUpload



```js
amazonaws_ecr.CompleteLayerUpload({}, context)
```

#### Parameters

### CreateRepository



```js
amazonaws_ecr.CreateRepository({}, context)
```

#### Parameters

### DeleteRepository



```js
amazonaws_ecr.DeleteRepository({}, context)
```

#### Parameters

### DeleteRepositoryPolicy



```js
amazonaws_ecr.DeleteRepositoryPolicy({}, context)
```

#### Parameters

### DescribeImages



```js
amazonaws_ecr.DescribeImages({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### DescribeRepositories



```js
amazonaws_ecr.DescribeRepositories({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetAuthorizationToken



```js
amazonaws_ecr.GetAuthorizationToken({}, context)
```

#### Parameters

### GetDownloadUrlForLayer



```js
amazonaws_ecr.GetDownloadUrlForLayer({}, context)
```

#### Parameters

### GetRepositoryPolicy



```js
amazonaws_ecr.GetRepositoryPolicy({}, context)
```

#### Parameters

### InitiateLayerUpload



```js
amazonaws_ecr.InitiateLayerUpload({}, context)
```

#### Parameters

### ListImages



```js
amazonaws_ecr.ListImages({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### PutImage



```js
amazonaws_ecr.PutImage({}, context)
```

#### Parameters

### SetRepositoryPolicy



```js
amazonaws_ecr.SetRepositoryPolicy({}, context)
```

#### Parameters

### UploadLayerPart



```js
amazonaws_ecr.UploadLayerPart({}, context)
```

#### Parameters

