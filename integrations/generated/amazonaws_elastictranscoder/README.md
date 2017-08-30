# @datafire/amazonaws_elastictranscoder

Client library for Amazon Elastic Transcoder

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_elastictranscoder
```

```js
let datafire = require('datafire');
let amazonaws_elastictranscoder = require('@datafire/amazonaws_elastictranscoder').create();

amazonaws_elastictranscoder.CreateJob({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

## Actions
### CreateJob



```js
amazonaws_elastictranscoder.CreateJob({
  "PipelineId": ""
}, context)
```

#### Parameters
* Input (object) - Information about the file that you're transcoding.
* Inputs (array)
* Output (object) - The <code>CreateJobOutput</code> structure.
* OutputKeyPrefix (string)
* Outputs (array)
* PipelineId (string) **required**
* Playlists (array)
* UserMetadata (array)

### ReadJob



```js
amazonaws_elastictranscoder.ReadJob({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### ListJobsByPipeline



```js
amazonaws_elastictranscoder.ListJobsByPipeline({
  "PipelineId": ""
}, context)
```

#### Parameters
* PageToken (string)
* PipelineId (string) **required**

### ListJobsByStatus



```js
amazonaws_elastictranscoder.ListJobsByStatus({
  "Status": ""
}, context)
```

#### Parameters
* PageToken (string)
* Status (string) **required**

### ListPipelines



```js
amazonaws_elastictranscoder.ListPipelines({}, context)
```

#### Parameters
* PageToken (string)

### UpdatePipeline



```js
amazonaws_elastictranscoder.UpdatePipeline({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**
* AwsKmsKeyArn (string)
* ContentConfig (object) - The <code>PipelineOutputConfig</code> structure.
* InputBucket (string)
* Name (string)
* Notifications (object) - <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
* Role (string)
* ThumbnailConfig (object) - The <code>PipelineOutputConfig</code> structure.

### UpdatePipelineNotifications



```js
amazonaws_elastictranscoder.UpdatePipelineNotifications({
  "Id": "",
  "Notifications": {}
}, context)
```

#### Parameters
* Id (string) **required**
* Notifications (object) **required** - <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>

### UpdatePipelineStatus



```js
amazonaws_elastictranscoder.UpdatePipelineStatus({
  "Id": "",
  "Status": ""
}, context)
```

#### Parameters
* Id (string) **required**
* Status (string) **required**

### ListPresets



```js
amazonaws_elastictranscoder.ListPresets({}, context)
```

#### Parameters
* PageToken (string)

### ReadPreset



```js
amazonaws_elastictranscoder.ReadPreset({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### TestRole



```js
amazonaws_elastictranscoder.TestRole({
  "Role": "",
  "InputBucket": "",
  "OutputBucket": "",
  "Topics": []
}, context)
```

#### Parameters
* InputBucket (string) **required**
* OutputBucket (string) **required**
* Role (string) **required**
* Topics (array) **required**

