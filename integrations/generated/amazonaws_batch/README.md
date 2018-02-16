# @datafire/amazonaws_batch

Client library for AWS Batch

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_batch
```
```js
let amazonaws_batch = require('@datafire/amazonaws_batch').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_batch.CancelJob({
  "jobId": "",
  "reason": ""
}).then(data => {
  console.log(data);
});
```

## Description

<p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to users of traditional batch computing software. This service can efficiently provision resources in response to jobs submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p> <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run their batch jobs in the AWS Cloud.</p>

## Actions

### CancelJob



```js
amazonaws_batch.CancelJob({
  "jobId": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** [String](#string)
  * reason **required** [String](#string)

#### Output
* output [CancelJobResponse](#canceljobresponse)

### CreateComputeEnvironment



```js
amazonaws_batch.CreateComputeEnvironment({
  "computeEnvironmentName": "",
  "type": "",
  "serviceRole": ""
}, context)
```

#### Input
* input `object`
  * computeEnvironmentName **required** [String](#string)
  * computeResources [ComputeResource](#computeresource)
  * serviceRole **required** [String](#string)
  * state [CEState](#cestate)
  * type **required** [CEType](#cetype)

#### Output
* output [CreateComputeEnvironmentResponse](#createcomputeenvironmentresponse)

### CreateJobQueue



```js
amazonaws_batch.CreateJobQueue({
  "jobQueueName": "",
  "priority": 0,
  "computeEnvironmentOrder": []
}, context)
```

#### Input
* input `object`
  * computeEnvironmentOrder **required** [ComputeEnvironmentOrders](#computeenvironmentorders)
  * jobQueueName **required** [String](#string)
  * priority **required** [Integer](#integer)
  * state [JQState](#jqstate)

#### Output
* output [CreateJobQueueResponse](#createjobqueueresponse)

### DeleteComputeEnvironment



```js
amazonaws_batch.DeleteComputeEnvironment({
  "computeEnvironment": ""
}, context)
```

#### Input
* input `object`
  * computeEnvironment **required** [String](#string)

#### Output
* output [DeleteComputeEnvironmentResponse](#deletecomputeenvironmentresponse)

### DeleteJobQueue



```js
amazonaws_batch.DeleteJobQueue({
  "jobQueue": ""
}, context)
```

#### Input
* input `object`
  * jobQueue **required** [String](#string)

#### Output
* output [DeleteJobQueueResponse](#deletejobqueueresponse)

### DeregisterJobDefinition



```js
amazonaws_batch.DeregisterJobDefinition({
  "jobDefinition": ""
}, context)
```

#### Input
* input `object`
  * jobDefinition **required** [String](#string)

#### Output
* output [DeregisterJobDefinitionResponse](#deregisterjobdefinitionresponse)

### DescribeComputeEnvironments



```js
amazonaws_batch.DescribeComputeEnvironments({}, context)
```

#### Input
* input `object`
  * computeEnvironments [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

#### Output
* output [DescribeComputeEnvironmentsResponse](#describecomputeenvironmentsresponse)

### DescribeJobDefinitions



```js
amazonaws_batch.DescribeJobDefinitions({}, context)
```

#### Input
* input `object`
  * jobDefinitionName [String](#string)
  * jobDefinitions [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)
  * status [String](#string)

#### Output
* output [DescribeJobDefinitionsResponse](#describejobdefinitionsresponse)

### DescribeJobQueues



```js
amazonaws_batch.DescribeJobQueues({}, context)
```

#### Input
* input `object`
  * jobQueues [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

#### Output
* output [DescribeJobQueuesResponse](#describejobqueuesresponse)

### DescribeJobs



```js
amazonaws_batch.DescribeJobs({
  "jobs": []
}, context)
```

#### Input
* input `object`
  * jobs **required** [StringList](#stringlist)

#### Output
* output [DescribeJobsResponse](#describejobsresponse)

### ListJobs



```js
amazonaws_batch.ListJobs({}, context)
```

#### Input
* input `object`
  * arrayJobId [String](#string)
  * jobQueue [String](#string)
  * jobStatus [JobStatus](#jobstatus)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

#### Output
* output [ListJobsResponse](#listjobsresponse)

### RegisterJobDefinition



```js
amazonaws_batch.RegisterJobDefinition({
  "jobDefinitionName": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * containerProperties [ContainerProperties](#containerproperties)
  * jobDefinitionName **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)
  * type **required** [JobDefinitionType](#jobdefinitiontype)

#### Output
* output [RegisterJobDefinitionResponse](#registerjobdefinitionresponse)

### SubmitJob



```js
amazonaws_batch.SubmitJob({
  "jobName": "",
  "jobQueue": "",
  "jobDefinition": ""
}, context)
```

#### Input
* input `object`
  * arrayProperties [ArrayProperties](#arrayproperties)
  * containerOverrides [ContainerOverrides](#containeroverrides)
  * dependsOn [JobDependencyList](#jobdependencylist)
  * jobDefinition **required** [String](#string)
  * jobName **required** [String](#string)
  * jobQueue **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)

#### Output
* output [SubmitJobResponse](#submitjobresponse)

### TerminateJob



```js
amazonaws_batch.TerminateJob({
  "jobId": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** [String](#string)
  * reason **required** [String](#string)

#### Output
* output [TerminateJobResponse](#terminatejobresponse)

### UpdateComputeEnvironment



```js
amazonaws_batch.UpdateComputeEnvironment({
  "computeEnvironment": ""
}, context)
```

#### Input
* input `object`
  * computeEnvironment **required** [String](#string)
  * computeResources [ComputeResourceUpdate](#computeresourceupdate)
  * serviceRole [String](#string)
  * state [CEState](#cestate)

#### Output
* output [UpdateComputeEnvironmentResponse](#updatecomputeenvironmentresponse)

### UpdateJobQueue



```js
amazonaws_batch.UpdateJobQueue({
  "jobQueue": ""
}, context)
```

#### Input
* input `object`
  * computeEnvironmentOrder [ComputeEnvironmentOrders](#computeenvironmentorders)
  * jobQueue **required** [String](#string)
  * priority [Integer](#integer)
  * state [JQState](#jqstate)

#### Output
* output [UpdateJobQueueResponse](#updatejobqueueresponse)



## Definitions

### ArrayJobDependency
* ArrayJobDependency `string` (values: N_TO_N, SEQUENTIAL)

### ArrayJobStatusSummary
* ArrayJobStatusSummary `array`
  * items `object`
    * key [String](#string)
    * value [Integer](#integer)

### ArrayProperties
* ArrayProperties `object`: An object representing an AWS Batch array job.
  * size [Integer](#integer)

### ArrayPropertiesDetail
* ArrayPropertiesDetail `object`: An object representing the array properties of a job.
  * index [Integer](#integer)
  * size [Integer](#integer)
  * statusSummary [ArrayJobStatusSummary](#arrayjobstatussummary)

### ArrayPropertiesSummary
* ArrayPropertiesSummary `object`: An object representing the array properties of a job.
  * index [Integer](#integer)
  * size [Integer](#integer)

### AttemptContainerDetail
* AttemptContainerDetail `object`: An object representing the details of a container that is part of a job attempt.
  * containerInstanceArn [String](#string)
  * exitCode [Integer](#integer)
  * logStreamName [String](#string)
  * reason [String](#string)
  * taskArn [String](#string)

### AttemptDetail
* AttemptDetail `object`: An object representing a job attempt.
  * container [AttemptContainerDetail](#attemptcontainerdetail)
  * startedAt [Long](#long)
  * statusReason [String](#string)
  * stoppedAt [Long](#long)

### AttemptDetails
* AttemptDetails `array`
  * items [AttemptDetail](#attemptdetail)

### Boolean
* Boolean `boolean`

### CEState
* CEState `string` (values: ENABLED, DISABLED)

### CEStatus
* CEStatus `string` (values: CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)

### CEType
* CEType `string` (values: MANAGED, UNMANAGED)

### CRType
* CRType `string` (values: EC2, SPOT)

### CancelJobRequest
* CancelJobRequest `object`
  * jobId **required** [String](#string)
  * reason **required** [String](#string)

### CancelJobResponse
* CancelJobResponse `object`

### ClientException
* ClientException `object`: These errors are usually caused by a client action, such as using an action or resource on behalf of a user that doesn't have permissions to use the action or resource, or specifying an identifier that is not valid. 
  * message [String](#string)

### ComputeEnvironmentDetail
* ComputeEnvironmentDetail `object`: An object representing an AWS Batch compute environment.
  * computeEnvironmentArn **required** [String](#string)
  * computeEnvironmentName **required** [String](#string)
  * computeResources [ComputeResource](#computeresource)
  * ecsClusterArn **required** [String](#string)
  * serviceRole [String](#string)
  * state [CEState](#cestate)
  * status [CEStatus](#cestatus)
  * statusReason [String](#string)
  * type [CEType](#cetype)

### ComputeEnvironmentDetailList
* ComputeEnvironmentDetailList `array`
  * items [ComputeEnvironmentDetail](#computeenvironmentdetail)

### ComputeEnvironmentOrder
* ComputeEnvironmentOrder `object`: The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.
  * computeEnvironment **required** [String](#string)
  * order **required** [Integer](#integer)

### ComputeEnvironmentOrders
* ComputeEnvironmentOrders `array`
  * items [ComputeEnvironmentOrder](#computeenvironmentorder)

### ComputeResource
* ComputeResource `object`: An object representing an AWS Batch compute resource.
  * bidPercentage [Integer](#integer)
  * desiredvCpus [Integer](#integer)
  * ec2KeyPair [String](#string)
  * imageId [String](#string)
  * instanceRole **required** [String](#string)
  * instanceTypes **required** [StringList](#stringlist)
  * maxvCpus **required** [Integer](#integer)
  * minvCpus **required** [Integer](#integer)
  * securityGroupIds **required** [StringList](#stringlist)
  * spotIamFleetRole [String](#string)
  * subnets **required** [StringList](#stringlist)
  * tags [TagsMap](#tagsmap)
  * type **required** [CRType](#crtype)

### ComputeResourceUpdate
* ComputeResourceUpdate `object`: An object representing the attributes of a compute environment that can be updated.
  * desiredvCpus [Integer](#integer)
  * maxvCpus [Integer](#integer)
  * minvCpus [Integer](#integer)

### ContainerDetail
* ContainerDetail `object`: An object representing the details of a container that is part of a job.
  * command [StringList](#stringlist)
  * containerInstanceArn [String](#string)
  * environment [EnvironmentVariables](#environmentvariables)
  * exitCode [Integer](#integer)
  * image [String](#string)
  * jobRoleArn [String](#string)
  * logStreamName [String](#string)
  * memory [Integer](#integer)
  * mountPoints [MountPoints](#mountpoints)
  * privileged [Boolean](#boolean)
  * readonlyRootFilesystem [Boolean](#boolean)
  * reason [String](#string)
  * taskArn [String](#string)
  * ulimits [Ulimits](#ulimits)
  * user [String](#string)
  * vcpus [Integer](#integer)
  * volumes [Volumes](#volumes)

### ContainerOverrides
* ContainerOverrides `object`: The overrides that should be sent to a container.
  * command [StringList](#stringlist)
  * environment [EnvironmentVariables](#environmentvariables)
  * memory [Integer](#integer)
  * vcpus [Integer](#integer)

### ContainerProperties
* ContainerProperties `object`: Container properties are used in job definitions to describe the container that is launched as part of a job.
  * command [StringList](#stringlist)
  * environment [EnvironmentVariables](#environmentvariables)
  * image **required** [String](#string)
  * jobRoleArn [String](#string)
  * memory **required** [Integer](#integer)
  * mountPoints [MountPoints](#mountpoints)
  * privileged [Boolean](#boolean)
  * readonlyRootFilesystem [Boolean](#boolean)
  * ulimits [Ulimits](#ulimits)
  * user [String](#string)
  * vcpus **required** [Integer](#integer)
  * volumes [Volumes](#volumes)

### ContainerSummary
* ContainerSummary `object`: An object representing summary details of a container within a job.
  * exitCode [Integer](#integer)
  * reason [String](#string)

### CreateComputeEnvironmentRequest
* CreateComputeEnvironmentRequest `object`
  * computeEnvironmentName **required** [String](#string)
  * computeResources [ComputeResource](#computeresource)
  * serviceRole **required** [String](#string)
  * state [CEState](#cestate)
  * type **required** [CEType](#cetype)

### CreateComputeEnvironmentResponse
* CreateComputeEnvironmentResponse `object`
  * computeEnvironmentArn [String](#string)
  * computeEnvironmentName [String](#string)

### CreateJobQueueRequest
* CreateJobQueueRequest `object`
  * computeEnvironmentOrder **required** [ComputeEnvironmentOrders](#computeenvironmentorders)
  * jobQueueName **required** [String](#string)
  * priority **required** [Integer](#integer)
  * state [JQState](#jqstate)

### CreateJobQueueResponse
* CreateJobQueueResponse `object`
  * jobQueueArn **required** [String](#string)
  * jobQueueName **required** [String](#string)

### DeleteComputeEnvironmentRequest
* DeleteComputeEnvironmentRequest `object`
  * computeEnvironment **required** [String](#string)

### DeleteComputeEnvironmentResponse
* DeleteComputeEnvironmentResponse `object`

### DeleteJobQueueRequest
* DeleteJobQueueRequest `object`
  * jobQueue **required** [String](#string)

### DeleteJobQueueResponse
* DeleteJobQueueResponse `object`

### DeregisterJobDefinitionRequest
* DeregisterJobDefinitionRequest `object`
  * jobDefinition **required** [String](#string)

### DeregisterJobDefinitionResponse
* DeregisterJobDefinitionResponse `object`

### DescribeComputeEnvironmentsRequest
* DescribeComputeEnvironmentsRequest `object`
  * computeEnvironments [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

### DescribeComputeEnvironmentsResponse
* DescribeComputeEnvironmentsResponse `object`
  * computeEnvironments [ComputeEnvironmentDetailList](#computeenvironmentdetaillist)
  * nextToken [String](#string)

### DescribeJobDefinitionsRequest
* DescribeJobDefinitionsRequest `object`
  * jobDefinitionName [String](#string)
  * jobDefinitions [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)
  * status [String](#string)

### DescribeJobDefinitionsResponse
* DescribeJobDefinitionsResponse `object`
  * jobDefinitions [JobDefinitionList](#jobdefinitionlist)
  * nextToken [String](#string)

### DescribeJobQueuesRequest
* DescribeJobQueuesRequest `object`
  * jobQueues [StringList](#stringlist)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

### DescribeJobQueuesResponse
* DescribeJobQueuesResponse `object`
  * jobQueues [JobQueueDetailList](#jobqueuedetaillist)
  * nextToken [String](#string)

### DescribeJobsRequest
* DescribeJobsRequest `object`
  * jobs **required** [StringList](#stringlist)

### DescribeJobsResponse
* DescribeJobsResponse `object`
  * jobs [JobDetailList](#jobdetaillist)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [KeyValuePair](#keyvaluepair)

### Host
* Host `object`: The contents of the <code>host</code> parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data is not guaranteed to persist after the containers associated with it stop running.
  * sourcePath [String](#string)

### Integer
* Integer `integer`

### JQState
* JQState `string` (values: ENABLED, DISABLED)

### JQStatus
* JQStatus `string` (values: CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)

### JobDefinition
* JobDefinition `object`: An object representing an AWS Batch job definition.
  * containerProperties [ContainerProperties](#containerproperties)
  * jobDefinitionArn **required** [String](#string)
  * jobDefinitionName **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)
  * revision **required** [Integer](#integer)
  * status [String](#string)
  * type **required** [String](#string)

### JobDefinitionList
* JobDefinitionList `array`
  * items [JobDefinition](#jobdefinition)

### JobDefinitionType
* JobDefinitionType `string` (values: container)

### JobDependency
* JobDependency `object`: An object representing an AWS Batch job dependency.
  * jobId [String](#string)
  * type [ArrayJobDependency](#arrayjobdependency)

### JobDependencyList
* JobDependencyList `array`
  * items [JobDependency](#jobdependency)

### JobDetail
* JobDetail `object`: An object representing an AWS Batch job.
  * arrayProperties [ArrayPropertiesDetail](#arraypropertiesdetail)
  * attempts [AttemptDetails](#attemptdetails)
  * container [ContainerDetail](#containerdetail)
  * createdAt [Long](#long)
  * dependsOn [JobDependencyList](#jobdependencylist)
  * jobDefinition **required** [String](#string)
  * jobId **required** [String](#string)
  * jobName **required** [String](#string)
  * jobQueue **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)
  * startedAt **required** [Long](#long)
  * status **required** [JobStatus](#jobstatus)
  * statusReason [String](#string)
  * stoppedAt [Long](#long)

### JobDetailList
* JobDetailList `array`
  * items [JobDetail](#jobdetail)

### JobQueueDetail
* JobQueueDetail `object`: An object representing the details of an AWS Batch job queue.
  * computeEnvironmentOrder **required** [ComputeEnvironmentOrders](#computeenvironmentorders)
  * jobQueueArn **required** [String](#string)
  * jobQueueName **required** [String](#string)
  * priority **required** [Integer](#integer)
  * state **required** [JQState](#jqstate)
  * status [JQStatus](#jqstatus)
  * statusReason [String](#string)

### JobQueueDetailList
* JobQueueDetailList `array`
  * items [JobQueueDetail](#jobqueuedetail)

### JobStatus
* JobStatus `string` (values: SUBMITTED, PENDING, RUNNABLE, STARTING, RUNNING, SUCCEEDED, FAILED)

### JobSummary
* JobSummary `object`: An object representing summary details of a job.
  * arrayProperties [ArrayPropertiesSummary](#arraypropertiessummary)
  * container [ContainerSummary](#containersummary)
  * createdAt [Long](#long)
  * jobId **required** [String](#string)
  * jobName **required** [String](#string)
  * startedAt [Long](#long)
  * status [JobStatus](#jobstatus)
  * statusReason [String](#string)
  * stoppedAt [Long](#long)

### JobSummaryList
* JobSummaryList `array`
  * items [JobSummary](#jobsummary)

### KeyValuePair
* KeyValuePair `object`: A key-value pair object.
  * name [String](#string)
  * value [String](#string)

### ListJobsRequest
* ListJobsRequest `object`
  * arrayJobId [String](#string)
  * jobQueue [String](#string)
  * jobStatus [JobStatus](#jobstatus)
  * maxResults [Integer](#integer)
  * nextToken [String](#string)

### ListJobsResponse
* ListJobsResponse `object`
  * jobSummaryList **required** [JobSummaryList](#jobsummarylist)
  * nextToken [String](#string)

### Long
* Long `integer`

### MountPoint
* MountPoint `object`: Details on a Docker volume mount point that is used in a job's container properties.
  * containerPath [String](#string)
  * readOnly [Boolean](#boolean)
  * sourceVolume [String](#string)

### MountPoints
* MountPoints `array`
  * items [MountPoint](#mountpoint)

### ParametersMap
* ParametersMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### RegisterJobDefinitionRequest
* RegisterJobDefinitionRequest `object`
  * containerProperties [ContainerProperties](#containerproperties)
  * jobDefinitionName **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)
  * type **required** [JobDefinitionType](#jobdefinitiontype)

### RegisterJobDefinitionResponse
* RegisterJobDefinitionResponse `object`
  * jobDefinitionArn **required** [String](#string)
  * jobDefinitionName **required** [String](#string)
  * revision **required** [Integer](#integer)

### RetryStrategy
* RetryStrategy `object`: The retry strategy associated with a job.
  * attempts [Integer](#integer)

### ServerException
* ServerException `object`: These errors are usually caused by a server issue.
  * message [String](#string)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubmitJobRequest
* SubmitJobRequest `object`
  * arrayProperties [ArrayProperties](#arrayproperties)
  * containerOverrides [ContainerOverrides](#containeroverrides)
  * dependsOn [JobDependencyList](#jobdependencylist)
  * jobDefinition **required** [String](#string)
  * jobName **required** [String](#string)
  * jobQueue **required** [String](#string)
  * parameters [ParametersMap](#parametersmap)
  * retryStrategy [RetryStrategy](#retrystrategy)

### SubmitJobResponse
* SubmitJobResponse `object`
  * jobId **required** [String](#string)
  * jobName **required** [String](#string)

### TagsMap
* TagsMap `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### TerminateJobRequest
* TerminateJobRequest `object`
  * jobId **required** [String](#string)
  * reason **required** [String](#string)

### TerminateJobResponse
* TerminateJobResponse `object`

### Ulimit
* Ulimit `object`: The <code>ulimit</code> settings to pass to the container.
  * hardLimit **required** [Integer](#integer)
  * name **required** [String](#string)
  * softLimit **required** [Integer](#integer)

### Ulimits
* Ulimits `array`
  * items [Ulimit](#ulimit)

### UpdateComputeEnvironmentRequest
* UpdateComputeEnvironmentRequest `object`
  * computeEnvironment **required** [String](#string)
  * computeResources [ComputeResourceUpdate](#computeresourceupdate)
  * serviceRole [String](#string)
  * state [CEState](#cestate)

### UpdateComputeEnvironmentResponse
* UpdateComputeEnvironmentResponse `object`
  * computeEnvironmentArn [String](#string)
  * computeEnvironmentName [String](#string)

### UpdateJobQueueRequest
* UpdateJobQueueRequest `object`
  * computeEnvironmentOrder [ComputeEnvironmentOrders](#computeenvironmentorders)
  * jobQueue **required** [String](#string)
  * priority [Integer](#integer)
  * state [JQState](#jqstate)

### UpdateJobQueueResponse
* UpdateJobQueueResponse `object`
  * jobQueueArn [String](#string)
  * jobQueueName [String](#string)

### Volume
* Volume `object`: A data volume used in a job's container properties.
  * host [Host](#host)
  * name [String](#string)

### Volumes
* Volumes `array`
  * items [Volume](#volume)


