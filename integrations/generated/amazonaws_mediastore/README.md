# @datafire/amazonaws_mediastore

Client library for AWS Elemental MediaStore

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediastore
```
```js
let amazonaws_mediastore = require('@datafire/amazonaws_mediastore').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_mediastore.CreateContainer({}).then(data => {
  console.log(data);
})
```

## Description

An AWS Elemental MediaStore container is a namespace that holds folders and objects. You use a container endpoint to create, read, and delete objects. 

## Actions

### CreateContainer



```js
amazonaws_mediastore.CreateContainer({
  "ContainerName": ""
}, context)
```

#### Input
* input `object`
  * ContainerName **required** [ContainerName](#containername)

#### Output
* output [CreateContainerOutput](#createcontaineroutput)

### DeleteContainer



```js
amazonaws_mediastore.DeleteContainer({
  "ContainerName": ""
}, context)
```

#### Input
* input `object`
  * ContainerName **required** [ContainerName](#containername)

#### Output
* output [DeleteContainerOutput](#deletecontaineroutput)

### DeleteContainerPolicy



```js
amazonaws_mediastore.DeleteContainerPolicy({
  "ContainerName": ""
}, context)
```

#### Input
* input `object`
  * ContainerName **required** [ContainerName](#containername)

#### Output
* output [DeleteContainerPolicyOutput](#deletecontainerpolicyoutput)

### DescribeContainer



```js
amazonaws_mediastore.DescribeContainer({}, context)
```

#### Input
* input `object`
  * ContainerName [ContainerName](#containername)

#### Output
* output [DescribeContainerOutput](#describecontaineroutput)

### GetContainerPolicy



```js
amazonaws_mediastore.GetContainerPolicy({
  "ContainerName": ""
}, context)
```

#### Input
* input `object`
  * ContainerName **required** [ContainerName](#containername)

#### Output
* output [GetContainerPolicyOutput](#getcontainerpolicyoutput)

### ListContainers



```js
amazonaws_mediastore.ListContainers({}, context)
```

#### Input
* input `object`
  * MaxResults [ContainerListLimit](#containerlistlimit)
  * NextToken [PaginationToken](#paginationtoken)

#### Output
* output [ListContainersOutput](#listcontainersoutput)

### PutContainerPolicy



```js
amazonaws_mediastore.PutContainerPolicy({
  "ContainerName": "",
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * ContainerName **required** [ContainerName](#containername)
  * Policy **required** [ContainerPolicy](#containerpolicy)

#### Output
* output [PutContainerPolicyOutput](#putcontainerpolicyoutput)



## Definitions

### Container
* Container `object`: This section describes operations that you can perform on an AWS Elemental MediaStore container.
  * ARN [ContainerARN](#containerarn)
  * CreationTime [TimeStamp](#timestamp)
  * Endpoint [Endpoint](#endpoint)
  * Name [ContainerName](#containername)
  * Status [ContainerStatus](#containerstatus)

### ContainerARN
* ContainerARN `string`

### ContainerInUseException
* ContainerInUseException `object`: Resource already exists or is being updated.
  * Message [ErrorMessage](#errormessage)

### ContainerList
* ContainerList `array`
  * items [Container](#container)

### ContainerListLimit
* ContainerListLimit `integer`

### ContainerName
* ContainerName `string`

### ContainerNotFoundException
* ContainerNotFoundException `object`: Could not perform an operation on a container that does not exist.
  * Message [ErrorMessage](#errormessage)

### ContainerPolicy
* ContainerPolicy `string`

### ContainerStatus
* ContainerStatus `string` (values: ACTIVE, CREATING, DELETING)

### CreateContainerInput
* CreateContainerInput `object`
  * ContainerName **required** [ContainerName](#containername)

### CreateContainerOutput
* CreateContainerOutput `object`
  * Container **required** [Container](#container)

### DeleteContainerInput
* DeleteContainerInput `object`
  * ContainerName **required** [ContainerName](#containername)

### DeleteContainerOutput
* DeleteContainerOutput `object`

### DeleteContainerPolicyInput
* DeleteContainerPolicyInput `object`
  * ContainerName **required** [ContainerName](#containername)

### DeleteContainerPolicyOutput
* DeleteContainerPolicyOutput `object`

### DescribeContainerInput
* DescribeContainerInput `object`
  * ContainerName [ContainerName](#containername)

### DescribeContainerOutput
* DescribeContainerOutput `object`
  * Container [Container](#container)

### Endpoint
* Endpoint `string`

### ErrorMessage
* ErrorMessage `string`

### GetContainerPolicyInput
* GetContainerPolicyInput `object`
  * ContainerName **required** [ContainerName](#containername)

### GetContainerPolicyOutput
* GetContainerPolicyOutput `object`
  * Policy **required** [ContainerPolicy](#containerpolicy)

### InternalServerError
* InternalServerError `object`: The service is temporarily unavailable.
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: A service limit has been exceeded.
  * Message [ErrorMessage](#errormessage)

### ListContainersInput
* ListContainersInput `object`
  * MaxResults [ContainerListLimit](#containerlistlimit)
  * NextToken [PaginationToken](#paginationtoken)

### ListContainersOutput
* ListContainersOutput `object`
  * Containers **required** [ContainerList](#containerlist)
  * NextToken [PaginationToken](#paginationtoken)

### PaginationToken
* PaginationToken `string`

### PolicyNotFoundException
* PolicyNotFoundException `object`: Could not perform an operation on a policy that does not exist.
  * Message [ErrorMessage](#errormessage)

### PutContainerPolicyInput
* PutContainerPolicyInput `object`
  * ContainerName **required** [ContainerName](#containername)
  * Policy **required** [ContainerPolicy](#containerpolicy)

### PutContainerPolicyOutput
* PutContainerPolicyOutput `object`

### TimeStamp
* TimeStamp `string`


