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
amazonaws_ecr.BatchCheckLayerAvailability({}, context)
```


### BatchDeleteImage



```js
amazonaws_ecr.BatchDeleteImage({}, context)
```


### BatchGetImage



```js
amazonaws_ecr.BatchGetImage({}, context)
```


### CompleteLayerUpload



```js
amazonaws_ecr.CompleteLayerUpload({}, context)
```


### CreateRepository



```js
amazonaws_ecr.CreateRepository({}, context)
```


### DeleteRepository



```js
amazonaws_ecr.DeleteRepository({}, context)
```


### DeleteRepositoryPolicy



```js
amazonaws_ecr.DeleteRepositoryPolicy({}, context)
```


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


### GetDownloadUrlForLayer



```js
amazonaws_ecr.GetDownloadUrlForLayer({}, context)
```


### GetRepositoryPolicy



```js
amazonaws_ecr.GetRepositoryPolicy({}, context)
```


### InitiateLayerUpload



```js
amazonaws_ecr.InitiateLayerUpload({}, context)
```


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


### SetRepositoryPolicy



```js
amazonaws_ecr.SetRepositoryPolicy({}, context)
```


### UploadLayerPart



```js
amazonaws_ecr.UploadLayerPart({}, context)
```


