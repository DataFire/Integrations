# @datafire/amazonaws_pinpoint

Client library for Amazon Pinpoint

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_pinpoint
```
```js
let amazonaws_pinpoint = require('@datafire/amazonaws_pinpoint').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_pinpoint.GetApps({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetApps



```js
amazonaws_pinpoint.GetApps({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAppsResponse](#getappsresponse)

### CreateApp



```js
amazonaws_pinpoint.CreateApp({
  "CreateApplicationRequest": {}
}, context)
```

#### Input
* input `object`
  * CreateApplicationRequest **required** [CreateApplicationRequest](#createapplicationrequest)

#### Output
*Output schema unknown*

### DeleteApp



```js
amazonaws_pinpoint.DeleteApp({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteAppResponse](#deleteappresponse)

### GetApp



```js
amazonaws_pinpoint.GetApp({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetAppResponse](#getappresponse)

### GetCampaigns



```js
amazonaws_pinpoint.GetCampaigns({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetCampaignsResponse](#getcampaignsresponse)

### CreateCampaign



```js
amazonaws_pinpoint.CreateCampaign({
  "application-id": "",
  "WriteCampaignRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * WriteCampaignRequest **required** [WriteCampaignRequest](#writecampaignrequest)

#### Output
*Output schema unknown*

### DeleteCampaign



```js
amazonaws_pinpoint.DeleteCampaign({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`

#### Output
* output [DeleteCampaignResponse](#deletecampaignresponse)

### GetCampaign



```js
amazonaws_pinpoint.GetCampaign({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`

#### Output
* output [GetCampaignResponse](#getcampaignresponse)

### UpdateCampaign



```js
amazonaws_pinpoint.UpdateCampaign({
  "application-id": "",
  "campaign-id": "",
  "WriteCampaignRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`
  * WriteCampaignRequest **required** [WriteCampaignRequest](#writecampaignrequest)

#### Output
* output [UpdateCampaignResponse](#updatecampaignresponse)

### GetCampaignActivities



```js
amazonaws_pinpoint.GetCampaignActivities({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`

#### Output
* output [GetCampaignActivitiesResponse](#getcampaignactivitiesresponse)

### GetCampaignVersions



```js
amazonaws_pinpoint.GetCampaignVersions({
  "application-id": "",
  "campaign-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`

#### Output
* output [GetCampaignVersionsResponse](#getcampaignversionsresponse)

### GetCampaignVersion



```js
amazonaws_pinpoint.GetCampaignVersion({
  "application-id": "",
  "campaign-id": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`
  * version **required** `string`

#### Output
* output [GetCampaignVersionResponse](#getcampaignversionresponse)

### DeleteAdmChannel



```js
amazonaws_pinpoint.DeleteAdmChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteAdmChannelResponse](#deleteadmchannelresponse)

### GetAdmChannel



```js
amazonaws_pinpoint.GetAdmChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetAdmChannelResponse](#getadmchannelresponse)

### UpdateAdmChannel



```js
amazonaws_pinpoint.UpdateAdmChannel({
  "application-id": "",
  "ADMChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * ADMChannelRequest **required** [ADMChannelRequest](#admchannelrequest)

#### Output
* output [UpdateAdmChannelResponse](#updateadmchannelresponse)

### DeleteApnsChannel



```js
amazonaws_pinpoint.DeleteApnsChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteApnsChannelResponse](#deleteapnschannelresponse)

### GetApnsChannel



```js
amazonaws_pinpoint.GetApnsChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetApnsChannelResponse](#getapnschannelresponse)

### UpdateApnsChannel



```js
amazonaws_pinpoint.UpdateApnsChannel({
  "application-id": "",
  "APNSChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * APNSChannelRequest **required** [APNSChannelRequest](#apnschannelrequest)

#### Output
* output [UpdateApnsChannelResponse](#updateapnschannelresponse)

### DeleteApnsSandboxChannel



```js
amazonaws_pinpoint.DeleteApnsSandboxChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteApnsSandboxChannelResponse](#deleteapnssandboxchannelresponse)

### GetApnsSandboxChannel



```js
amazonaws_pinpoint.GetApnsSandboxChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetApnsSandboxChannelResponse](#getapnssandboxchannelresponse)

### UpdateApnsSandboxChannel



```js
amazonaws_pinpoint.UpdateApnsSandboxChannel({
  "application-id": "",
  "APNSSandboxChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * APNSSandboxChannelRequest **required** [APNSSandboxChannelRequest](#apnssandboxchannelrequest)

#### Output
* output [UpdateApnsSandboxChannelResponse](#updateapnssandboxchannelresponse)

### DeleteApnsVoipChannel



```js
amazonaws_pinpoint.DeleteApnsVoipChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteApnsVoipChannelResponse](#deleteapnsvoipchannelresponse)

### GetApnsVoipChannel



```js
amazonaws_pinpoint.GetApnsVoipChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetApnsVoipChannelResponse](#getapnsvoipchannelresponse)

### UpdateApnsVoipChannel



```js
amazonaws_pinpoint.UpdateApnsVoipChannel({
  "application-id": "",
  "APNSVoipChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * APNSVoipChannelRequest **required** [APNSVoipChannelRequest](#apnsvoipchannelrequest)

#### Output
* output [UpdateApnsVoipChannelResponse](#updateapnsvoipchannelresponse)

### DeleteApnsVoipSandboxChannel



```js
amazonaws_pinpoint.DeleteApnsVoipSandboxChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteApnsVoipSandboxChannelResponse](#deleteapnsvoipsandboxchannelresponse)

### GetApnsVoipSandboxChannel



```js
amazonaws_pinpoint.GetApnsVoipSandboxChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetApnsVoipSandboxChannelResponse](#getapnsvoipsandboxchannelresponse)

### UpdateApnsVoipSandboxChannel



```js
amazonaws_pinpoint.UpdateApnsVoipSandboxChannel({
  "application-id": "",
  "APNSVoipSandboxChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * APNSVoipSandboxChannelRequest **required** [APNSVoipSandboxChannelRequest](#apnsvoipsandboxchannelrequest)

#### Output
* output [UpdateApnsVoipSandboxChannelResponse](#updateapnsvoipsandboxchannelresponse)

### DeleteBaiduChannel



```js
amazonaws_pinpoint.DeleteBaiduChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteBaiduChannelResponse](#deletebaiduchannelresponse)

### GetBaiduChannel



```js
amazonaws_pinpoint.GetBaiduChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetBaiduChannelResponse](#getbaiduchannelresponse)

### UpdateBaiduChannel



```js
amazonaws_pinpoint.UpdateBaiduChannel({
  "application-id": "",
  "BaiduChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * BaiduChannelRequest **required** [BaiduChannelRequest](#baiduchannelrequest)

#### Output
* output [UpdateBaiduChannelResponse](#updatebaiduchannelresponse)

### DeleteEmailChannel



```js
amazonaws_pinpoint.DeleteEmailChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteEmailChannelResponse](#deleteemailchannelresponse)

### GetEmailChannel



```js
amazonaws_pinpoint.GetEmailChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetEmailChannelResponse](#getemailchannelresponse)

### UpdateEmailChannel



```js
amazonaws_pinpoint.UpdateEmailChannel({
  "application-id": "",
  "EmailChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * EmailChannelRequest **required** [EmailChannelRequest](#emailchannelrequest)

#### Output
* output [UpdateEmailChannelResponse](#updateemailchannelresponse)

### DeleteGcmChannel



```js
amazonaws_pinpoint.DeleteGcmChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteGcmChannelResponse](#deletegcmchannelresponse)

### GetGcmChannel



```js
amazonaws_pinpoint.GetGcmChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetGcmChannelResponse](#getgcmchannelresponse)

### UpdateGcmChannel



```js
amazonaws_pinpoint.UpdateGcmChannel({
  "application-id": "",
  "GCMChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * GCMChannelRequest **required** [GCMChannelRequest](#gcmchannelrequest)

#### Output
* output [UpdateGcmChannelResponse](#updategcmchannelresponse)

### DeleteSmsChannel



```js
amazonaws_pinpoint.DeleteSmsChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteSmsChannelResponse](#deletesmschannelresponse)

### GetSmsChannel



```js
amazonaws_pinpoint.GetSmsChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetSmsChannelResponse](#getsmschannelresponse)

### UpdateSmsChannel



```js
amazonaws_pinpoint.UpdateSmsChannel({
  "application-id": "",
  "SMSChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * SMSChannelRequest **required** [SMSChannelRequest](#smschannelrequest)

#### Output
* output [UpdateSmsChannelResponse](#updatesmschannelresponse)

### UpdateEndpointsBatch



```js
amazonaws_pinpoint.UpdateEndpointsBatch({
  "application-id": "",
  "EndpointBatchRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * EndpointBatchRequest **required** [EndpointBatchRequest](#endpointbatchrequest)

#### Output
*Output schema unknown*

### GetEndpoint



```js
amazonaws_pinpoint.GetEndpoint({
  "application-id": "",
  "endpoint-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * endpoint-id **required** `string`

#### Output
* output [GetEndpointResponse](#getendpointresponse)

### UpdateEndpoint



```js
amazonaws_pinpoint.UpdateEndpoint({
  "application-id": "",
  "endpoint-id": "",
  "EndpointRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * endpoint-id **required** `string`
  * EndpointRequest **required** [EndpointRequest](#endpointrequest)

#### Output
*Output schema unknown*

### DeleteEventStream



```js
amazonaws_pinpoint.DeleteEventStream({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteEventStreamResponse](#deleteeventstreamresponse)

### GetEventStream



```js
amazonaws_pinpoint.GetEventStream({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetEventStreamResponse](#geteventstreamresponse)

### PutEventStream



```js
amazonaws_pinpoint.PutEventStream({
  "application-id": "",
  "WriteEventStream": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * WriteEventStream **required** [WriteEventStream](#writeeventstream)

#### Output
* output [PutEventStreamResponse](#puteventstreamresponse)

### GetImportJobs



```js
amazonaws_pinpoint.GetImportJobs({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetImportJobsResponse](#getimportjobsresponse)

### CreateImportJob



```js
amazonaws_pinpoint.CreateImportJob({
  "application-id": "",
  "ImportJobRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * ImportJobRequest **required** [ImportJobRequest](#importjobrequest)

#### Output
*Output schema unknown*

### GetImportJob



```js
amazonaws_pinpoint.GetImportJob({
  "application-id": "",
  "job-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * job-id **required** `string`

#### Output
* output [GetImportJobResponse](#getimportjobresponse)

### SendMessages



```js
amazonaws_pinpoint.SendMessages({
  "application-id": "",
  "MessageRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * MessageRequest **required** [MessageRequest](#messagerequest)

#### Output
* output [SendMessagesResponse](#sendmessagesresponse)

### GetSegments



```js
amazonaws_pinpoint.GetSegments({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetSegmentsResponse](#getsegmentsresponse)

### CreateSegment



```js
amazonaws_pinpoint.CreateSegment({
  "application-id": "",
  "WriteSegmentRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * WriteSegmentRequest **required** [WriteSegmentRequest](#writesegmentrequest)

#### Output
*Output schema unknown*

### DeleteSegment



```js
amazonaws_pinpoint.DeleteSegment({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`

#### Output
* output [DeleteSegmentResponse](#deletesegmentresponse)

### GetSegment



```js
amazonaws_pinpoint.GetSegment({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`

#### Output
* output [GetSegmentResponse](#getsegmentresponse)

### UpdateSegment



```js
amazonaws_pinpoint.UpdateSegment({
  "application-id": "",
  "segment-id": "",
  "WriteSegmentRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`
  * WriteSegmentRequest **required** [WriteSegmentRequest](#writesegmentrequest)

#### Output
* output [UpdateSegmentResponse](#updatesegmentresponse)

### GetSegmentImportJobs



```js
amazonaws_pinpoint.GetSegmentImportJobs({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`

#### Output
* output [GetSegmentImportJobsResponse](#getsegmentimportjobsresponse)

### GetSegmentVersions



```js
amazonaws_pinpoint.GetSegmentVersions({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`

#### Output
* output [GetSegmentVersionsResponse](#getsegmentversionsresponse)

### GetSegmentVersion



```js
amazonaws_pinpoint.GetSegmentVersion({
  "application-id": "",
  "segment-id": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * segment-id **required** `string`
  * version **required** `string`

#### Output
* output [GetSegmentVersionResponse](#getsegmentversionresponse)

### GetApplicationSettings



```js
amazonaws_pinpoint.GetApplicationSettings({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetApplicationSettingsResponse](#getapplicationsettingsresponse)

### UpdateApplicationSettings



```js
amazonaws_pinpoint.UpdateApplicationSettings({
  "application-id": "",
  "WriteApplicationSettingsRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * WriteApplicationSettingsRequest **required** [WriteApplicationSettingsRequest](#writeapplicationsettingsrequest)

#### Output
* output [UpdateApplicationSettingsResponse](#updateapplicationsettingsresponse)

### SendUsersMessages



```js
amazonaws_pinpoint.SendUsersMessages({
  "application-id": "",
  "SendUsersMessageRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * SendUsersMessageRequest **required** [SendUsersMessageRequest](#sendusersmessagerequest)

#### Output
* output [SendUsersMessagesResponse](#sendusersmessagesresponse)



## Definitions

### ADMChannelRequest
* ADMChannelRequest `object`: Amazon Device Messaging channel definition.
  * ClientId [__string](#__string)
  * ClientSecret [__string](#__string)
  * Enabled [__boolean](#__boolean)

### ADMChannelResponse
* ADMChannelResponse `object`: Amazon Device Messaging channel definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### ADMMessage
* ADMMessage `object`: ADM Message.
  * Action [Action](#action)
  * Body [__string](#__string)
  * ConsolidationKey [__string](#__string)
  * Data [MapOf__string](#mapof__string)
  * ExpiresAfter [__string](#__string)
  * IconReference [__string](#__string)
  * ImageIconUrl [__string](#__string)
  * ImageUrl [__string](#__string)
  * MD5 [__string](#__string)
  * RawContent [__string](#__string)
  * SilentPush [__boolean](#__boolean)
  * SmallImageIconUrl [__string](#__string)
  * Sound [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * Title [__string](#__string)
  * Url [__string](#__string)

### APNSChannelRequest
* APNSChannelRequest `object`: Apple Push Notification Service channel definition.
  * BundleId [__string](#__string)
  * Certificate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * PrivateKey [__string](#__string)
  * TeamId [__string](#__string)
  * TokenKey [__string](#__string)
  * TokenKeyId [__string](#__string)

### APNSChannelResponse
* APNSChannelResponse `object`: Apple Distribution Push Notification Service channel definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * HasTokenKey [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### APNSMessage
* APNSMessage `object`: APNS Message.
  * Action [Action](#action)
  * Badge [__integer](#__integer)
  * Body [__string](#__string)
  * Category [__string](#__string)
  * CollapseId [__string](#__string)
  * Data [MapOf__string](#mapof__string)
  * MediaUrl [__string](#__string)
  * PreferredAuthenticationMethod [__string](#__string)
  * Priority [__string](#__string)
  * RawContent [__string](#__string)
  * SilentPush [__boolean](#__boolean)
  * Sound [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * ThreadId [__string](#__string)
  * TimeToLive [__integer](#__integer)
  * Title [__string](#__string)
  * Url [__string](#__string)

### APNSSandboxChannelRequest
* APNSSandboxChannelRequest `object`: Apple Development Push Notification Service channel definition.
  * BundleId [__string](#__string)
  * Certificate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * PrivateKey [__string](#__string)
  * TeamId [__string](#__string)
  * TokenKey [__string](#__string)
  * TokenKeyId [__string](#__string)

### APNSSandboxChannelResponse
* APNSSandboxChannelResponse `object`: Apple Development Push Notification Service channel definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * HasTokenKey [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### APNSVoipChannelRequest
* APNSVoipChannelRequest `object`: Apple VoIP Push Notification Service channel definition.
  * BundleId [__string](#__string)
  * Certificate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * PrivateKey [__string](#__string)
  * TeamId [__string](#__string)
  * TokenKey [__string](#__string)
  * TokenKeyId [__string](#__string)

### APNSVoipChannelResponse
* APNSVoipChannelResponse `object`: Apple VoIP Push Notification Service channel definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * HasTokenKey [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### APNSVoipSandboxChannelRequest
* APNSVoipSandboxChannelRequest `object`: Apple VoIP Developer Push Notification Service channel definition.
  * BundleId [__string](#__string)
  * Certificate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * PrivateKey [__string](#__string)
  * TeamId [__string](#__string)
  * TokenKey [__string](#__string)
  * TokenKeyId [__string](#__string)

### APNSVoipSandboxChannelResponse
* APNSVoipSandboxChannelResponse `object`: Apple VoIP Developer Push Notification Service channel definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * DefaultAuthenticationMethod [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * HasTokenKey [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### Action
* Action `string` (values: OPEN_APP, DEEP_LINK, URL)

### ActivitiesResponse
* ActivitiesResponse `object`: Activities for campaign.
  * Item [ListOfActivityResponse](#listofactivityresponse)

### ActivityResponse
* ActivityResponse `object`: Activity definition
  * ApplicationId [__string](#__string)
  * CampaignId [__string](#__string)
  * End [__string](#__string)
  * Id [__string](#__string)
  * Result [__string](#__string)
  * ScheduledStart [__string](#__string)
  * Start [__string](#__string)
  * State [__string](#__string)
  * SuccessfulEndpointCount [__integer](#__integer)
  * TimezonesCompletedCount [__integer](#__integer)
  * TimezonesTotalCount [__integer](#__integer)
  * TotalEndpointCount [__integer](#__integer)
  * TreatmentId [__string](#__string)

### AddressConfiguration
* AddressConfiguration `object`: Address configuration.
  * BodyOverride [__string](#__string)
  * ChannelType [ChannelType](#channeltype)
  * Context [MapOf__string](#mapof__string)
  * RawContent [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * TitleOverride [__string](#__string)

### ApplicationResponse
* ApplicationResponse `object`: Application Response.
  * Id [__string](#__string)
  * Name [__string](#__string)

### ApplicationSettingsResource
* ApplicationSettingsResource `object`: Application settings.
  * ApplicationId [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Limits [CampaignLimits](#campaignlimits)
  * QuietTime [QuietTime](#quiettime)

### ApplicationsResponse
* ApplicationsResponse `object`: Get Applications Result.
  * Item [ListOfApplicationResponse](#listofapplicationresponse)
  * NextToken [__string](#__string)

### AttributeDimension
* AttributeDimension `object`: Custom attibute dimension
  * AttributeType [AttributeType](#attributetype)
  * Values [ListOf__string](#listof__string)

### AttributeType
* AttributeType `string` (values: INCLUSIVE, EXCLUSIVE)

### BadRequestException
* BadRequestException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### BaiduChannelRequest
* BaiduChannelRequest `object`: Baidu Cloud Push credentials
  * ApiKey [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * SecretKey [__string](#__string)

### BaiduChannelResponse
* BaiduChannelResponse `object`: Baidu Cloud Messaging channel definition
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Credential [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### BaiduMessage
* BaiduMessage `object`: Baidu Message.
  * Action [Action](#action)
  * Body [__string](#__string)
  * Data [MapOf__string](#mapof__string)
  * IconReference [__string](#__string)
  * ImageIconUrl [__string](#__string)
  * ImageUrl [__string](#__string)
  * RawContent [__string](#__string)
  * SilentPush [__boolean](#__boolean)
  * SmallImageIconUrl [__string](#__string)
  * Sound [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * Title [__string](#__string)
  * Url [__string](#__string)

### CampaignEmailMessage
* CampaignEmailMessage `object`: The email message configuration.
  * Body [__string](#__string)
  * FromAddress [__string](#__string)
  * HtmlBody [__string](#__string)
  * Title [__string](#__string)

### CampaignLimits
* CampaignLimits `object`: Campaign Limits are used to limit the number of messages that can be sent to a user.
  * Daily [__integer](#__integer)
  * MaximumDuration [__integer](#__integer)
  * MessagesPerSecond [__integer](#__integer)
  * Total [__integer](#__integer)

### CampaignResponse
* CampaignResponse `object`: Campaign definition
  * AdditionalTreatments [ListOfTreatmentResource](#listoftreatmentresource)
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * DefaultState [CampaignState](#campaignstate)
  * Description [__string](#__string)
  * HoldoutPercent [__integer](#__integer)
  * Id [__string](#__string)
  * IsPaused [__boolean](#__boolean)
  * LastModifiedDate [__string](#__string)
  * Limits [CampaignLimits](#campaignlimits)
  * MessageConfiguration [MessageConfiguration](#messageconfiguration)
  * Name [__string](#__string)
  * Schedule [Schedule](#schedule)
  * SegmentId [__string](#__string)
  * SegmentVersion [__integer](#__integer)
  * State [CampaignState](#campaignstate)
  * TreatmentDescription [__string](#__string)
  * TreatmentName [__string](#__string)
  * Version [__integer](#__integer)

### CampaignSmsMessage
* CampaignSmsMessage `object`: SMS message configuration.
  * Body [__string](#__string)
  * MessageType [MessageType](#messagetype)
  * SenderId [__string](#__string)

### CampaignState
* CampaignState `object`: State of the Campaign
  * CampaignStatus [CampaignStatus](#campaignstatus)

### CampaignStatus
* CampaignStatus `string` (values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED)

### CampaignsResponse
* CampaignsResponse `object`: List of available campaigns.
  * Item [ListOfCampaignResponse](#listofcampaignresponse)
  * NextToken [__string](#__string)

### ChannelType
* ChannelType `string` (values: GCM, APNS, APNS_SANDBOX, APNS_VOIP, APNS_VOIP_SANDBOX, ADM, SMS, EMAIL, BAIDU)

### CreateAppRequest
* CreateAppRequest `object`
  * CreateApplicationRequest **required** [CreateApplicationRequest](#createapplicationrequest)

### CreateAppResponse
* CreateAppResponse `object`
  * ApplicationResponse **required** [ApplicationResponse](#applicationresponse)

### CreateApplicationRequest
* CreateApplicationRequest `object`: Application Request.
  * Name [__string](#__string)

### CreateCampaignRequest
* CreateCampaignRequest `object`
  * WriteCampaignRequest **required** [WriteCampaignRequest](#writecampaignrequest)

### CreateCampaignResponse
* CreateCampaignResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### CreateImportJobRequest
* CreateImportJobRequest `object`
  * ImportJobRequest **required** [ImportJobRequest](#importjobrequest)

### CreateImportJobResponse
* CreateImportJobResponse `object`
  * ImportJobResponse **required** [ImportJobResponse](#importjobresponse)

### CreateSegmentRequest
* CreateSegmentRequest `object`
  * WriteSegmentRequest **required** [WriteSegmentRequest](#writesegmentrequest)

### CreateSegmentResponse
* CreateSegmentResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### DefaultMessage
* DefaultMessage `object`: Default Message across push notification, email, and sms.
  * Body [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)

### DefaultPushNotificationMessage
* DefaultPushNotificationMessage `object`: Default Push Notification Message.
  * Action [Action](#action)
  * Body [__string](#__string)
  * Data [MapOf__string](#mapof__string)
  * SilentPush [__boolean](#__boolean)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * Title [__string](#__string)
  * Url [__string](#__string)

### DeleteAdmChannelRequest
* DeleteAdmChannelRequest `object`

### DeleteAdmChannelResponse
* DeleteAdmChannelResponse `object`
  * ADMChannelResponse **required** [ADMChannelResponse](#admchannelresponse)

### DeleteApnsChannelRequest
* DeleteApnsChannelRequest `object`

### DeleteApnsChannelResponse
* DeleteApnsChannelResponse `object`
  * APNSChannelResponse **required** [APNSChannelResponse](#apnschannelresponse)

### DeleteApnsSandboxChannelRequest
* DeleteApnsSandboxChannelRequest `object`

### DeleteApnsSandboxChannelResponse
* DeleteApnsSandboxChannelResponse `object`
  * APNSSandboxChannelResponse **required** [APNSSandboxChannelResponse](#apnssandboxchannelresponse)

### DeleteApnsVoipChannelRequest
* DeleteApnsVoipChannelRequest `object`

### DeleteApnsVoipChannelResponse
* DeleteApnsVoipChannelResponse `object`
  * APNSVoipChannelResponse **required** [APNSVoipChannelResponse](#apnsvoipchannelresponse)

### DeleteApnsVoipSandboxChannelRequest
* DeleteApnsVoipSandboxChannelRequest `object`

### DeleteApnsVoipSandboxChannelResponse
* DeleteApnsVoipSandboxChannelResponse `object`
  * APNSVoipSandboxChannelResponse **required** [APNSVoipSandboxChannelResponse](#apnsvoipsandboxchannelresponse)

### DeleteAppRequest
* DeleteAppRequest `object`

### DeleteAppResponse
* DeleteAppResponse `object`
  * ApplicationResponse **required** [ApplicationResponse](#applicationresponse)

### DeleteBaiduChannelRequest
* DeleteBaiduChannelRequest `object`

### DeleteBaiduChannelResponse
* DeleteBaiduChannelResponse `object`
  * BaiduChannelResponse **required** [BaiduChannelResponse](#baiduchannelresponse)

### DeleteCampaignRequest
* DeleteCampaignRequest `object`

### DeleteCampaignResponse
* DeleteCampaignResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### DeleteEmailChannelRequest
* DeleteEmailChannelRequest `object`

### DeleteEmailChannelResponse
* DeleteEmailChannelResponse `object`
  * EmailChannelResponse **required** [EmailChannelResponse](#emailchannelresponse)

### DeleteEventStreamRequest
* DeleteEventStreamRequest `object`: DeleteEventStream Request

### DeleteEventStreamResponse
* DeleteEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### DeleteGcmChannelRequest
* DeleteGcmChannelRequest `object`

### DeleteGcmChannelResponse
* DeleteGcmChannelResponse `object`
  * GCMChannelResponse **required** [GCMChannelResponse](#gcmchannelresponse)

### DeleteSegmentRequest
* DeleteSegmentRequest `object`

### DeleteSegmentResponse
* DeleteSegmentResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### DeleteSmsChannelRequest
* DeleteSmsChannelRequest `object`

### DeleteSmsChannelResponse
* DeleteSmsChannelResponse `object`
  * SMSChannelResponse **required** [SMSChannelResponse](#smschannelresponse)

### DeliveryStatus
* DeliveryStatus `string` (values: SUCCESSFUL, THROTTLED, TEMPORARY_FAILURE, PERMANENT_FAILURE, UNKNOWN_FAILURE, OPT_OUT, DUPLICATE)

### DimensionType
* DimensionType `string` (values: INCLUSIVE, EXCLUSIVE)

### DirectMessageConfiguration
* DirectMessageConfiguration `object`: The message configuration.
  * ADMMessage [ADMMessage](#admmessage)
  * APNSMessage [APNSMessage](#apnsmessage)
  * BaiduMessage [BaiduMessage](#baidumessage)
  * DefaultMessage [DefaultMessage](#defaultmessage)
  * DefaultPushNotificationMessage [DefaultPushNotificationMessage](#defaultpushnotificationmessage)
  * GCMMessage [GCMMessage](#gcmmessage)
  * SMSMessage [SMSMessage](#smsmessage)

### Duration
* Duration `string` (values: HR_24, DAY_7, DAY_14, DAY_30)

### EmailChannelRequest
* EmailChannelRequest `object`: Email Channel Request
  * Enabled [__boolean](#__boolean)
  * FromAddress [__string](#__string)
  * Identity [__string](#__string)
  * RoleArn [__string](#__string)

### EmailChannelResponse
* EmailChannelResponse `object`: Email Channel Response.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * FromAddress [__string](#__string)
  * HasCredential [__boolean](#__boolean)
  * Id [__string](#__string)
  * Identity [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * RoleArn [__string](#__string)
  * Version [__integer](#__integer)

### EndpointBatchItem
* EndpointBatchItem `object`: Endpoint update request
  * Address [__string](#__string)
  * Attributes [MapOfListOf__string](#mapoflistof__string)
  * ChannelType [ChannelType](#channeltype)
  * Demographic [EndpointDemographic](#endpointdemographic)
  * EffectiveDate [__string](#__string)
  * EndpointStatus [__string](#__string)
  * Id [__string](#__string)
  * Location [EndpointLocation](#endpointlocation)
  * Metrics [MapOf__double](#mapof__double)
  * OptOut [__string](#__string)
  * RequestId [__string](#__string)
  * User [EndpointUser](#endpointuser)

### EndpointBatchRequest
* EndpointBatchRequest `object`: Endpoint batch update request.
  * Item [ListOfEndpointBatchItem](#listofendpointbatchitem)

### EndpointDemographic
* EndpointDemographic `object`: Endpoint demographic data
  * AppVersion [__string](#__string)
  * Locale [__string](#__string)
  * Make [__string](#__string)
  * Model [__string](#__string)
  * ModelVersion [__string](#__string)
  * Platform [__string](#__string)
  * PlatformVersion [__string](#__string)
  * Timezone [__string](#__string)

### EndpointLocation
* EndpointLocation `object`: Endpoint location data
  * City [__string](#__string)
  * Country [__string](#__string)
  * Latitude [__double](#__double)
  * Longitude [__double](#__double)
  * PostalCode [__string](#__string)
  * Region [__string](#__string)

### EndpointMessageResult
* EndpointMessageResult `object`: The result from sending a message to an endpoint.
  * Address [__string](#__string)
  * DeliveryStatus [DeliveryStatus](#deliverystatus)
  * StatusCode [__integer](#__integer)
  * StatusMessage [__string](#__string)
  * UpdatedToken [__string](#__string)

### EndpointRequest
* EndpointRequest `object`: Endpoint update request
  * Address [__string](#__string)
  * Attributes [MapOfListOf__string](#mapoflistof__string)
  * ChannelType [ChannelType](#channeltype)
  * Demographic [EndpointDemographic](#endpointdemographic)
  * EffectiveDate [__string](#__string)
  * EndpointStatus [__string](#__string)
  * Location [EndpointLocation](#endpointlocation)
  * Metrics [MapOf__double](#mapof__double)
  * OptOut [__string](#__string)
  * RequestId [__string](#__string)
  * User [EndpointUser](#endpointuser)

### EndpointResponse
* EndpointResponse `object`: Endpoint response
  * Address [__string](#__string)
  * ApplicationId [__string](#__string)
  * Attributes [MapOfListOf__string](#mapoflistof__string)
  * ChannelType [ChannelType](#channeltype)
  * CohortId [__string](#__string)
  * CreationDate [__string](#__string)
  * Demographic [EndpointDemographic](#endpointdemographic)
  * EffectiveDate [__string](#__string)
  * EndpointStatus [__string](#__string)
  * Id [__string](#__string)
  * Location [EndpointLocation](#endpointlocation)
  * Metrics [MapOf__double](#mapof__double)
  * OptOut [__string](#__string)
  * RequestId [__string](#__string)
  * User [EndpointUser](#endpointuser)

### EndpointSendConfiguration
* EndpointSendConfiguration `object`: Endpoint send configuration.
  * BodyOverride [__string](#__string)
  * Context [MapOf__string](#mapof__string)
  * RawContent [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * TitleOverride [__string](#__string)

### EndpointUser
* EndpointUser `object`: Endpoint user specific custom userAttributes
  * UserAttributes [MapOfListOf__string](#mapoflistof__string)
  * UserId [__string](#__string)

### EventStream
* EventStream `object`: Model for an event publishing subscription export.
  * ApplicationId [__string](#__string)
  * DestinationStreamArn [__string](#__string)
  * ExternalId [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * LastUpdatedBy [__string](#__string)
  * RoleArn [__string](#__string)

### ForbiddenException
* ForbiddenException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### Format
* Format `string` (values: CSV, JSON)

### Frequency
* Frequency `string` (values: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY)

### GCMChannelRequest
* GCMChannelRequest `object`: Google Cloud Messaging credentials
  * ApiKey [__string](#__string)
  * Enabled [__boolean](#__boolean)

### GCMChannelResponse
* GCMChannelResponse `object`: Google Cloud Messaging channel definition
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Credential [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * Version [__integer](#__integer)

### GCMMessage
* GCMMessage `object`: GCM Message.
  * Action [Action](#action)
  * Body [__string](#__string)
  * CollapseKey [__string](#__string)
  * Data [MapOf__string](#mapof__string)
  * IconReference [__string](#__string)
  * ImageIconUrl [__string](#__string)
  * ImageUrl [__string](#__string)
  * Priority [__string](#__string)
  * RawContent [__string](#__string)
  * RestrictedPackageName [__string](#__string)
  * SilentPush [__boolean](#__boolean)
  * SmallImageIconUrl [__string](#__string)
  * Sound [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)
  * TimeToLive [__integer](#__integer)
  * Title [__string](#__string)
  * Url [__string](#__string)

### GetAdmChannelRequest
* GetAdmChannelRequest `object`

### GetAdmChannelResponse
* GetAdmChannelResponse `object`
  * ADMChannelResponse **required** [ADMChannelResponse](#admchannelresponse)

### GetApnsChannelRequest
* GetApnsChannelRequest `object`

### GetApnsChannelResponse
* GetApnsChannelResponse `object`
  * APNSChannelResponse **required** [APNSChannelResponse](#apnschannelresponse)

### GetApnsSandboxChannelRequest
* GetApnsSandboxChannelRequest `object`

### GetApnsSandboxChannelResponse
* GetApnsSandboxChannelResponse `object`
  * APNSSandboxChannelResponse **required** [APNSSandboxChannelResponse](#apnssandboxchannelresponse)

### GetApnsVoipChannelRequest
* GetApnsVoipChannelRequest `object`

### GetApnsVoipChannelResponse
* GetApnsVoipChannelResponse `object`
  * APNSVoipChannelResponse **required** [APNSVoipChannelResponse](#apnsvoipchannelresponse)

### GetApnsVoipSandboxChannelRequest
* GetApnsVoipSandboxChannelRequest `object`

### GetApnsVoipSandboxChannelResponse
* GetApnsVoipSandboxChannelResponse `object`
  * APNSVoipSandboxChannelResponse **required** [APNSVoipSandboxChannelResponse](#apnsvoipsandboxchannelresponse)

### GetAppRequest
* GetAppRequest `object`

### GetAppResponse
* GetAppResponse `object`
  * ApplicationResponse **required** [ApplicationResponse](#applicationresponse)

### GetApplicationSettingsRequest
* GetApplicationSettingsRequest `object`

### GetApplicationSettingsResponse
* GetApplicationSettingsResponse `object`
  * ApplicationSettingsResource **required** [ApplicationSettingsResource](#applicationsettingsresource)

### GetAppsRequest
* GetAppsRequest `object`

### GetAppsResponse
* GetAppsResponse `object`
  * ApplicationsResponse **required** [ApplicationsResponse](#applicationsresponse)

### GetBaiduChannelRequest
* GetBaiduChannelRequest `object`

### GetBaiduChannelResponse
* GetBaiduChannelResponse `object`
  * BaiduChannelResponse **required** [BaiduChannelResponse](#baiduchannelresponse)

### GetCampaignActivitiesRequest
* GetCampaignActivitiesRequest `object`

### GetCampaignActivitiesResponse
* GetCampaignActivitiesResponse `object`
  * ActivitiesResponse **required** [ActivitiesResponse](#activitiesresponse)

### GetCampaignRequest
* GetCampaignRequest `object`

### GetCampaignResponse
* GetCampaignResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### GetCampaignVersionRequest
* GetCampaignVersionRequest `object`

### GetCampaignVersionResponse
* GetCampaignVersionResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### GetCampaignVersionsRequest
* GetCampaignVersionsRequest `object`

### GetCampaignVersionsResponse
* GetCampaignVersionsResponse `object`
  * CampaignsResponse **required** [CampaignsResponse](#campaignsresponse)

### GetCampaignsRequest
* GetCampaignsRequest `object`

### GetCampaignsResponse
* GetCampaignsResponse `object`
  * CampaignsResponse **required** [CampaignsResponse](#campaignsresponse)

### GetEmailChannelRequest
* GetEmailChannelRequest `object`

### GetEmailChannelResponse
* GetEmailChannelResponse `object`
  * EmailChannelResponse **required** [EmailChannelResponse](#emailchannelresponse)

### GetEndpointRequest
* GetEndpointRequest `object`

### GetEndpointResponse
* GetEndpointResponse `object`
  * EndpointResponse **required** [EndpointResponse](#endpointresponse)

### GetEventStreamRequest
* GetEventStreamRequest `object`: GetEventStreamRequest

### GetEventStreamResponse
* GetEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### GetGcmChannelRequest
* GetGcmChannelRequest `object`

### GetGcmChannelResponse
* GetGcmChannelResponse `object`
  * GCMChannelResponse **required** [GCMChannelResponse](#gcmchannelresponse)

### GetImportJobRequest
* GetImportJobRequest `object`

### GetImportJobResponse
* GetImportJobResponse `object`
  * ImportJobResponse **required** [ImportJobResponse](#importjobresponse)

### GetImportJobsRequest
* GetImportJobsRequest `object`

### GetImportJobsResponse
* GetImportJobsResponse `object`
  * ImportJobsResponse **required** [ImportJobsResponse](#importjobsresponse)

### GetSegmentImportJobsRequest
* GetSegmentImportJobsRequest `object`

### GetSegmentImportJobsResponse
* GetSegmentImportJobsResponse `object`
  * ImportJobsResponse **required** [ImportJobsResponse](#importjobsresponse)

### GetSegmentRequest
* GetSegmentRequest `object`

### GetSegmentResponse
* GetSegmentResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### GetSegmentVersionRequest
* GetSegmentVersionRequest `object`

### GetSegmentVersionResponse
* GetSegmentVersionResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### GetSegmentVersionsRequest
* GetSegmentVersionsRequest `object`

### GetSegmentVersionsResponse
* GetSegmentVersionsResponse `object`
  * SegmentsResponse **required** [SegmentsResponse](#segmentsresponse)

### GetSegmentsRequest
* GetSegmentsRequest `object`

### GetSegmentsResponse
* GetSegmentsResponse `object`
  * SegmentsResponse **required** [SegmentsResponse](#segmentsresponse)

### GetSmsChannelRequest
* GetSmsChannelRequest `object`

### GetSmsChannelResponse
* GetSmsChannelResponse `object`
  * SMSChannelResponse **required** [SMSChannelResponse](#smschannelresponse)

### ImportJobRequest
* ImportJobRequest `object`
  * DefineSegment [__boolean](#__boolean)
  * ExternalId [__string](#__string)
  * Format [Format](#format)
  * RegisterEndpoints [__boolean](#__boolean)
  * RoleArn [__string](#__string)
  * S3Url [__string](#__string)
  * SegmentId [__string](#__string)
  * SegmentName [__string](#__string)

### ImportJobResource
* ImportJobResource `object`
  * DefineSegment [__boolean](#__boolean)
  * ExternalId [__string](#__string)
  * Format [Format](#format)
  * RegisterEndpoints [__boolean](#__boolean)
  * RoleArn [__string](#__string)
  * S3Url [__string](#__string)
  * SegmentId [__string](#__string)
  * SegmentName [__string](#__string)

### ImportJobResponse
* ImportJobResponse `object`
  * ApplicationId [__string](#__string)
  * CompletedPieces [__integer](#__integer)
  * CompletionDate [__string](#__string)
  * CreationDate [__string](#__string)
  * Definition [ImportJobResource](#importjobresource)
  * FailedPieces [__integer](#__integer)
  * Failures [ListOf__string](#listof__string)
  * Id [__string](#__string)
  * JobStatus [JobStatus](#jobstatus)
  * TotalFailures [__integer](#__integer)
  * TotalPieces [__integer](#__integer)
  * TotalProcessed [__integer](#__integer)
  * Type [__string](#__string)

### ImportJobsResponse
* ImportJobsResponse `object`: Import job list.
  * Item [ListOfImportJobResponse](#listofimportjobresponse)
  * NextToken [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### JobStatus
* JobStatus `string` (values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED)

### ListOfActivityResponse
* ListOfActivityResponse `array`
  * items [ActivityResponse](#activityresponse)

### ListOfApplicationResponse
* ListOfApplicationResponse `array`
  * items [ApplicationResponse](#applicationresponse)

### ListOfCampaignResponse
* ListOfCampaignResponse `array`
  * items [CampaignResponse](#campaignresponse)

### ListOfEndpointBatchItem
* ListOfEndpointBatchItem `array`
  * items [EndpointBatchItem](#endpointbatchitem)

### ListOfImportJobResponse
* ListOfImportJobResponse `array`
  * items [ImportJobResponse](#importjobresponse)

### ListOfSegmentResponse
* ListOfSegmentResponse `array`
  * items [SegmentResponse](#segmentresponse)

### ListOfTreatmentResource
* ListOfTreatmentResource `array`
  * items [TreatmentResource](#treatmentresource)

### ListOfWriteTreatmentResource
* ListOfWriteTreatmentResource `array`
  * items [WriteTreatmentResource](#writetreatmentresource)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### MapOfAddressConfiguration
* MapOfAddressConfiguration `array`
  * items `object`
    * key [__string](#__string)
    * value [AddressConfiguration](#addressconfiguration)

### MapOfAttributeDimension
* MapOfAttributeDimension `array`
  * items `object`
    * key [__string](#__string)
    * value [AttributeDimension](#attributedimension)

### MapOfEndpointMessageResult
* MapOfEndpointMessageResult `array`
  * items `object`
    * key [__string](#__string)
    * value [EndpointMessageResult](#endpointmessageresult)

### MapOfEndpointSendConfiguration
* MapOfEndpointSendConfiguration `array`
  * items `object`
    * key [__string](#__string)
    * value [EndpointSendConfiguration](#endpointsendconfiguration)

### MapOfListOf__string
* MapOfListOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [ListOf__string](#listof__string)

### MapOfMapOfEndpointMessageResult
* MapOfMapOfEndpointMessageResult `array`
  * items `object`
    * key [__string](#__string)
    * value [MapOfEndpointMessageResult](#mapofendpointmessageresult)

### MapOfMessageResult
* MapOfMessageResult `array`
  * items `object`
    * key [__string](#__string)
    * value [MessageResult](#messageresult)

### MapOf__double
* MapOf__double `array`
  * items `object`
    * key [__string](#__string)
    * value [__double](#__double)

### MapOf__integer
* MapOf__integer `array`
  * items `object`
    * key [__string](#__string)
    * value [__integer](#__integer)

### MapOf__string
* MapOf__string `array`
  * items `object`
    * key [__string](#__string)
    * value [__string](#__string)

### Message
* Message `object`
  * Action [Action](#action)
  * Body [__string](#__string)
  * ImageIconUrl [__string](#__string)
  * ImageSmallIconUrl [__string](#__string)
  * ImageUrl [__string](#__string)
  * JsonBody [__string](#__string)
  * MediaUrl [__string](#__string)
  * RawContent [__string](#__string)
  * SilentPush [__boolean](#__boolean)
  * Title [__string](#__string)
  * Url [__string](#__string)

### MessageBody
* MessageBody `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### MessageConfiguration
* MessageConfiguration `object`: Message configuration for a campaign.
  * ADMMessage [Message](#message)
  * APNSMessage [Message](#message)
  * BaiduMessage [Message](#message)
  * DefaultMessage [Message](#message)
  * EmailMessage [CampaignEmailMessage](#campaignemailmessage)
  * GCMMessage [Message](#message)
  * SMSMessage [CampaignSmsMessage](#campaignsmsmessage)

### MessageRequest
* MessageRequest `object`: Send message request.
  * Addresses [MapOfAddressConfiguration](#mapofaddressconfiguration)
  * Context [MapOf__string](#mapof__string)
  * Endpoints [MapOfEndpointSendConfiguration](#mapofendpointsendconfiguration)
  * MessageConfiguration [DirectMessageConfiguration](#directmessageconfiguration)

### MessageResponse
* MessageResponse `object`: Send message response.
  * ApplicationId [__string](#__string)
  * EndpointResult [MapOfEndpointMessageResult](#mapofendpointmessageresult)
  * RequestId [__string](#__string)
  * Result [MapOfMessageResult](#mapofmessageresult)

### MessageResult
* MessageResult `object`: The result from sending a message to an address.
  * DeliveryStatus [DeliveryStatus](#deliverystatus)
  * StatusCode [__integer](#__integer)
  * StatusMessage [__string](#__string)
  * UpdatedToken [__string](#__string)

### MessageType
* MessageType `string` (values: TRANSACTIONAL, PROMOTIONAL)

### MethodNotAllowedException
* MethodNotAllowedException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### NotFoundException
* NotFoundException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### PutEventStreamRequest
* PutEventStreamRequest `object`
  * WriteEventStream **required** [WriteEventStream](#writeeventstream)

### PutEventStreamResponse
* PutEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### QuietTime
* QuietTime `object`: Quiet Time
  * End [__string](#__string)
  * Start [__string](#__string)

### RecencyDimension
* RecencyDimension `object`: Define how a segment based on recency of use.
  * Duration [Duration](#duration)
  * RecencyType [RecencyType](#recencytype)

### RecencyType
* RecencyType `string` (values: ACTIVE, INACTIVE)

### SMSChannelRequest
* SMSChannelRequest `object`: SMS Channel Request
  * Enabled [__boolean](#__boolean)
  * SenderId [__string](#__string)
  * ShortCode [__string](#__string)

### SMSChannelResponse
* SMSChannelResponse `object`: SMS Channel Response.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Enabled [__boolean](#__boolean)
  * HasCredential [__boolean](#__boolean)
  * Id [__string](#__string)
  * IsArchived [__boolean](#__boolean)
  * LastModifiedBy [__string](#__string)
  * LastModifiedDate [__string](#__string)
  * Platform [__string](#__string)
  * SenderId [__string](#__string)
  * ShortCode [__string](#__string)
  * Version [__integer](#__integer)

### SMSMessage
* SMSMessage `object`: SMS Message.
  * Body [__string](#__string)
  * MessageType [MessageType](#messagetype)
  * SenderId [__string](#__string)
  * Substitutions [MapOfListOf__string](#mapoflistof__string)

### Schedule
* Schedule `object`: Shcedule that defines when a campaign is run.
  * EndTime [__string](#__string)
  * Frequency [Frequency](#frequency)
  * IsLocalTime [__boolean](#__boolean)
  * QuietTime [QuietTime](#quiettime)
  * StartTime [__string](#__string)
  * Timezone [__string](#__string)

### SegmentBehaviors
* SegmentBehaviors `object`: Segment behavior dimensions
  * Recency [RecencyDimension](#recencydimension)

### SegmentDemographics
* SegmentDemographics `object`: Segment demographic dimensions
  * AppVersion [SetDimension](#setdimension)
  * Channel [SetDimension](#setdimension)
  * DeviceType [SetDimension](#setdimension)
  * Make [SetDimension](#setdimension)
  * Model [SetDimension](#setdimension)
  * Platform [SetDimension](#setdimension)

### SegmentDimensions
* SegmentDimensions `object`: Segment dimensions
  * Attributes [MapOfAttributeDimension](#mapofattributedimension)
  * Behavior [SegmentBehaviors](#segmentbehaviors)
  * Demographic [SegmentDemographics](#segmentdemographics)
  * Location [SegmentLocation](#segmentlocation)
  * UserAttributes [MapOfAttributeDimension](#mapofattributedimension)

### SegmentImportResource
* SegmentImportResource `object`: Segment import definition.
  * ChannelCounts [MapOf__integer](#mapof__integer)
  * ExternalId [__string](#__string)
  * Format [Format](#format)
  * RoleArn [__string](#__string)
  * S3Url [__string](#__string)
  * Size [__integer](#__integer)

### SegmentLocation
* SegmentLocation `object`: Segment location dimensions
  * Country [SetDimension](#setdimension)

### SegmentResponse
* SegmentResponse `object`: Segment definition.
  * ApplicationId [__string](#__string)
  * CreationDate [__string](#__string)
  * Dimensions [SegmentDimensions](#segmentdimensions)
  * Id [__string](#__string)
  * ImportDefinition [SegmentImportResource](#segmentimportresource)
  * LastModifiedDate [__string](#__string)
  * Name [__string](#__string)
  * SegmentType [SegmentType](#segmenttype)
  * Version [__integer](#__integer)

### SegmentType
* SegmentType `string` (values: DIMENSIONAL, IMPORT)

### SegmentsResponse
* SegmentsResponse `object`: Segments in your account.
  * Item [ListOfSegmentResponse](#listofsegmentresponse)
  * NextToken [__string](#__string)

### SendMessagesRequest
* SendMessagesRequest `object`
  * MessageRequest **required** [MessageRequest](#messagerequest)

### SendMessagesResponse
* SendMessagesResponse `object`
  * MessageResponse **required** [MessageResponse](#messageresponse)

### SendUsersMessageRequest
* SendUsersMessageRequest `object`: Send message request.
  * Context [MapOf__string](#mapof__string)
  * MessageConfiguration [DirectMessageConfiguration](#directmessageconfiguration)
  * Users [MapOfEndpointSendConfiguration](#mapofendpointsendconfiguration)

### SendUsersMessageResponse
* SendUsersMessageResponse `object`: User send message response.
  * ApplicationId [__string](#__string)
  * RequestId [__string](#__string)
  * Result [MapOfMapOfEndpointMessageResult](#mapofmapofendpointmessageresult)

### SendUsersMessagesRequest
* SendUsersMessagesRequest `object`
  * SendUsersMessageRequest **required** [SendUsersMessageRequest](#sendusersmessagerequest)

### SendUsersMessagesResponse
* SendUsersMessagesResponse `object`
  * SendUsersMessageResponse **required** [SendUsersMessageResponse](#sendusersmessageresponse)

### SetDimension
* SetDimension `object`: Dimension specification of a segment.
  * DimensionType [DimensionType](#dimensiontype)
  * Values [ListOf__string](#listof__string)

### TooManyRequestsException
* TooManyRequestsException `object`: Simple message object.
  * Message [__string](#__string)
  * RequestID [__string](#__string)

### TreatmentResource
* TreatmentResource `object`: Treatment resource
  * Id [__string](#__string)
  * MessageConfiguration [MessageConfiguration](#messageconfiguration)
  * Schedule [Schedule](#schedule)
  * SizePercent [__integer](#__integer)
  * State [CampaignState](#campaignstate)
  * TreatmentDescription [__string](#__string)
  * TreatmentName [__string](#__string)

### UpdateAdmChannelRequest
* UpdateAdmChannelRequest `object`
  * ADMChannelRequest **required** [ADMChannelRequest](#admchannelrequest)

### UpdateAdmChannelResponse
* UpdateAdmChannelResponse `object`
  * ADMChannelResponse **required** [ADMChannelResponse](#admchannelresponse)

### UpdateApnsChannelRequest
* UpdateApnsChannelRequest `object`
  * APNSChannelRequest **required** [APNSChannelRequest](#apnschannelrequest)

### UpdateApnsChannelResponse
* UpdateApnsChannelResponse `object`
  * APNSChannelResponse **required** [APNSChannelResponse](#apnschannelresponse)

### UpdateApnsSandboxChannelRequest
* UpdateApnsSandboxChannelRequest `object`
  * APNSSandboxChannelRequest **required** [APNSSandboxChannelRequest](#apnssandboxchannelrequest)

### UpdateApnsSandboxChannelResponse
* UpdateApnsSandboxChannelResponse `object`
  * APNSSandboxChannelResponse **required** [APNSSandboxChannelResponse](#apnssandboxchannelresponse)

### UpdateApnsVoipChannelRequest
* UpdateApnsVoipChannelRequest `object`
  * APNSVoipChannelRequest **required** [APNSVoipChannelRequest](#apnsvoipchannelrequest)

### UpdateApnsVoipChannelResponse
* UpdateApnsVoipChannelResponse `object`
  * APNSVoipChannelResponse **required** [APNSVoipChannelResponse](#apnsvoipchannelresponse)

### UpdateApnsVoipSandboxChannelRequest
* UpdateApnsVoipSandboxChannelRequest `object`
  * APNSVoipSandboxChannelRequest **required** [APNSVoipSandboxChannelRequest](#apnsvoipsandboxchannelrequest)

### UpdateApnsVoipSandboxChannelResponse
* UpdateApnsVoipSandboxChannelResponse `object`
  * APNSVoipSandboxChannelResponse **required** [APNSVoipSandboxChannelResponse](#apnsvoipsandboxchannelresponse)

### UpdateApplicationSettingsRequest
* UpdateApplicationSettingsRequest `object`
  * WriteApplicationSettingsRequest **required** [WriteApplicationSettingsRequest](#writeapplicationsettingsrequest)

### UpdateApplicationSettingsResponse
* UpdateApplicationSettingsResponse `object`
  * ApplicationSettingsResource **required** [ApplicationSettingsResource](#applicationsettingsresource)

### UpdateBaiduChannelRequest
* UpdateBaiduChannelRequest `object`
  * BaiduChannelRequest **required** [BaiduChannelRequest](#baiduchannelrequest)

### UpdateBaiduChannelResponse
* UpdateBaiduChannelResponse `object`
  * BaiduChannelResponse **required** [BaiduChannelResponse](#baiduchannelresponse)

### UpdateCampaignRequest
* UpdateCampaignRequest `object`
  * WriteCampaignRequest **required** [WriteCampaignRequest](#writecampaignrequest)

### UpdateCampaignResponse
* UpdateCampaignResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### UpdateEmailChannelRequest
* UpdateEmailChannelRequest `object`
  * EmailChannelRequest **required** [EmailChannelRequest](#emailchannelrequest)

### UpdateEmailChannelResponse
* UpdateEmailChannelResponse `object`
  * EmailChannelResponse **required** [EmailChannelResponse](#emailchannelresponse)

### UpdateEndpointRequest
* UpdateEndpointRequest `object`
  * EndpointRequest **required** [EndpointRequest](#endpointrequest)

### UpdateEndpointResponse
* UpdateEndpointResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### UpdateEndpointsBatchRequest
* UpdateEndpointsBatchRequest `object`
  * EndpointBatchRequest **required** [EndpointBatchRequest](#endpointbatchrequest)

### UpdateEndpointsBatchResponse
* UpdateEndpointsBatchResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### UpdateGcmChannelRequest
* UpdateGcmChannelRequest `object`
  * GCMChannelRequest **required** [GCMChannelRequest](#gcmchannelrequest)

### UpdateGcmChannelResponse
* UpdateGcmChannelResponse `object`
  * GCMChannelResponse **required** [GCMChannelResponse](#gcmchannelresponse)

### UpdateSegmentRequest
* UpdateSegmentRequest `object`
  * WriteSegmentRequest **required** [WriteSegmentRequest](#writesegmentrequest)

### UpdateSegmentResponse
* UpdateSegmentResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### UpdateSmsChannelRequest
* UpdateSmsChannelRequest `object`
  * SMSChannelRequest **required** [SMSChannelRequest](#smschannelrequest)

### UpdateSmsChannelResponse
* UpdateSmsChannelResponse `object`
  * SMSChannelResponse **required** [SMSChannelResponse](#smschannelresponse)

### WriteApplicationSettingsRequest
* WriteApplicationSettingsRequest `object`: Creating application setting request
  * Limits [CampaignLimits](#campaignlimits)
  * QuietTime [QuietTime](#quiettime)

### WriteCampaignRequest
* WriteCampaignRequest `object`: Used to create a campaign.
  * AdditionalTreatments [ListOfWriteTreatmentResource](#listofwritetreatmentresource)
  * Description [__string](#__string)
  * HoldoutPercent [__integer](#__integer)
  * IsPaused [__boolean](#__boolean)
  * Limits [CampaignLimits](#campaignlimits)
  * MessageConfiguration [MessageConfiguration](#messageconfiguration)
  * Name [__string](#__string)
  * Schedule [Schedule](#schedule)
  * SegmentId [__string](#__string)
  * SegmentVersion [__integer](#__integer)
  * TreatmentDescription [__string](#__string)
  * TreatmentName [__string](#__string)

### WriteEventStream
* WriteEventStream `object`: Request to save an EventStream.
  * DestinationStreamArn [__string](#__string)
  * RoleArn [__string](#__string)

### WriteSegmentRequest
* WriteSegmentRequest `object`: Segment definition.
  * Dimensions [SegmentDimensions](#segmentdimensions)
  * Name [__string](#__string)

### WriteTreatmentResource
* WriteTreatmentResource `object`: Used to create a campaign treatment.
  * MessageConfiguration [MessageConfiguration](#messageconfiguration)
  * Schedule [Schedule](#schedule)
  * SizePercent [__integer](#__integer)
  * TreatmentDescription [__string](#__string)
  * TreatmentName [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __string
* __string `string`

### __timestamp
* __timestamp `string`


