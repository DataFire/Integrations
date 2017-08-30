# @datafire/amazonaws_batch

Client library for AWS Batch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_batch
```

```js
let datafire = require('datafire');
let amazonaws_batch = require('@datafire/amazonaws_batch').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_batch.CancelJob({}).then(data => {
  console.log(data);
})
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

#### Parameters
* jobId (string) **required**
* reason (string) **required**

### CreateComputeEnvironment



```js
amazonaws_batch.CreateComputeEnvironment({
  "computeEnvironmentName": "",
  "type": "",
  "serviceRole": ""
}, context)
```

#### Parameters
* computeEnvironmentName (string) **required**
* computeResources (object) - An object representing an AWS Batch compute resource.
* serviceRole (string) **required**
* state (string)
* type (string) **required**

### CreateJobQueue



```js
amazonaws_batch.CreateJobQueue({
  "jobQueueName": "",
  "priority": 0,
  "computeEnvironmentOrder": []
}, context)
```

#### Parameters
* computeEnvironmentOrder (array) **required**
* jobQueueName (string) **required**
* priority (integer) **required**
* state (string)

### DeleteComputeEnvironment



```js
amazonaws_batch.DeleteComputeEnvironment({
  "computeEnvironment": ""
}, context)
```

#### Parameters
* computeEnvironment (string) **required**

### DeleteJobQueue



```js
amazonaws_batch.DeleteJobQueue({
  "jobQueue": ""
}, context)
```

#### Parameters
* jobQueue (string) **required**

### DeregisterJobDefinition



```js
amazonaws_batch.DeregisterJobDefinition({
  "jobDefinition": ""
}, context)
```

#### Parameters
* jobDefinition (string) **required**

### DescribeComputeEnvironments



```js
amazonaws_batch.DescribeComputeEnvironments({}, context)
```

#### Parameters
* computeEnvironments (array)
* maxResults (integer)
* nextToken (string)

### DescribeJobDefinitions



```js
amazonaws_batch.DescribeJobDefinitions({}, context)
```

#### Parameters
* jobDefinitionName (string)
* jobDefinitions (array)
* maxResults (integer)
* nextToken (string)
* status (string)

### DescribeJobQueues



```js
amazonaws_batch.DescribeJobQueues({}, context)
```

#### Parameters
* jobQueues (array)
* maxResults (integer)
* nextToken (string)

### DescribeJobs



```js
amazonaws_batch.DescribeJobs({
  "jobs": []
}, context)
```

#### Parameters
* jobs (array) **required**

### ListJobs



```js
amazonaws_batch.ListJobs({
  "jobQueue": ""
}, context)
```

#### Parameters
* jobQueue (string) **required**
* jobStatus (string)
* maxResults (integer)
* nextToken (string)

### RegisterJobDefinition



```js
amazonaws_batch.RegisterJobDefinition({
  "jobDefinitionName": "",
  "type": ""
}, context)
```

#### Parameters
* containerProperties (object) - Container properties are used in job definitions to describe the container that is launched as part of a job.
* jobDefinitionName (string) **required**
* parameters (array)
* retryStrategy (object) - The retry strategy associated with a job.
* type (string) **required**

### SubmitJob



```js
amazonaws_batch.SubmitJob({
  "jobName": "",
  "jobQueue": "",
  "jobDefinition": ""
}, context)
```

#### Parameters
* containerOverrides (object) - The overrides that should be sent to a container.
* dependsOn (array)
* jobDefinition (string) **required**
* jobName (string) **required**
* jobQueue (string) **required**
* parameters (array)
* retryStrategy (object) - The retry strategy associated with a job.

### TerminateJob



```js
amazonaws_batch.TerminateJob({
  "jobId": "",
  "reason": ""
}, context)
```

#### Parameters
* jobId (string) **required**
* reason (string) **required**

### UpdateComputeEnvironment



```js
amazonaws_batch.UpdateComputeEnvironment({
  "computeEnvironment": ""
}, context)
```

#### Parameters
* computeEnvironment (string) **required**
* computeResources (object) - An object representing the attributes of a compute environment that can be updated.
* serviceRole (string)
* state (string)

### UpdateJobQueue



```js
amazonaws_batch.UpdateJobQueue({
  "jobQueue": ""
}, context)
```

#### Parameters
* computeEnvironmentOrder (array)
* jobQueue (string) **required**
* priority (integer)
* state (string)

