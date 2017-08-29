# @datafire/amazonaws_pinpoint

Client library for Amazon Pinpoint

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_pinpoint
```

```js
let datafire = require('datafire');
let amazonaws_pinpoint = require('@datafire/amazonaws_pinpoint').create();

amazonaws_pinpoint.GetCampaigns({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### GetCampaigns



```js
amazonaws_pinpoint.GetCampaigns({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### UpdateCampaign



```js
amazonaws_pinpoint.UpdateCampaign({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* campaign-id (string) **required**

### GetCampaignActivities



```js
amazonaws_pinpoint.GetCampaignActivities({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* campaign-id (string) **required**

### GetCampaignVersions



```js
amazonaws_pinpoint.GetCampaignVersions({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* campaign-id (string) **required**

### GetCampaignVersion



```js
amazonaws_pinpoint.GetCampaignVersion({
  "application-id": "",
  "campaign-id": "",
  "version": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* campaign-id (string) **required**
* version (string) **required**

### UpdateApnsChannel



```js
amazonaws_pinpoint.UpdateApnsChannel({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### UpdateGcmChannel



```js
amazonaws_pinpoint.UpdateGcmChannel({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### UpdateEndpointsBatch



```js
amazonaws_pinpoint.UpdateEndpointsBatch({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### UpdateEndpoint



```js
amazonaws_pinpoint.UpdateEndpoint({
  "application-id": "",
  "endpoint-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* endpoint-id (string) **required**

### PutEventStream



```js
amazonaws_pinpoint.PutEventStream({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### GetImportJobs



```js
amazonaws_pinpoint.GetImportJobs({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### GetImportJob



```js
amazonaws_pinpoint.GetImportJob({
  "application-id": "",
  "job-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* job-id (string) **required**

### GetSegments



```js
amazonaws_pinpoint.GetSegments({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

### UpdateSegment



```js
amazonaws_pinpoint.UpdateSegment({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* segment-id (string) **required**

### GetSegmentImportJobs



```js
amazonaws_pinpoint.GetSegmentImportJobs({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* segment-id (string) **required**

### GetSegmentVersions



```js
amazonaws_pinpoint.GetSegmentVersions({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* segment-id (string) **required**

### GetSegmentVersion



```js
amazonaws_pinpoint.GetSegmentVersion({
  "application-id": "",
  "segment-id": "",
  "version": ""
}, context)
```

#### Parameters
* application-id (string) **required**
* segment-id (string) **required**
* version (string) **required**

### UpdateApplicationSettings



```js
amazonaws_pinpoint.UpdateApplicationSettings({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

