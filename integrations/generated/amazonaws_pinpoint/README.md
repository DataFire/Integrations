# @datafire/amazonaws_pinpoint

Client library for Amazon Pinpoint

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_pinpoint
```

```js
let datafire = require('datafire');
let amazonaws_pinpoint = require('@datafire/amazonaws_pinpoint').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_pinpoint.GetApps({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### GetApps



```js
amazonaws_pinpoint.GetApps({}, context)
```

#### Parameters
*This action has no parameters*

### GetApp



```js
amazonaws_pinpoint.GetApp({
  "application-id": ""
}, context)
```

#### Parameters
* application-id (string) **required**

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
  "campaign-id": "",
  "WriteCampaignRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* campaign-id (string) **required**
* WriteCampaignRequest (object) **required** - Used to create a campaign.

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

### UpdateAdmChannel



```js
amazonaws_pinpoint.UpdateAdmChannel({
  "application-id": "",
  "ADMChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* ADMChannelRequest (object) **required** - Amazon Device Messaging channel definition.

### UpdateApnsChannel



```js
amazonaws_pinpoint.UpdateApnsChannel({
  "application-id": "",
  "APNSChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* APNSChannelRequest (object) **required** - Apple Push Notification Service channel definition.

### UpdateApnsSandboxChannel



```js
amazonaws_pinpoint.UpdateApnsSandboxChannel({
  "application-id": "",
  "APNSSandboxChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* APNSSandboxChannelRequest (object) **required** - Apple Development Push Notification Service channel definition.

### UpdateApnsVoipChannel



```js
amazonaws_pinpoint.UpdateApnsVoipChannel({
  "application-id": "",
  "APNSVoipChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* APNSVoipChannelRequest (object) **required** - Apple VoIP Push Notification Service channel definition.

### UpdateApnsVoipSandboxChannel



```js
amazonaws_pinpoint.UpdateApnsVoipSandboxChannel({
  "application-id": "",
  "APNSVoipSandboxChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* APNSVoipSandboxChannelRequest (object) **required** - Apple VoIP Developer Push Notification Service channel definition.

### UpdateBaiduChannel



```js
amazonaws_pinpoint.UpdateBaiduChannel({
  "application-id": "",
  "BaiduChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* BaiduChannelRequest (object) **required** - Baidu Cloud Push credentials

### UpdateEmailChannel



```js
amazonaws_pinpoint.UpdateEmailChannel({
  "application-id": "",
  "EmailChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* EmailChannelRequest (object) **required** - Email Channel Request

### UpdateGcmChannel



```js
amazonaws_pinpoint.UpdateGcmChannel({
  "application-id": "",
  "GCMChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* GCMChannelRequest (object) **required** - Google Cloud Messaging credentials

### UpdateSmsChannel



```js
amazonaws_pinpoint.UpdateSmsChannel({
  "application-id": "",
  "SMSChannelRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* SMSChannelRequest (object) **required** - SMS Channel Request

### UpdateEndpointsBatch



```js
amazonaws_pinpoint.UpdateEndpointsBatch({
  "application-id": "",
  "EndpointBatchRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* EndpointBatchRequest (object) **required** - Endpoint batch update request.

### UpdateEndpoint



```js
amazonaws_pinpoint.UpdateEndpoint({
  "application-id": "",
  "endpoint-id": "",
  "EndpointRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* endpoint-id (string) **required**
* EndpointRequest (object) **required** - Endpoint update request

### PutEventStream



```js
amazonaws_pinpoint.PutEventStream({
  "application-id": "",
  "WriteEventStream": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* WriteEventStream (object) **required** - Request to save an EventStream.

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

### SendMessages



```js
amazonaws_pinpoint.SendMessages({
  "application-id": "",
  "MessageRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* MessageRequest (object) **required** - Send message request.

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
  "segment-id": "",
  "WriteSegmentRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* segment-id (string) **required**
* WriteSegmentRequest (object) **required** - Segment definition.

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
  "application-id": "",
  "WriteApplicationSettingsRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* WriteApplicationSettingsRequest (object) **required** - Creating application setting request

### SendUsersMessages



```js
amazonaws_pinpoint.SendUsersMessages({
  "application-id": "",
  "SendUsersMessageRequest": {}
}, context)
```

#### Parameters
* application-id (string) **required**
* SendUsersMessageRequest (object) **required** - Send message request.

