# @datafire/amazonaws_batch

Client library for AWS Batch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_batch
```

```js
let datafire = require('datafire');
let amazonaws_batch = require('@datafire/amazonaws_batch').actions;
let context = new datafire.Context();

amazonaws_batch.CancelJob({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>AWS Batch enables you to run batch computing workloads on the AWS Cloud. Batch computing is a common way for developers, scientists, and engineers to access large amounts of compute resources, and AWS Batch removes the undifferentiated heavy lifting of configuring and managing the required infrastructure. AWS Batch will be familiar to users of traditional batch computing software. This service can efficiently provision resources in response to jobs submitted in order to eliminate capacity constraints, reduce compute costs, and deliver results quickly.</p> <p>As a fully managed service, AWS Batch enables developers, scientists, and engineers to run batch computing workloads of any scale. AWS Batch automatically provisions compute resources and optimizes the workload distribution based on the quantity and scale of the workloads. With AWS Batch, there is no need to install or manage batch computing software, which allows you to focus on analyzing results and solving problems. AWS Batch reduces operational complexities, saves time, and reduces costs, which makes it easy for developers, scientists, and engineers to run their batch jobs in the AWS Cloud.</p>

## Actions
### CancelJob



```js
amazonaws_batch.CancelJob({}, context)
```

#### Parameters

### CreateComputeEnvironment



```js
amazonaws_batch.CreateComputeEnvironment({}, context)
```

#### Parameters

### CreateJobQueue



```js
amazonaws_batch.CreateJobQueue({}, context)
```

#### Parameters

### DeleteComputeEnvironment



```js
amazonaws_batch.DeleteComputeEnvironment({}, context)
```

#### Parameters

### DeleteJobQueue



```js
amazonaws_batch.DeleteJobQueue({}, context)
```

#### Parameters

### DeregisterJobDefinition



```js
amazonaws_batch.DeregisterJobDefinition({}, context)
```

#### Parameters

### DescribeComputeEnvironments



```js
amazonaws_batch.DescribeComputeEnvironments({}, context)
```

#### Parameters

### DescribeJobDefinitions



```js
amazonaws_batch.DescribeJobDefinitions({}, context)
```

#### Parameters

### DescribeJobQueues



```js
amazonaws_batch.DescribeJobQueues({}, context)
```

#### Parameters

### DescribeJobs



```js
amazonaws_batch.DescribeJobs({}, context)
```

#### Parameters

### ListJobs



```js
amazonaws_batch.ListJobs({}, context)
```

#### Parameters

### RegisterJobDefinition



```js
amazonaws_batch.RegisterJobDefinition({}, context)
```

#### Parameters

### SubmitJob



```js
amazonaws_batch.SubmitJob({}, context)
```

#### Parameters

### TerminateJob



```js
amazonaws_batch.TerminateJob({}, context)
```

#### Parameters

### UpdateComputeEnvironment



```js
amazonaws_batch.UpdateComputeEnvironment({}, context)
```

#### Parameters

### UpdateJobQueue



```js
amazonaws_batch.UpdateJobQueue({}, context)
```

#### Parameters

