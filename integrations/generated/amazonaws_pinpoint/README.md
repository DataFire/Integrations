# @datafire/amazonaws_pinpoint

Client library for Amazon Pinpoint

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_pinpoint
```

```js
let datafire = require('datafire');
let amazonaws_pinpoint = require('@datafire/amazonaws_pinpoint').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_pinpoint: account,
  }
})

amazonaws_pinpoint.GetCampaigns({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### GetCampaigns
Returns information about your campaigns.


```js
amazonaws_pinpoint.GetCampaigns({
  "body": {},
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateCampaign
Use to update a campaign.


```js
amazonaws_pinpoint.UpdateCampaign({
  "body": {
    "WriteCampaignRequest": {}
  },
  "application-id": "",
  "campaign-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* campaign-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCampaignActivities
Returns information about the activity performed by a campaign.


```js
amazonaws_pinpoint.GetCampaignActivities({
  "body": {},
  "application-id": "",
  "campaign-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* campaign-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCampaignVersions
Returns information about your campaign versions.


```js
amazonaws_pinpoint.GetCampaignVersions({
  "body": {},
  "application-id": "",
  "campaign-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* campaign-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCampaignVersion
Returns information about a specific version of a campaign.


```js
amazonaws_pinpoint.GetCampaignVersion({
  "body": {},
  "application-id": "",
  "campaign-id": "",
  "version": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* campaign-id (string) **required**
* version (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateApnsChannel
Use to update the APNs channel for an app.


```js
amazonaws_pinpoint.UpdateApnsChannel({
  "body": {
    "APNSChannelRequest": {}
  },
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateGcmChannel
Use to update the GCM channel for an app.


```js
amazonaws_pinpoint.UpdateGcmChannel({
  "body": {
    "GCMChannelRequest": {}
  },
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateEndpointsBatch
Use to update a batch of endpoints.


```js
amazonaws_pinpoint.UpdateEndpointsBatch({
  "body": {
    "EndpointBatchRequest": {}
  },
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateEndpoint
Use to update an endpoint.


```js
amazonaws_pinpoint.UpdateEndpoint({
  "body": {
    "EndpointRequest": {}
  },
  "application-id": "",
  "endpoint-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* endpoint-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PutEventStream
Use to create or update the event stream for an app.


```js
amazonaws_pinpoint.PutEventStream({
  "body": {
    "WriteEventStream": {}
  },
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - PutEventStream Request
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetImportJobs
Returns information about your import jobs.


```js
amazonaws_pinpoint.GetImportJobs({
  "body": {},
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetImportJob
Returns information about an import job.


```js
amazonaws_pinpoint.GetImportJob({
  "body": {},
  "application-id": "",
  "job-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* job-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSegments
Used to get information about your segments.


```js
amazonaws_pinpoint.GetSegments({
  "body": {},
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateSegment
Use to update a segment.


```js
amazonaws_pinpoint.UpdateSegment({
  "body": {
    "WriteSegmentRequest": {}
  },
  "application-id": "",
  "segment-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* segment-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSegmentImportJobs
Returns a list of import jobs for a specific segment.


```js
amazonaws_pinpoint.GetSegmentImportJobs({
  "body": {},
  "application-id": "",
  "segment-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* segment-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSegmentVersions
Returns information about your segment versions.


```js
amazonaws_pinpoint.GetSegmentVersions({
  "body": {},
  "application-id": "",
  "segment-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* segment-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSegmentVersion
Returns information about a segment version.


```js
amazonaws_pinpoint.GetSegmentVersion({
  "body": {},
  "application-id": "",
  "segment-id": "",
  "version": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* segment-id (string) **required**
* version (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateApplicationSettings
Used to update the settings for an app.


```js
amazonaws_pinpoint.UpdateApplicationSettings({
  "body": {
    "WriteApplicationSettingsRequest": {}
  },
  "application-id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* application-id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

