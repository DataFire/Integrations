# @datafire/amazonaws_emr_containers

Client library for Amazon EMR Containers

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_emr_containers
```
```js
let amazonaws_emr_containers = require('@datafire/amazonaws_emr_containers').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Amazon EMR on EKS provides a deployment option for Amazon EMR that allows you to run open-source big data frameworks on Amazon Elastic Kubernetes Service (Amazon EKS). With this deployment option, you can focus on running analytics workloads while Amazon EMR on EKS builds, configures, and manages containers for open-source applications. For more information about Amazon EMR on EKS concepts and tasks, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html">What is Amazon EMR on EKS</a>.</p> <p> <i>Amazon EMR containers</i> is the API name for Amazon EMR on EKS. The <code>emr-containers</code> prefix is used in the following scenarios: </p> <ul> <li> <p>It is the prefix in the CLI commands for Amazon EMR on EKS. For example, <code>aws emr-containers start-job-run</code>.</p> </li> <li> <p>It is the prefix before IAM policy actions for Amazon EMR on EKS. For example, <code>"Action": [ "emr-containers:StartJobRun"]</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-actions">Policy actions for Amazon EMR on EKS</a>.</p> </li> <li> <p>It is the prefix used in Amazon EMR on EKS service endpoints. For example, <code>emr-containers.us-east-2.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/service-quotas.html#service-endpoints">Amazon EMR on EKS Service Endpoints</a>.</p> </li> </ul>

## Actions

### ListTagsForResource



