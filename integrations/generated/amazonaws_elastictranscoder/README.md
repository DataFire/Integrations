# @datafire/amazonaws_elastictranscoder

Client library for Amazon Elastic Transcoder

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elastictranscoder
```

```js
let datafire = require('datafire');
let amazonaws_elastictranscoder = require('@datafire/amazonaws_elastictranscoder').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_elastictranscoder: account,
  }
})


amazonaws_elastictranscoder.CreateJob({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

## Actions
### CreateJob
<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>


```js
amazonaws_elastictranscoder.CreateJob({
  "body": {
    "PipelineId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>CreateJobRequest</code> structure.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ReadJob
The ReadJob operation returns detailed information about a job.


```js
amazonaws_elastictranscoder.ReadJob({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ReadJobRequest</code> structure.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListJobsByPipeline
<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>


```js
amazonaws_elastictranscoder.ListJobsByPipeline({
  "body": {},
  "PipelineId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ListJobsByPipelineRequest</code> structure.
* PageToken (string) - Pagination token
* PipelineId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListJobsByStatus
The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.


```js
amazonaws_elastictranscoder.ListJobsByStatus({
  "body": {},
  "Status": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ListJobsByStatusRequest</code> structure.
* PageToken (string) - Pagination token
* Status (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPipelines
The ListPipelines operation gets a list of the pipelines associated with the current AWS account.


```js
amazonaws_elastictranscoder.ListPipelines({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ListPipelineRequest</code> structure.
* PageToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdatePipeline
<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>


```js
amazonaws_elastictranscoder.UpdatePipeline({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>UpdatePipelineRequest</code> structure.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdatePipelineNotifications
<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>


```js
amazonaws_elastictranscoder.UpdatePipelineNotifications({
  "body": {
    "Notifications": {}
  },
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>UpdatePipelineNotificationsRequest</code> structure.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdatePipelineStatus
<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>


```js
amazonaws_elastictranscoder.UpdatePipelineStatus({
  "body": {
    "Status": ""
  },
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>UpdatePipelineStatusRequest</code> structure.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPresets
The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.


```js
amazonaws_elastictranscoder.ListPresets({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ListPresetsRequest</code> structure.
* PageToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ReadPreset
The ReadPreset operation gets detailed information about a preset.


```js
amazonaws_elastictranscoder.ReadPreset({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The <code>ReadPresetRequest</code> structure.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TestRole
<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>


```js
amazonaws_elastictranscoder.TestRole({
  "body": {
    "Role": "",
    "InputBucket": "",
    "OutputBucket": "",
    "Topics": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  The <code>TestRoleRequest</code> structure. 
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

