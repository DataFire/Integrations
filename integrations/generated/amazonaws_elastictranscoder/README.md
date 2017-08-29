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
amazonaws_elastictranscoder.CreateJob({}, context)
```


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

### UpdatePipelineNotifications



```js
amazonaws_elastictranscoder.UpdatePipelineNotifications({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### UpdatePipelineStatus



```js
amazonaws_elastictranscoder.UpdatePipelineStatus({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

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
amazonaws_elastictranscoder.TestRole({}, context)
```


