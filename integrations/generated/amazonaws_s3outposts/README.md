# @datafire/amazonaws_s3outposts

Client library for Amazon S3 on Outposts

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_s3outposts
```
```js
let amazonaws_s3outposts = require('@datafire/amazonaws_s3outposts').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon S3 on Outposts provides access to S3 on Outposts operations.

## Actions

### CreateEndpoint



```js
amazonaws_s3outposts.CreateEndpoint({
  "OutpostId": "",
  "SubnetId": "",
  "SecurityGroupId": ""
}, context)
```

#### Input
* input `object`
  * OutpostId **required** `string`: The ID of the AWS Outpost. 
  * SecurityGroupId **required** `string`: The ID of the security group to use with the endpoint.
  * SubnetId **required** `string`: The ID of the subnet in the selected VPC.

#### Output
* output [CreateEndpointResult](#createendpointresult)

### DeleteEndpoint



```js
amazonaws_s3outposts.DeleteEndpoint({
  "endpointId": "",
  "outpostId": ""
}, context)
```

#### Input
* input `object`
  * endpointId **required** `string`
  * outpostId **required** `string`

#### Output
*Output schema unknown*

### ListEndpoints



```js
amazonaws_s3outposts.ListEndpoints({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListEndpointsResult](#listendpointsresult)



## Definitions

### AccessDeniedException


### CidrBlock
* CidrBlock `string`

### ConflictException


### CreateEndpointRequest
* CreateEndpointRequest `object`
  * OutpostId **required**
  * SecurityGroupId **required**
  * SubnetId **required**

### CreateEndpointResult
* CreateEndpointResult `object`
  * EndpointArn

### CreationTime
* CreationTime `string`

### DeleteEndpointRequest
* DeleteEndpointRequest `object`

### Endpoint
* Endpoint `object`: S3 on Outposts access points simplify managing data access at scale for shared datasets in Amazon S3 on Outposts. S3 on Outposts uses endpoints to connect to Outposts buckets so that you can perform actions within your virtual private cloud (VPC). 
  * CidrBlock
  * CreationTime
  * EndpointArn
  * NetworkInterfaces
    * items [NetworkInterface](#networkinterface)
  * OutpostsId
  * Status

### EndpointArn
* EndpointArn `string`

### EndpointId
* EndpointId `string`

### EndpointStatus
* EndpointStatus `string` (values: PENDING, AVAILABLE)

### Endpoints
* Endpoints `array`
  * items [Endpoint](#endpoint)

### InternalServerException


### ListEndpointsRequest
* ListEndpointsRequest `object`

### ListEndpointsResult
* ListEndpointsResult `object`
  * Endpoints
    * items [Endpoint](#endpoint)
  * NextToken

### MaxResults
* MaxResults `integer`

### NetworkInterface
* NetworkInterface `object`: The container for the network interface.
  * NetworkInterfaceId

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NetworkInterfaces
* NetworkInterfaces `array`
  * items [NetworkInterface](#networkinterface)

### NextToken
* NextToken `string`

### OutpostId
* OutpostId `string`

### ResourceNotFoundException


### SecurityGroupId
* SecurityGroupId `string`

### SubnetId
* SubnetId `string`

### ValidationException