```js
amazonaws_emr_containers.ListTagsForResource({
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
amazonaws_emr_containers.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags assigned to resources.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_emr_containers.UntagResource({
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

### ListVirtualClusters



```js
amazonaws_emr_containers.ListVirtualClusters({}, context)
```

#### Input
* input `object`
  * containerProviderId `string`
  * containerProviderType `string`
  * createdAfter `string`
  * createdBefore `string`
  * states `array`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListVirtualClustersResponse](#listvirtualclustersresponse)

### CreateVirtualCluster



```js
amazonaws_emr_containers.CreateVirtualCluster({
  "name": "",
  "containerProvider": {},
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags assigned to the virtual cluster.
  * clientToken **required** `string`: The client token of the virtual cluster.
  * containerProvider **required** `object`: The information about the container provider.
    * info
      * eksInfo
        * namespace
    * id
    * type
  * name **required** `string`: The specified name of the virtual cluster.

#### Output
* output [CreateVirtualClusterResponse](#createvirtualclusterresponse)

### DeleteVirtualCluster



```js
amazonaws_emr_containers.DeleteVirtualCluster({
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`

#### Output
* output [DeleteVirtualClusterResponse](#deletevirtualclusterresponse)

### DescribeVirtualCluster



```js
amazonaws_emr_containers.DescribeVirtualCluster({
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`

#### Output
* output [DescribeVirtualClusterResponse](#describevirtualclusterresponse)

### ListManagedEndpoints



```js
amazonaws_emr_containers.ListManagedEndpoints({
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`
  * createdBefore `string`
  * createdAfter `string`
  * types `array`
  * states `array`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListManagedEndpointsResponse](#listmanagedendpointsresponse)

### CreateManagedEndpoint



```js
amazonaws_emr_containers.CreateManagedEndpoint({
  "virtualClusterId": "",
  "name": "",
  "type": "",
  "releaseLabel": "",
  "executionRoleArn": "",
  "certificateArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`
  * tags `object`: The tags of the managed endpoint. 
  * certificateArn **required** `string`: The certificate ARN of the managed endpoint.
  * clientToken **required** `string`: The client idempotency token for this create call.
  * configurationOverrides `object`: A configuration specification to be used to override existing configurations.
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * executionRoleArn **required** `string`: The ARN of the execution role.
  * name **required** `string`: The name of the managed endpoint.
  * releaseLabel **required** `string`: The Amazon EMR release version.
  * type **required** `string`: The type of the managed endpoint.

#### Output
* output [CreateManagedEndpointResponse](#createmanagedendpointresponse)

### DeleteManagedEndpoint



```js
amazonaws_emr_containers.DeleteManagedEndpoint({
  "endpointId": "",
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * endpointId **required** `string`
  * virtualClusterId **required** `string`

#### Output
* output [DeleteManagedEndpointResponse](#deletemanagedendpointresponse)

### DescribeManagedEndpoint



```js
amazonaws_emr_containers.DescribeManagedEndpoint({
  "endpointId": "",
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * endpointId **required** `string`
  * virtualClusterId **required** `string`

#### Output
* output [DescribeManagedEndpointResponse](#describemanagedendpointresponse)

### ListJobRuns



```js
amazonaws_emr_containers.ListJobRuns({
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`
  * createdBefore `string`
  * createdAfter `string`
  * name `string`
  * states `array`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListJobRunsResponse](#listjobrunsresponse)

### StartJobRun



```js
amazonaws_emr_containers.StartJobRun({
  "virtualClusterId": "",
  "clientToken": "",
  "executionRoleArn": "",
  "releaseLabel": "",
  "jobDriver": {}
}, context)
```

#### Input
* input `object`
  * virtualClusterId **required** `string`
  * tags `object`: The tags assigned to job runs.
  * clientToken **required** `string`: The client idempotency token of the job run request. 
  * configurationOverrides `object`: A configuration specification to be used to override existing configurations.
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * executionRoleArn **required** `string`: The execution role ARN for the job run.
  * jobDriver **required** `object`: Specify the driver that the job runs on.
    * sparkSubmitJobDriver
      * entryPoint **required**
      * entryPointArguments
        * items [EntryPointArgument](#entrypointargument)
      * sparkSubmitParameters
  * name `string`: The name of the job run.
  * releaseLabel **required** `string`: The Amazon EMR release version to use for the job run.

#### Output
* output [StartJobRunResponse](#startjobrunresponse)

### CancelJobRun



```js
amazonaws_emr_containers.CancelJobRun({
  "jobRunId": "",
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * jobRunId **required** `string`
  * virtualClusterId **required** `string`

#### Output
* output [CancelJobRunResponse](#canceljobrunresponse)

### DescribeJobRun



```js
amazonaws_emr_containers.DescribeJobRun({
  "jobRunId": "",
  "virtualClusterId": ""
}, context)
```

#### Input
* input `object`
  * jobRunId **required** `string`
  * virtualClusterId **required** `string`

#### Output
* output [DescribeJobRunResponse](#describejobrunresponse)



## Definitions

### ACMCertArn
* ACMCertArn `string`

### CancelJobRunRequest
* CancelJobRunRequest `object`

### CancelJobRunResponse
* CancelJobRunResponse `object`
  * id
  * virtualClusterId

### ClientToken
* ClientToken `string`

### CloudWatchMonitoringConfiguration
* CloudWatchMonitoringConfiguration `object`: A configuration for CloudWatch monitoring. You can configure your jobs to send log information to CloudWatch Logs.
  * logGroupName **required**
  * logStreamNamePrefix

### Configuration
* Configuration `object`: A configuration specification to be used when provisioning virtual clusters, which can include configurations for applications and software bundled with Amazon EMR on EKS. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
  * classification **required**
  * configurations
    * items [Configuration](#configuration)
  * properties

### ConfigurationList
* ConfigurationList `array`
  * items [Configuration](#configuration)

### ConfigurationOverrides
* ConfigurationOverrides `object`: A configuration specification to be used to override existing configurations.
  * applicationConfiguration
    * items [Configuration](#configuration)
  * monitoringConfiguration
    * cloudWatchMonitoringConfiguration
      * logGroupName **required**
      * logStreamNamePrefix
    * persistentAppUI
    * s3MonitoringConfiguration
      * logUri **required**

### ContainerInfo
* ContainerInfo `object`: The information about the container used for a job run or a managed endpoint.
  * eksInfo
    * namespace

### ContainerProvider
* ContainerProvider `object`: The information about the container provider.
  * info
    * eksInfo
      * namespace
  * id **required**
  * type **required**

### ContainerProviderType
* ContainerProviderType `string` (values: EKS)

### CreateManagedEndpointRequest
* CreateManagedEndpointRequest `object`
  * tags
  * certificateArn **required**
  * clientToken **required**
  * configurationOverrides
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * executionRoleArn **required**
  * name **required**
  * releaseLabel **required**
  * type **required**

### CreateManagedEndpointResponse
* CreateManagedEndpointResponse `object`
  * arn
  * id
  * name
  * virtualClusterId

### CreateVirtualClusterRequest
* CreateVirtualClusterRequest `object`
  * tags
  * clientToken **required**
  * containerProvider **required**
    * info
      * eksInfo
        * namespace
    * id **required**
    * type **required**
  * name **required**

### CreateVirtualClusterResponse
* CreateVirtualClusterResponse `object`
  * arn
  * id
  * name

### Date
* Date `string`

### DeleteManagedEndpointRequest
* DeleteManagedEndpointRequest `object`

### DeleteManagedEndpointResponse
* DeleteManagedEndpointResponse `object`
  * id
  * virtualClusterId

### DeleteVirtualClusterRequest
* DeleteVirtualClusterRequest `object`

### DeleteVirtualClusterResponse
* DeleteVirtualClusterResponse `object`
  * id

### DescribeJobRunRequest
* DescribeJobRunRequest `object`

### DescribeJobRunResponse
* DescribeJobRunResponse `object`
  * jobRun
    * tags
    * arn
    * clientToken
    * configurationOverrides
      * applicationConfiguration
        * items [Configuration](#configuration)
      * monitoringConfiguration
        * cloudWatchMonitoringConfiguration
          * logGroupName **required**
          * logStreamNamePrefix
        * persistentAppUI
        * s3MonitoringConfiguration
          * logUri **required**
    * createdAt
    * createdBy
    * executionRoleArn
    * failureReason
    * finishedAt
    * id
    * jobDriver
      * sparkSubmitJobDriver
        * entryPoint **required**
        * entryPointArguments
          * items [EntryPointArgument](#entrypointargument)
        * sparkSubmitParameters
    * name
    * releaseLabel
    * state
    * stateDetails
    * virtualClusterId

### DescribeManagedEndpointRequest
* DescribeManagedEndpointRequest `object`

### DescribeManagedEndpointResponse
* DescribeManagedEndpointResponse `object`
  * endpoint
    * tags
    * arn
    * certificateArn
    * configurationOverrides
      * applicationConfiguration
        * items [Configuration](#configuration)
      * monitoringConfiguration
        * cloudWatchMonitoringConfiguration
          * logGroupName **required**
          * logStreamNamePrefix
        * persistentAppUI
        * s3MonitoringConfiguration
          * logUri **required**
    * createdAt
    * executionRoleArn
    * id
    * name
    * releaseLabel
    * securityGroup
    * serverUrl
    * state
    * subnetIds
      * items [String256](#string256)
    * type
    * virtualClusterId

### DescribeVirtualClusterRequest
* DescribeVirtualClusterRequest `object`

### DescribeVirtualClusterResponse
* DescribeVirtualClusterResponse `object`
  * virtualCluster
    * tags
    * arn
    * containerProvider
      * info
        * eksInfo
          * namespace
      * id **required**
      * type **required**
    * createdAt
    * id
    * name
    * state

### EksInfo
* EksInfo `object`: The information about the EKS cluster.
  * namespace

### Endpoint
* Endpoint `object`: This entity represents the endpoint that is managed by Amazon EMR on EKS.
  * tags
  * arn
  * certificateArn
  * configurationOverrides
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * createdAt
  * executionRoleArn
  * id
  * name
  * releaseLabel
  * securityGroup
  * serverUrl
  * state
  * subnetIds
    * items [String256](#string256)
  * type
  * virtualClusterId

### EndpointArn
* EndpointArn `string`

### EndpointState
* EndpointState `string` (values: CREATING, ACTIVE, TERMINATING, TERMINATED, TERMINATED_WITH_ERRORS)

### EndpointStates
* EndpointStates `array`
  * items [EndpointState](#endpointstate)

### EndpointType
* EndpointType `string`

### EndpointTypes
* EndpointTypes `array`
  * items [EndpointType](#endpointtype)

### Endpoints
* Endpoints `array`
  * items [Endpoint](#endpoint)

### EntryPointArgument
* EntryPointArgument `string`

### EntryPointArguments
* EntryPointArguments `array`
  * items [EntryPointArgument](#entrypointargument)

### EntryPointPath
* EntryPointPath `string`

### FailureReason
* FailureReason `string` (values: INTERNAL_ERROR, USER_ERROR, VALIDATION_ERROR, CLUSTER_UNAVAILABLE)

### IAMRoleArn
* IAMRoleArn `string`

### InternalServerException


### JavaInteger
* JavaInteger `integer`

### JobArn
* JobArn `string`

### JobDriver
* JobDriver `object`: Specify the driver that the job runs on.
  * sparkSubmitJobDriver
    * entryPoint **required**
    * entryPointArguments
      * items [EntryPointArgument](#entrypointargument)
    * sparkSubmitParameters

### JobRun
* JobRun `object`: This entity describes a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS. 
  * tags
  * arn
  * clientToken
  * configurationOverrides
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * createdAt
  * createdBy
  * executionRoleArn
  * failureReason
  * finishedAt
  * id
  * jobDriver
    * sparkSubmitJobDriver
      * entryPoint **required**
      * entryPointArguments
        * items [EntryPointArgument](#entrypointargument)
      * sparkSubmitParameters
  * name
  * releaseLabel
  * state
  * stateDetails
  * virtualClusterId

### JobRunState
* JobRunState `string` (values: PENDING, SUBMITTED, RUNNING, FAILED, CANCELLED, CANCEL_PENDING, COMPLETED)

### JobRunStates
* JobRunStates `array`
  * items [JobRunState](#jobrunstate)

### JobRuns
* JobRuns `array`
  * items [JobRun](#jobrun)

### ListJobRunsRequest
* ListJobRunsRequest `object`

### ListJobRunsResponse
* ListJobRunsResponse `object`
  * jobRuns
    * items [JobRun](#jobrun)
  * nextToken

### ListManagedEndpointsRequest
* ListManagedEndpointsRequest `object`

### ListManagedEndpointsResponse
* ListManagedEndpointsResponse `object`
  * endpoints
    * items [Endpoint](#endpoint)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListVirtualClustersRequest
* ListVirtualClustersRequest `object`

### ListVirtualClustersResponse
* ListVirtualClustersResponse `object`
  * nextToken
  * virtualClusters
    * items [VirtualCluster](#virtualcluster)

### LogGroupName
* LogGroupName `string`

### MonitoringConfiguration
* MonitoringConfiguration `object`: Configuration setting for monitoring.
  * cloudWatchMonitoringConfiguration
    * logGroupName **required**
    * logStreamNamePrefix
  * persistentAppUI
  * s3MonitoringConfiguration
    * logUri **required**

### NextToken
* NextToken `string`

### PersistentAppUI
* PersistentAppUI `string` (values: ENABLED, DISABLED)

### ReleaseLabel
* ReleaseLabel `string`

### RequestIdentityUserArn
* RequestIdentityUserArn `string`

### ResourceIdString
* ResourceIdString `string`

### ResourceNameString
* ResourceNameString `string`

### ResourceNotFoundException


### RsiArn
* RsiArn `string`

### S3MonitoringConfiguration
* S3MonitoringConfiguration `object`:  Amazon S3 configuration for monitoring log publishing. You can configure your jobs to send log information to Amazon S3.
  * logUri **required**

### SensitivePropertiesMap
* SensitivePropertiesMap `object`

### SparkSubmitJobDriver
* SparkSubmitJobDriver `object`: The information about job driver for Spark submit.
  * entryPoint **required**
  * entryPointArguments
    * items [EntryPointArgument](#entrypointargument)
  * sparkSubmitParameters

### SparkSubmitParameters
* SparkSubmitParameters `string`

### StartJobRunRequest
* StartJobRunRequest `object`
  * tags
  * clientToken **required**
  * configurationOverrides
    * applicationConfiguration
      * items [Configuration](#configuration)
    * monitoringConfiguration
      * cloudWatchMonitoringConfiguration
        * logGroupName **required**
        * logStreamNamePrefix
      * persistentAppUI
      * s3MonitoringConfiguration
        * logUri **required**
  * executionRoleArn **required**
  * jobDriver **required**
    * sparkSubmitJobDriver
      * entryPoint **required**
      * entryPointArguments
        * items [EntryPointArgument](#entrypointargument)
      * sparkSubmitParameters
  * name
  * releaseLabel **required**

### StartJobRunResponse
* StartJobRunResponse `object`
  * arn
  * id
  * name
  * virtualClusterId

### String1024
* String1024 `string`

### String128
* String128 `string`

### String256
* String256 `string`

### StringEmpty256
* StringEmpty256 `string`

### SubnetIds
* SubnetIds `array`
  * items [String256](#string256)

### TagKeyList
* TagKeyList `array`
  * items [String128](#string128)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UriString
* UriString `string`

### ValidationException


### VirtualCluster
* VirtualCluster `object`: This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.
  * tags
  * arn
  * containerProvider
    * info
      * eksInfo
        * namespace
    * id **required**
    * type **required**
  * createdAt
  * id
  * name
  * state

### VirtualClusterArn
* VirtualClusterArn `string`

### VirtualClusterState
* VirtualClusterState `string` (values: RUNNING, TERMINATING, TERMINATED, ARRESTED)

### VirtualClusterStates
* VirtualClusterStates `array`
  * items [VirtualClusterState](#virtualclusterstate)

### VirtualClusters
* VirtualClusters `array`
  * items [VirtualCluster](#virtualcluster)


