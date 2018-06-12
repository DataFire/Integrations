# @datafire/amazonaws_eks

Client library for Amazon Elastic Container Service for Kubernetes

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_eks
```
```js
let amazonaws_eks = require('@datafire/amazonaws_eks').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_eks.ListClusters({}).then(data => {
  console.log(data);
});
```

## Description

<p>Amazon Elastic Container Service for Kubernetes (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. </p> <p>Amazon EKS runs three Kubernetes control plane instances across three Availability Zones to ensure high availability. Amazon EKS automatically detects and replaces unhealthy control plane instances, and it provides automated version upgrades and patching for them.</p> <p>Amazon EKS is also integrated with many AWS services to provide scalability and security for your applications, including the following: </p> <ul> <li> <p>Elastic Load Balancing for load distribution</p> </li> <li> <p>IAM for authentication</p> </li> <li> <p>Amazon VPC for isolation</p> </li> </ul> <p>Amazon EKS runs up to date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.</p>

## Actions

### ListClusters



```js
amazonaws_eks.ListClusters({}, context)
```

#### Input
* input `object`

#### Output
* output [ListClustersResponse](#listclustersresponse)

### CreateCluster



```js
amazonaws_eks.CreateCluster({
  "name": "",
  "roleArn": "",
  "resourcesVpcConfig": {
    "subnetIds": []
  }
}, context)
```

#### Input
* input `object`
  * clientRequestToken [String](#string)
  * name **required** [ClusterName](#clustername)
  * resourcesVpcConfig **required** [VpcConfigRequest](#vpcconfigrequest)
  * roleArn **required** [String](#string)
  * version [String](#string)

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### DeleteCluster



```js
amazonaws_eks.DeleteCluster({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DescribeCluster



```js
amazonaws_eks.DescribeCluster({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeClusterResponse](#describeclusterresponse)



## Definitions

### Certificate
* Certificate `object`: An object representing the <code>certificate-authority-data</code> for your cluster.
  * data [String](#string)

### ClientException
* ClientException `object`: These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid.
  * clusterName [String](#string)
  * message [String](#string)

### Cluster
* Cluster `object`: An object representing an Amazon EKS cluster.
  * arn [String](#string)
  * certificateAuthority [Certificate](#certificate)
  * clientRequestToken [String](#string)
  * createdAt [Timestamp](#timestamp)
  * endpoint [String](#string)
  * name [String](#string)
  * resourcesVpcConfig [VpcConfigResponse](#vpcconfigresponse)
  * roleArn [String](#string)
  * status [ClusterStatus](#clusterstatus)
  * version [String](#string)

### ClusterName
* ClusterName `string`

### ClusterStatus
* ClusterStatus `string` (values: CREATING, ACTIVE, DELETING, FAILED)

### CreateClusterRequest
* CreateClusterRequest `object`
  * clientRequestToken [String](#string)
  * name **required** [ClusterName](#clustername)
  * resourcesVpcConfig **required** [VpcConfigRequest](#vpcconfigrequest)
  * roleArn **required** [String](#string)
  * version [String](#string)

### CreateClusterResponse
* CreateClusterResponse `object`
  * cluster [Cluster](#cluster)

### DeleteClusterRequest
* DeleteClusterRequest `object`

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * cluster [Cluster](#cluster)

### DescribeClusterRequest
* DescribeClusterRequest `object`

### DescribeClusterResponse
* DescribeClusterResponse `object`
  * cluster [Cluster](#cluster)

### InvalidParameterException
* InvalidParameterException `object`: The specified parameter is invalid. Review the available parameters for the API request.
  * clusterName [String](#string)
  * message [String](#string)

### ListClustersRequest
* ListClustersRequest `object`

### ListClustersRequestMaxResults
* ListClustersRequestMaxResults `integer`

### ListClustersResponse
* ListClustersResponse `object`
  * clusters [StringList](#stringlist)
  * nextToken [String](#string)

### ResourceInUseException
* ResourceInUseException `object`: The specified resource is in use.
  * clusterName [String](#string)
  * message [String](#string)

### ResourceLimitExceededException
* ResourceLimitExceededException `object`: You have encountered a service limit on the specified resource.
  * clusterName [String](#string)
  * message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource could not be found. You can view your available clusters with <a>ListClusters</a>. Amazon EKS clusters are region-specific.
  * clusterName [String](#string)
  * message [String](#string)

### ServerException
* ServerException `object`: These errors are usually caused by a server-side issue.
  * clusterName [String](#string)
  * message [String](#string)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The service is unavailable, back off and retry the operation.
  * message [String](#string)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### Timestamp
* Timestamp `string`

### UnsupportedAvailabilityZoneException
* UnsupportedAvailabilityZoneException `object`: At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output will specify the supported Availability Zones for your account, from which you can choose subnets for your cluster.
  * clusterName [String](#string)
  * message [String](#string)
  * validZones [StringList](#stringlist)

### VpcConfigRequest
* VpcConfigRequest `object`: An object representing an Amazon EKS cluster VPC configuration request.
  * securityGroupIds [StringList](#stringlist)
  * subnetIds **required** [StringList](#stringlist)

### VpcConfigResponse
* VpcConfigResponse `object`: An object representing an Amazon EKS cluster VPC configuration response.
  * securityGroupIds [StringList](#stringlist)
  * subnetIds [StringList](#stringlist)
  * vpcId [String](#string)


