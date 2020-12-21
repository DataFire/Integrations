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

.then(data => {
  console.log(data);
});
```

## Description

<p>Using AWS Batch, you can run batch computing workloads on the AWS Cloud. Batch computing is a common means for developers, scientists, and engineers to access large amounts of compute resources. AWS Batch utilizes the advantages of this computing workload to remove the undifferentiated heavy lifting of configuring and managing required infrastructure, while also adopting a familiar batch computing software approach. Given these advantages, AWS Batch can help you to efficiently provision resources in response to jobs submitted, thus effectively helping to eliminate capacity constraints, reduce compute costs, and deliver your results more quickly.</p> <p>As a fully managed service, AWS Batch can run batch computing workloads of any scale. AWS Batch automatically provisions compute resources and optimizes workload distribution based on the quantity and scale of your specific workloads. With AWS Batch, there's no need to install or manage batch computing software. This means that you can focus your time and energy on analyzing results and solving your specific problems. </p>

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
  * jobId **required** `string`: The AWS Batch job ID of the job to cancel.
  * reason **required** `string`: A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.

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
  * tags `object`: <p>The tags that you apply to the compute environment to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General Reference</i>.</p> <p>These tags can be updated or removed using the <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/batch/latest/APIReference/API_UntagResource.html">UntagResource</a> API operations. These tags don't propagate to the underlying compute resources.</p>
  * computeEnvironmentName **required** `string`: The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
  * computeResources `object`: An object representing an AWS Batch compute resource.
    * tags
    * allocationStrategy
    * bidPercentage
    * desiredvCpus
    * ec2Configuration
      * items [Ec2Configuration](#ec2configuration)
    * ec2KeyPair
    * imageId
    * instanceRole
    * instanceTypes
      * items [String](#string)
    * launchTemplate
      * launchTemplateId
      * launchTemplateName
      * version
    * maxvCpus
    * minvCpus
    * placementGroup
    * securityGroupIds
      * items [String](#string)
    * spotIamFleetRole
    * subnets
      * items [String](#string)
    * type
  * serviceRole **required** `string`: <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN doesn't use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
  * state `string` (values: ENABLED, DISABLED): The state of the compute environment. If the state is <code>ENABLED</code>, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.
  * type **required** `string` (values: MANAGED, UNMANAGED): The type of the compute environment: <code>MANAGED</code> or <code>UNMANAGED</code>. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>AWS Batch User Guide</i>.

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
  * tags `object`: The tags that you apply to the job queue to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General Reference</i>.
  * computeEnvironmentOrder **required** `array`: The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment should run a specific job. Compute environments must be in the <code>VALID</code> state before you can associate them with a job queue. You can associate up to three compute environments with a job queue. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.
    * items [ComputeEnvironmentOrder](#computeenvironmentorder)
  * jobQueueName **required** `string`: The name of the job queue.
  * priority **required** `integer`: The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order. For example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.
  * state `string` (values: ENABLED, DISABLED): The state of the job queue. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs can't be added to the queue, but jobs already in the queue can finish.

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
  * computeEnvironment **required** `string`: The name or Amazon Resource Name (ARN) of the compute environment to delete.

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
  * jobQueue **required** `string`: The short name or full Amazon Resource Name (ARN) of the queue to delete.

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
  * jobDefinition **required** `string`: The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.

#### Output
* output [DeregisterJobDefinitionResponse](#deregisterjobdefinitionresponse)

### DescribeComputeEnvironments



```js
amazonaws_batch.DescribeComputeEnvironments({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * computeEnvironments `array`: A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries.
    * items [String](#string)
  * maxResults `integer`: The maximum number of cluster results returned by <code>DescribeComputeEnvironments</code> in paginated output. When this parameter is used, <code>DescribeComputeEnvironments</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeComputeEnvironments</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeComputeEnvironments</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
  * nextToken `string`: <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeComputeEnvironments</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>

#### Output
* output [DescribeComputeEnvironmentsResponse](#describecomputeenvironmentsresponse)

### DescribeJobDefinitions



```js
amazonaws_batch.DescribeJobDefinitions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * jobDefinitionName `string`: The name of the job definition to describe.
  * jobDefinitions `array`: A list of up to 100 job definition names or full Amazon Resource Name (ARN) entries.
    * items [String](#string)
  * maxResults `integer`: The maximum number of results returned by <code>DescribeJobDefinitions</code> in paginated output. When this parameter is used, <code>DescribeJobDefinitions</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobDefinitions</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobDefinitions</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
  * nextToken `string`: <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobDefinitions</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
  * status `string`: The status used to filter job definitions.

#### Output
* output [DescribeJobDefinitionsResponse](#describejobdefinitionsresponse)

### DescribeJobQueues



```js
amazonaws_batch.DescribeJobQueues({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * jobQueues `array`: A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.
    * items [String](#string)
  * maxResults `integer`: The maximum number of results returned by <code>DescribeJobQueues</code> in paginated output. When this parameter is used, <code>DescribeJobQueues</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>DescribeJobQueues</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>DescribeJobQueues</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
  * nextToken `string`: <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeJobQueues</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>

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
  * jobs **required** `array`: A list of up to 100 job IDs.
    * items [String](#string)

#### Output
* output [DescribeJobsResponse](#describejobsresponse)

### ListJobs



```js
amazonaws_batch.ListJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * arrayJobId `string`: The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.
  * jobQueue `string`: The name or full Amazon Resource Name (ARN) of the job queue used to list jobs.
  * jobStatus `string` (values: SUBMITTED, PENDING, RUNNABLE, STARTING, RUNNING, SUCCEEDED, FAILED): The job status used to filter jobs in the specified queue. If you don't specify a status, only <code>RUNNING</code> jobs are returned.
  * maxResults `integer`: The maximum number of results returned by <code>ListJobs</code> in paginated output. When this parameter is used, <code>ListJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter isn't used, then <code>ListJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable.
  * multiNodeJobId `string`: The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.
  * nextToken `string`: <p>The <code>nextToken</code> value returned from a previous paginated <code>ListJobs</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. This value is <code>null</code> when there are no more results to return.</p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>

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
  * parameters `object`: Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.
  * tags `object`: The tags that you apply to the job definition to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/using-tags.html">Tagging AWS Resources</a> in <i>AWS Batch User Guide</i>.
  * containerProperties `object`: Container properties are used in job definitions to describe the container that is launched as part of a job.
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * executionRoleArn
    * fargatePlatformConfiguration
      * platformVersion
    * image
    * instanceType
    * jobRoleArn
    * linuxParameters
      * devices
        * items [Device](#device)
      * initProcessEnabled
      * maxSwap
      * sharedMemorySize
      * swappiness
      * tmpfs
        * items [Tmpfs](#tmpfs)
    * logConfiguration
      * logDriver **required**
      * options
      * secretOptions
        * items [Secret](#secret)
    * memory
    * mountPoints
      * items [MountPoint](#mountpoint)
    * networkConfiguration
      * assignPublicIp
    * privileged
    * readonlyRootFilesystem
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * secrets
      * items [Secret](#secret)
    * ulimits
      * items [Ulimit](#ulimit)
    * user
    * vcpus
    * volumes
      * items [Volume](#volume)
  * jobDefinitionName **required** `string`: The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
  * nodeProperties `object`: An object representing the node properties of a multi-node parallel job.
    * mainNode
    * nodeRangeProperties
      * items [NodeRangeProperty](#noderangeproperty)
    * numNodes
  * platformCapabilities `array`: The platform capabilities required by the job definition. If no value is specified, it defaults to <code>EC2</code>. To run the job on Fargate resources, specify <code>FARGATE</code>.
    * items [PlatformCapability](#platformcapability)
  * propagateTags `boolean`: Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags are not propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state.
  * retryStrategy `object`: The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>AWS Batch User Guide</i>.
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * timeout `object`: An object representing a job timeout configuration.
    * attemptDurationSeconds
  * type **required** `string` (values: container, multinode): <p>The type of job definition. For more information about multi-node parallel jobs, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html">Creating a multi-node parallel job definition</a> in the <i>AWS Batch User Guide</i>.</p> <note> <p>If the job is run on Fargate resources, then <code>multinode</code> isn't supported.</p> </note>

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
  * parameters `object`: Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a <code>SubmitJob</code> request override any corresponding parameter defaults from the job definition.
  * tags `object`: The tags that you apply to the job request to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General Reference</i>.
  * arrayProperties `object`: An object representing an AWS Batch array job.
    * size
  * containerOverrides `object`: The overrides that should be sent to a container.
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * instanceType
    * memory
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * vcpus
  * dependsOn `array`: A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
    * items [JobDependency](#jobdependency)
  * jobDefinition **required** `string`: The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition. If <code>name</code> is specified without a revision then the latest active revision is used.
  * jobName **required** `string`: The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
  * jobQueue **required** `string`: The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue.
  * nodeOverrides `object`: <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
    * nodePropertyOverrides
      * items [NodePropertyOverride](#nodepropertyoverride)
    * numNodes
  * propagateTags `boolean`: Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the tasks during task creation. For tags with the same name, job tags are given priority over job definitions tags. If the total number of combined tags from the job and job definition is over 50, the job is moved to the <code>FAILED</code> state. When specified, this overrides the tag propagation setting in the job definition.
  * retryStrategy `object`: The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>AWS Batch User Guide</i>.
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * timeout `object`: An object representing a job timeout configuration.
    * attemptDurationSeconds

#### Output
* output [SubmitJobResponse](#submitjobresponse)

### ListTagsForResource



```js
amazonaws_batch.ListTagsForResource({
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
amazonaws_batch.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags that you apply to the resource to help you categorize and organize your resources. Each tag consists of a key and an optional value. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in <i>AWS General Reference</i>.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_batch.UntagResource({
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

### TerminateJob



```js
amazonaws_batch.TerminateJob({
  "jobId": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`: The AWS Batch job ID of the job to terminate.
  * reason **required** `string`: A message to attach to the job that explains the reason for canceling it. This message is returned by future <a>DescribeJobs</a> operations on the job. This message is also recorded in the AWS Batch activity logs.

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
  * computeEnvironment **required** `string`: The name or full Amazon Resource Name (ARN) of the compute environment to update.
  * computeResources `object`: An object representing the attributes of a compute environment that can be updated.
    * desiredvCpus
    * maxvCpus
    * minvCpus
    * securityGroupIds
      * items [String](#string)
    * subnets
      * items [String](#string)
  * serviceRole `string`: <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN might contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
  * state `string` (values: ENABLED, DISABLED): The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.

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
  * computeEnvironmentOrder `array`: Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment should run a given job. All of the compute environments must be either EC2 (<code>EC2</code> or <code>SPOT</code>) or Fargate (<code>FARGATE</code> or <code>FARGATE_SPOT</code>); EC2 and Fargate compute environments can't be mixed.
    * items [ComputeEnvironmentOrder](#computeenvironmentorder)
  * jobQueue **required** `string`: The name or the Amazon Resource Name (ARN) of the job queue.
  * priority `integer`: The priority of the job queue. Job queues with a higher priority (or a higher integer value for the <code>priority</code> parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of <code>10</code> is given scheduling preference over a job queue with a priority value of <code>1</code>.
  * state `string` (values: ENABLED, DISABLED): Describes the queue's ability to accept new jobs. If the job queue state is <code>ENABLED</code>, it is able to accept jobs. If the job queue state is <code>DISABLED</code>, new jobs cannot be added to the queue, but jobs already in the queue can finish.

#### Output
* output [UpdateJobQueueResponse](#updatejobqueueresponse)



## Definitions

### ArrayJobDependency
* ArrayJobDependency `string` (values: N_TO_N, SEQUENTIAL)

### ArrayJobStatusSummary
* ArrayJobStatusSummary `object`

### ArrayProperties
* ArrayProperties `object`: An object representing an AWS Batch array job.
  * size

### ArrayPropertiesDetail
* ArrayPropertiesDetail `object`: An object representing the array properties of a job.
  * index
  * size
  * statusSummary

### ArrayPropertiesSummary
* ArrayPropertiesSummary `object`: An object representing the array properties of a job.
  * index
  * size

### AssignPublicIp
* AssignPublicIp `string` (values: ENABLED, DISABLED)

### AttemptContainerDetail
* AttemptContainerDetail `object`: An object representing the details of a container that is part of a job attempt.
  * containerInstanceArn
  * exitCode
  * logStreamName
  * networkInterfaces
    * items [NetworkInterface](#networkinterface)
  * reason
  * taskArn

### AttemptDetail
* AttemptDetail `object`: An object representing a job attempt.
  * container
    * containerInstanceArn
    * exitCode
    * logStreamName
    * networkInterfaces
      * items [NetworkInterface](#networkinterface)
    * reason
    * taskArn
  * startedAt
  * statusReason
  * stoppedAt

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

### CRAllocationStrategy
* CRAllocationStrategy `string` (values: BEST_FIT, BEST_FIT_PROGRESSIVE, SPOT_CAPACITY_OPTIMIZED)

### CRType
* CRType `string` (values: EC2, SPOT, FARGATE, FARGATE_SPOT)

### CancelJobRequest
* CancelJobRequest `object`
  * jobId **required**
  * reason **required**

### CancelJobResponse
* CancelJobResponse `object`

### ClientException


### ComputeEnvironmentDetail
* ComputeEnvironmentDetail `object`: An object representing an AWS Batch compute environment.
  * tags
  * computeEnvironmentArn **required**
  * computeEnvironmentName **required**
  * computeResources
    * tags
    * allocationStrategy
    * bidPercentage
    * desiredvCpus
    * ec2Configuration
      * items [Ec2Configuration](#ec2configuration)
    * ec2KeyPair
    * imageId
    * instanceRole
    * instanceTypes
      * items [String](#string)
    * launchTemplate
      * launchTemplateId
      * launchTemplateName
      * version
    * maxvCpus **required**
    * minvCpus
    * placementGroup
    * securityGroupIds
      * items [String](#string)
    * spotIamFleetRole
    * subnets **required**
      * items [String](#string)
    * type **required**
  * ecsClusterArn **required**
  * serviceRole
  * state
  * status
  * statusReason
  * type

### ComputeEnvironmentDetailList
* ComputeEnvironmentDetailList `array`
  * items [ComputeEnvironmentDetail](#computeenvironmentdetail)

### ComputeEnvironmentOrder
* ComputeEnvironmentOrder `object`: The order in which compute environments are tried for job placement within a queue. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.
  * computeEnvironment **required**
  * order **required**

### ComputeEnvironmentOrders
* ComputeEnvironmentOrders `array`
  * items [ComputeEnvironmentOrder](#computeenvironmentorder)

### ComputeResource
* ComputeResource `object`: An object representing an AWS Batch compute resource.
  * tags
  * allocationStrategy
  * bidPercentage
  * desiredvCpus
  * ec2Configuration
    * items [Ec2Configuration](#ec2configuration)
  * ec2KeyPair
  * imageId
  * instanceRole
  * instanceTypes
    * items [String](#string)
  * launchTemplate
    * launchTemplateId
    * launchTemplateName
    * version
  * maxvCpus **required**
  * minvCpus
  * placementGroup
  * securityGroupIds
    * items [String](#string)
  * spotIamFleetRole
  * subnets **required**
    * items [String](#string)
  * type **required**

### ComputeResourceUpdate
* ComputeResourceUpdate `object`: An object representing the attributes of a compute environment that can be updated.
  * desiredvCpus
  * maxvCpus
  * minvCpus
  * securityGroupIds
    * items [String](#string)
  * subnets
    * items [String](#string)

### ContainerDetail
* ContainerDetail `object`: An object representing the details of a container that is part of a job.
  * command
    * items [String](#string)
  * containerInstanceArn
  * environment
    * items [KeyValuePair](#keyvaluepair)
  * executionRoleArn
  * exitCode
  * fargatePlatformConfiguration
    * platformVersion
  * image
  * instanceType
  * jobRoleArn
  * linuxParameters
    * devices
      * items [Device](#device)
    * initProcessEnabled
    * maxSwap
    * sharedMemorySize
    * swappiness
    * tmpfs
      * items [Tmpfs](#tmpfs)
  * logConfiguration
    * logDriver **required**
    * options
    * secretOptions
      * items [Secret](#secret)
  * logStreamName
  * memory
  * mountPoints
    * items [MountPoint](#mountpoint)
  * networkConfiguration
    * assignPublicIp
  * networkInterfaces
    * items [NetworkInterface](#networkinterface)
  * privileged
  * readonlyRootFilesystem
  * reason
  * resourceRequirements
    * items [ResourceRequirement](#resourcerequirement)
  * secrets
    * items [Secret](#secret)
  * taskArn
  * ulimits
    * items [Ulimit](#ulimit)
  * user
  * vcpus
  * volumes
    * items [Volume](#volume)

### ContainerOverrides
* ContainerOverrides `object`: The overrides that should be sent to a container.
  * command
    * items [String](#string)
  * environment
    * items [KeyValuePair](#keyvaluepair)
  * instanceType
  * memory
  * resourceRequirements
    * items [ResourceRequirement](#resourcerequirement)
  * vcpus

### ContainerProperties
* ContainerProperties `object`: Container properties are used in job definitions to describe the container that is launched as part of a job.
  * command
    * items [String](#string)
  * environment
    * items [KeyValuePair](#keyvaluepair)
  * executionRoleArn
  * fargatePlatformConfiguration
    * platformVersion
  * image
  * instanceType
  * jobRoleArn
  * linuxParameters
    * devices
      * items [Device](#device)
    * initProcessEnabled
    * maxSwap
    * sharedMemorySize
    * swappiness
    * tmpfs
      * items [Tmpfs](#tmpfs)
  * logConfiguration
    * logDriver **required**
    * options
    * secretOptions
      * items [Secret](#secret)
  * memory
  * mountPoints
    * items [MountPoint](#mountpoint)
  * networkConfiguration
    * assignPublicIp
  * privileged
  * readonlyRootFilesystem
  * resourceRequirements
    * items [ResourceRequirement](#resourcerequirement)
  * secrets
    * items [Secret](#secret)
  * ulimits
    * items [Ulimit](#ulimit)
  * user
  * vcpus
  * volumes
    * items [Volume](#volume)

### ContainerSummary
* ContainerSummary `object`: An object representing summary details of a container within a job.
  * exitCode
  * reason

### CreateComputeEnvironmentRequest
* CreateComputeEnvironmentRequest `object`
  * tags
  * computeEnvironmentName **required**
  * computeResources
    * tags
    * allocationStrategy
    * bidPercentage
    * desiredvCpus
    * ec2Configuration
      * items [Ec2Configuration](#ec2configuration)
    * ec2KeyPair
    * imageId
    * instanceRole
    * instanceTypes
      * items [String](#string)
    * launchTemplate
      * launchTemplateId
      * launchTemplateName
      * version
    * maxvCpus **required**
    * minvCpus
    * placementGroup
    * securityGroupIds
      * items [String](#string)
    * spotIamFleetRole
    * subnets **required**
      * items [String](#string)
    * type **required**
  * serviceRole **required**
  * state
  * type **required**

### CreateComputeEnvironmentResponse
* CreateComputeEnvironmentResponse `object`
  * computeEnvironmentArn
  * computeEnvironmentName

### CreateJobQueueRequest
* CreateJobQueueRequest `object`
  * tags
  * computeEnvironmentOrder **required**
    * items [ComputeEnvironmentOrder](#computeenvironmentorder)
  * jobQueueName **required**
  * priority **required**
  * state

### CreateJobQueueResponse
* CreateJobQueueResponse `object`
  * jobQueueArn **required**
  * jobQueueName **required**

### DeleteComputeEnvironmentRequest
* DeleteComputeEnvironmentRequest `object`
  * computeEnvironment **required**

### DeleteComputeEnvironmentResponse
* DeleteComputeEnvironmentResponse `object`

### DeleteJobQueueRequest
* DeleteJobQueueRequest `object`
  * jobQueue **required**

### DeleteJobQueueResponse
* DeleteJobQueueResponse `object`

### DeregisterJobDefinitionRequest
* DeregisterJobDefinitionRequest `object`
  * jobDefinition **required**

### DeregisterJobDefinitionResponse
* DeregisterJobDefinitionResponse `object`

### DescribeComputeEnvironmentsRequest
* DescribeComputeEnvironmentsRequest `object`
  * computeEnvironments
    * items [String](#string)
  * maxResults
  * nextToken

### DescribeComputeEnvironmentsResponse
* DescribeComputeEnvironmentsResponse `object`
  * computeEnvironments
    * items [ComputeEnvironmentDetail](#computeenvironmentdetail)
  * nextToken

### DescribeJobDefinitionsRequest
* DescribeJobDefinitionsRequest `object`
  * jobDefinitionName
  * jobDefinitions
    * items [String](#string)
  * maxResults
  * nextToken
  * status

### DescribeJobDefinitionsResponse
* DescribeJobDefinitionsResponse `object`
  * jobDefinitions
    * items [JobDefinition](#jobdefinition)
  * nextToken

### DescribeJobQueuesRequest
* DescribeJobQueuesRequest `object`
  * jobQueues
    * items [String](#string)
  * maxResults
  * nextToken

### DescribeJobQueuesResponse
* DescribeJobQueuesResponse `object`
  * jobQueues
    * items [JobQueueDetail](#jobqueuedetail)
  * nextToken

### DescribeJobsRequest
* DescribeJobsRequest `object`
  * jobs **required**
    * items [String](#string)

### DescribeJobsResponse
* DescribeJobsResponse `object`
  * jobs
    * items [JobDetail](#jobdetail)

### Device
* Device `object`: <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs running on Fargate resources and shouldn't be provided.</p> </note>
  * containerPath
  * hostPath **required**
  * permissions
    * items [DeviceCgroupPermission](#devicecgrouppermission)

### DeviceCgroupPermission
* DeviceCgroupPermission `string` (values: READ, WRITE, MKNOD)

### DeviceCgroupPermissions
* DeviceCgroupPermissions `array`
  * items [DeviceCgroupPermission](#devicecgrouppermission)

### DevicesList
* DevicesList `array`
  * items [Device](#device)

### Ec2Configuration
* Ec2Configuration `object`: <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If the <code>Ec2Configuration</code> isn't specified, the default is <code>ECS_AL1</code>.</p> <note> <p>This object isn't applicable to jobs running on Fargate resources.</p> </note>
  * imageIdOverride
  * imageType **required**

### Ec2ConfigurationList
* Ec2ConfigurationList `array`
  * items [Ec2Configuration](#ec2configuration)

### EnvironmentVariables
* EnvironmentVariables `array`
  * items [KeyValuePair](#keyvaluepair)

### EvaluateOnExit
* EvaluateOnExit `object`: Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
  * action **required**
  * onExitCode
  * onReason
  * onStatusReason

### EvaluateOnExitList
* EvaluateOnExitList `array`
  * items [EvaluateOnExit](#evaluateonexit)

### FargatePlatformConfiguration
* FargatePlatformConfiguration `object`: The platform configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not specify this parameter.
  * platformVersion

### Host
* Host `object`: Determine whether your data volume persists on the host container instance and where it is stored. If this parameter is empty, then the Docker daemon assigns a host path for your data volume, but the data isn't guaranteed to persist after the containers associated with it stop running.
  * sourcePath

### ImageIdOverride
* ImageIdOverride `string`

### ImageType
* ImageType `string`

### Integer
* Integer `integer`

### JQState
* JQState `string` (values: ENABLED, DISABLED)

### JQStatus
* JQStatus `string` (values: CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)

### JobDefinition
* JobDefinition `object`: An object representing an AWS Batch job definition.
  * parameters
  * tags
  * containerProperties
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * executionRoleArn
    * fargatePlatformConfiguration
      * platformVersion
    * image
    * instanceType
    * jobRoleArn
    * linuxParameters
      * devices
        * items [Device](#device)
      * initProcessEnabled
      * maxSwap
      * sharedMemorySize
      * swappiness
      * tmpfs
        * items [Tmpfs](#tmpfs)
    * logConfiguration
      * logDriver **required**
      * options
      * secretOptions
        * items [Secret](#secret)
    * memory
    * mountPoints
      * items [MountPoint](#mountpoint)
    * networkConfiguration
      * assignPublicIp
    * privileged
    * readonlyRootFilesystem
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * secrets
      * items [Secret](#secret)
    * ulimits
      * items [Ulimit](#ulimit)
    * user
    * vcpus
    * volumes
      * items [Volume](#volume)
  * jobDefinitionArn **required**
  * jobDefinitionName **required**
  * nodeProperties
    * mainNode **required**
    * nodeRangeProperties **required**
      * items [NodeRangeProperty](#noderangeproperty)
    * numNodes **required**
  * platformCapabilities
    * items [PlatformCapability](#platformcapability)
  * propagateTags
  * retryStrategy
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * revision **required**
  * status
  * timeout
    * attemptDurationSeconds
  * type **required**

### JobDefinitionList
* JobDefinitionList `array`
  * items [JobDefinition](#jobdefinition)

### JobDefinitionType
* JobDefinitionType `string` (values: container, multinode)

### JobDependency
* JobDependency `object`: An object representing an AWS Batch job dependency.
  * jobId
  * type

### JobDependencyList
* JobDependencyList `array`
  * items [JobDependency](#jobdependency)

### JobDetail
* JobDetail `object`: An object representing an AWS Batch job.
  * parameters
  * tags
  * arrayProperties
    * index
    * size
    * statusSummary
  * attempts
    * items [AttemptDetail](#attemptdetail)
  * container
    * command
      * items [String](#string)
    * containerInstanceArn
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * executionRoleArn
    * exitCode
    * fargatePlatformConfiguration
      * platformVersion
    * image
    * instanceType
    * jobRoleArn
    * linuxParameters
      * devices
        * items [Device](#device)
      * initProcessEnabled
      * maxSwap
      * sharedMemorySize
      * swappiness
      * tmpfs
        * items [Tmpfs](#tmpfs)
    * logConfiguration
      * logDriver **required**
      * options
      * secretOptions
        * items [Secret](#secret)
    * logStreamName
    * memory
    * mountPoints
      * items [MountPoint](#mountpoint)
    * networkConfiguration
      * assignPublicIp
    * networkInterfaces
      * items [NetworkInterface](#networkinterface)
    * privileged
    * readonlyRootFilesystem
    * reason
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * secrets
      * items [Secret](#secret)
    * taskArn
    * ulimits
      * items [Ulimit](#ulimit)
    * user
    * vcpus
    * volumes
      * items [Volume](#volume)
  * createdAt
  * dependsOn
    * items [JobDependency](#jobdependency)
  * jobArn
  * jobDefinition **required**
  * jobId **required**
  * jobName **required**
  * jobQueue **required**
  * nodeDetails
    * isMainNode
    * nodeIndex
  * nodeProperties
    * mainNode **required**
    * nodeRangeProperties **required**
      * items [NodeRangeProperty](#noderangeproperty)
    * numNodes **required**
  * platformCapabilities
    * items [PlatformCapability](#platformcapability)
  * propagateTags
  * retryStrategy
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * startedAt **required**
  * status **required**
  * statusReason
  * stoppedAt
  * timeout
    * attemptDurationSeconds

### JobDetailList
* JobDetailList `array`
  * items [JobDetail](#jobdetail)

### JobQueueDetail
* JobQueueDetail `object`: An object representing the details of an AWS Batch job queue.
  * tags
  * computeEnvironmentOrder **required**
    * items [ComputeEnvironmentOrder](#computeenvironmentorder)
  * jobQueueArn **required**
  * jobQueueName **required**
  * priority **required**
  * state **required**
  * status
  * statusReason

### JobQueueDetailList
* JobQueueDetailList `array`
  * items [JobQueueDetail](#jobqueuedetail)

### JobStatus
* JobStatus `string` (values: SUBMITTED, PENDING, RUNNABLE, STARTING, RUNNING, SUCCEEDED, FAILED)

### JobSummary
* JobSummary `object`: An object representing summary details of a job.
  * arrayProperties
    * index
    * size
  * container
    * exitCode
    * reason
  * createdAt
  * jobArn
  * jobId **required**
  * jobName **required**
  * nodeProperties
    * isMainNode
    * nodeIndex
    * numNodes
  * startedAt
  * status
  * statusReason
  * stoppedAt

### JobSummaryList
* JobSummaryList `array`
  * items [JobSummary](#jobsummary)

### JobTimeout
* JobTimeout `object`: An object representing a job timeout configuration.
  * attemptDurationSeconds

### KeyValuePair
* KeyValuePair `object`: A key-value pair object.
  * name
  * value

### LaunchTemplateSpecification
* LaunchTemplateSpecification `object`: <p>An object representing a launch template associated with a compute resource. You must specify either the launch template ID or launch template name in the request, but not both.</p> <p>If security groups are specified using both the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> and the launch template, the values in the <code>securityGroupIds</code> parameter of <code>CreateComputeEnvironment</code> will be used.</p> <note> <p>This object isn't applicable to jobs running on Fargate resources.</p> </note>
  * launchTemplateId
  * launchTemplateName
  * version

### LinuxParameters
* LinuxParameters `object`: Linux-specific modifications that are applied to the container, such as details for device mappings.
  * devices
    * items [Device](#device)
  * initProcessEnabled
  * maxSwap
  * sharedMemorySize
  * swappiness
  * tmpfs
    * items [Tmpfs](#tmpfs)

### ListJobsRequest
* ListJobsRequest `object`
  * arrayJobId
  * jobQueue
  * jobStatus
  * maxResults
  * multiNodeJobId
  * nextToken

### ListJobsResponse
* ListJobsResponse `object`
  * jobSummaryList **required**
    * items [JobSummary](#jobsummary)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### LogConfiguration
* LogConfiguration `object`: Log configuration options to send to a custom log driver for the container.
  * logDriver **required**
  * options
  * secretOptions
    * items [Secret](#secret)

### LogConfigurationOptionsMap
* LogConfigurationOptionsMap `object`

### LogDriver
* LogDriver `string` (values: json-file, syslog, journald, gelf, fluentd, awslogs, splunk)

### Long
* Long `integer`

### MountPoint
* MountPoint `object`: Details on a Docker volume mount point that is used in a job's container properties. This parameter maps to <code>Volumes</code> in the <a href="https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container">Create a container</a> section of the Docker Remote API and the <code>--volume</code> option to docker run.
  * containerPath
  * readOnly
  * sourceVolume

### MountPoints
* MountPoints `array`
  * items [MountPoint](#mountpoint)

### NetworkConfiguration
* NetworkConfiguration `object`: The network configuration for jobs running on Fargate resources. Jobs running on EC2 resources must not specify this parameter.
  * assignPublicIp

### NetworkInterface
* NetworkInterface `object`: An object representing the elastic network interface for a multi-node parallel job node.
  * attachmentId
  * ipv6Address
  * privateIpv4Address

### NetworkInterfaceList
* NetworkInterfaceList `array`
  * items [NetworkInterface](#networkinterface)

### NodeDetails
* NodeDetails `object`: An object representing the details of a multi-node parallel job node.
  * isMainNode
  * nodeIndex

### NodeOverrides
* NodeOverrides `object`: <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation.</p> <note> <p>This isn't applicable to jobs running on Fargate resources and shouldn't be provided; use <code>containerOverrides</code> instead.</p> </note>
  * nodePropertyOverrides
    * items [NodePropertyOverride](#nodepropertyoverride)
  * numNodes

### NodeProperties
* NodeProperties `object`: An object representing the node properties of a multi-node parallel job.
  * mainNode **required**
  * nodeRangeProperties **required**
    * items [NodeRangeProperty](#noderangeproperty)
  * numNodes **required**

### NodePropertiesSummary
* NodePropertiesSummary `object`: An object representing the properties of a node that is associated with a multi-node parallel job.
  * isMainNode
  * nodeIndex
  * numNodes

### NodePropertyOverride
* NodePropertyOverride `object`: Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation.
  * containerOverrides
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * instanceType
    * memory
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * vcpus
  * targetNodes **required**

### NodePropertyOverrides
* NodePropertyOverrides `array`
  * items [NodePropertyOverride](#nodepropertyoverride)

### NodeRangeProperties
* NodeRangeProperties `array`
  * items [NodeRangeProperty](#noderangeproperty)

### NodeRangeProperty
* NodeRangeProperty `object`: An object representing the properties of the node range for a multi-node parallel job.
  * container
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * executionRoleArn
    * fargatePlatformConfiguration
      * platformVersion
    * image
    * instanceType
    * jobRoleArn
    * linuxParameters
      * devices
        * items [Device](#device)
      * initProcessEnabled
      * maxSwap
      * sharedMemorySize
      * swappiness
      * tmpfs
        * items [Tmpfs](#tmpfs)
    * logConfiguration
      * logDriver **required**
      * options
      * secretOptions
        * items [Secret](#secret)
    * memory
    * mountPoints
      * items [MountPoint](#mountpoint)
    * networkConfiguration
      * assignPublicIp
    * privileged
    * readonlyRootFilesystem
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * secrets
      * items [Secret](#secret)
    * ulimits
      * items [Ulimit](#ulimit)
    * user
    * vcpus
    * volumes
      * items [Volume](#volume)
  * targetNodes **required**

### ParametersMap
* ParametersMap `object`

### PlatformCapability
* PlatformCapability `string` (values: EC2, FARGATE)

### PlatformCapabilityList
* PlatformCapabilityList `array`
  * items [PlatformCapability](#platformcapability)

### RegisterJobDefinitionRequest
* RegisterJobDefinitionRequest `object`
  * parameters
  * tags
  * containerProperties
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * executionRoleArn
    * fargatePlatformConfiguration
      * platformVersion
    * image
    * instanceType
    * jobRoleArn
    * linuxParameters
      * devices
        * items [Device](#device)
      * initProcessEnabled
      * maxSwap
      * sharedMemorySize
      * swappiness
      * tmpfs
        * items [Tmpfs](#tmpfs)
    * logConfiguration
      * logDriver **required**
      * options
      * secretOptions
        * items [Secret](#secret)
    * memory
    * mountPoints
      * items [MountPoint](#mountpoint)
    * networkConfiguration
      * assignPublicIp
    * privileged
    * readonlyRootFilesystem
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * secrets
      * items [Secret](#secret)
    * ulimits
      * items [Ulimit](#ulimit)
    * user
    * vcpus
    * volumes
      * items [Volume](#volume)
  * jobDefinitionName **required**
  * nodeProperties
    * mainNode **required**
    * nodeRangeProperties **required**
      * items [NodeRangeProperty](#noderangeproperty)
    * numNodes **required**
  * platformCapabilities
    * items [PlatformCapability](#platformcapability)
  * propagateTags
  * retryStrategy
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * timeout
    * attemptDurationSeconds
  * type **required**

### RegisterJobDefinitionResponse
* RegisterJobDefinitionResponse `object`
  * jobDefinitionArn **required**
  * jobDefinitionName **required**
  * revision **required**

### ResourceRequirement
* ResourceRequirement `object`: The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
  * type **required**
  * value **required**

### ResourceRequirements
* ResourceRequirements `array`
  * items [ResourceRequirement](#resourcerequirement)

### ResourceType
* ResourceType `string` (values: GPU, VCPU, MEMORY)

### RetryAction
* RetryAction `string` (values: RETRY, EXIT)

### RetryStrategy
* RetryStrategy `object`: The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>AWS Batch User Guide</i>.
  * attempts
  * evaluateOnExit
    * items [EvaluateOnExit](#evaluateonexit)

### Secret
* Secret `object`: <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/specifying-sensitive-data.html">Specifying sensitive data</a> in the <i>AWS Batch User Guide</i>.</p>
  * name **required**
  * valueFrom **required**

### SecretList
* SecretList `array`
  * items [Secret](#secret)

### ServerException


### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubmitJobRequest
* SubmitJobRequest `object`
  * parameters
  * tags
  * arrayProperties
    * size
  * containerOverrides
    * command
      * items [String](#string)
    * environment
      * items [KeyValuePair](#keyvaluepair)
    * instanceType
    * memory
    * resourceRequirements
      * items [ResourceRequirement](#resourcerequirement)
    * vcpus
  * dependsOn
    * items [JobDependency](#jobdependency)
  * jobDefinition **required**
  * jobName **required**
  * jobQueue **required**
  * nodeOverrides
    * nodePropertyOverrides
      * items [NodePropertyOverride](#nodepropertyoverride)
    * numNodes
  * propagateTags
  * retryStrategy
    * attempts
    * evaluateOnExit
      * items [EvaluateOnExit](#evaluateonexit)
  * timeout
    * attemptDurationSeconds

### SubmitJobResponse
* SubmitJobResponse `object`
  * jobArn
  * jobId **required**
  * jobName **required**

### TagKey
* TagKey `string`

### TagKeysList
* TagKeysList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TagrisTagsMap
* TagrisTagsMap `object`

### TagsMap
* TagsMap `object`

### TerminateJobRequest
* TerminateJobRequest `object`
  * jobId **required**
  * reason **required**

### TerminateJobResponse
* TerminateJobResponse `object`

### Tmpfs
* Tmpfs `object`: <p>The container path, mount options, and size of the tmpfs mount.</p> <note> <p>This object isn't applicable to jobs running on Fargate resources.</p> </note>
  * containerPath **required**
  * mountOptions
    * items [String](#string)
  * size **required**

### TmpfsList
* TmpfsList `array`
  * items [Tmpfs](#tmpfs)

### Ulimit
* Ulimit `object`: <p>The <code>ulimit</code> settings to pass to the container.</p> <note> <p>This object isn't applicable to jobs running on Fargate resources.</p> </note>
  * hardLimit **required**
  * name **required**
  * softLimit **required**

### Ulimits
* Ulimits `array`
  * items [Ulimit](#ulimit)

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateComputeEnvironmentRequest
* UpdateComputeEnvironmentRequest `object`
  * computeEnvironment **required**
  * computeResources
    * desiredvCpus
    * maxvCpus
    * minvCpus
    * securityGroupIds
      * items [String](#string)
    * subnets
      * items [String](#string)
  * serviceRole
  * state

### UpdateComputeEnvironmentResponse
* UpdateComputeEnvironmentResponse `object`
  * computeEnvironmentArn
  * computeEnvironmentName

### UpdateJobQueueRequest
* UpdateJobQueueRequest `object`
  * computeEnvironmentOrder
    * items [ComputeEnvironmentOrder](#computeenvironmentorder)
  * jobQueue **required**
  * priority
  * state

### UpdateJobQueueResponse
* UpdateJobQueueResponse `object`
  * jobQueueArn
  * jobQueueName

### Volume
* Volume `object`: A data volume used in a job's container properties.
  * host
    * sourcePath
  * name

### Volumes
* Volumes `array`
  * items [Volume](#volume)


