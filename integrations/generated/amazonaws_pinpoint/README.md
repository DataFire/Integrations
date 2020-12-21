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

.then(data => {
  console.log(data);
});
```

## Description

Doc Engage API - Amazon Pinpoint API

## Actions

### GetApps



```js
amazonaws_pinpoint.GetApps({}, context)
```

#### Input
* input `object`
  * page-size `string`
  * token `string`

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
  * CreateApplicationRequest **required** `object`: Specifies the display name of an application and the tags to associate with the application.
    * tags
    * Name

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

### RemoveAttributes



```js
amazonaws_pinpoint.RemoveAttributes({
  "application-id": "",
  "attribute-type": "",
  "UpdateAttributesRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * attribute-type **required** `string`
  * UpdateAttributesRequest **required** `object`: Specifies one or more attributes to remove from all the endpoints that are associated with an application.
    * Blacklist
      * items [__string](#__string)

#### Output
* output [RemoveAttributesResponse](#removeattributesresponse)

### GetCampaigns



```js
amazonaws_pinpoint.GetCampaigns({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * page-size `string`
  * token `string`

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
  * WriteCampaignRequest **required** `object`: Specifies the configuration and other settings for a campaign.
    * tags
    * AdditionalTreatments
      * items [WriteTreatmentResource](#writetreatmentresource)
    * CustomDeliveryConfiguration
      * DeliveryUri **required**
      * EndpointTypes
        * items [__EndpointTypesElement](#__endpointtypeselement)
    * Description
    * HoldoutPercent
    * Hook
      * LambdaFunctionName
      * Mode
      * WebUrl
    * IsPaused
    * Limits
      * Daily
      * MaximumDuration
      * MessagesPerSecond
      * Total
    * MessageConfiguration
      * ADMMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * APNSMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * BaiduMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * CustomMessage
        * Data
      * DefaultMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * EmailMessage
        * Body
        * FromAddress
        * HtmlBody
        * Title
      * GCMMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * SMSMessage
        * Body
        * MessageType
        * SenderId
    * Name
    * Schedule
      * EndTime
      * EventFilter
        * Dimensions **required**
          * Attributes
          * EventType
          * Metrics
        * FilterType **required**
      * Frequency
      * IsLocalTime
      * QuietTime
        * End
        * Start
      * StartTime **required**
      * Timezone
    * SegmentId
    * SegmentVersion
    * TemplateConfiguration
      * EmailTemplate
        * Name
        * Version
      * PushTemplate
        * Name
        * Version
      * SMSTemplate
        * Name
        * Version
      * VoiceTemplate
        * Name
        * Version
    * TreatmentDescription
    * TreatmentName

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
  * WriteCampaignRequest **required** `object`: Specifies the configuration and other settings for a campaign.
    * tags
    * AdditionalTreatments
      * items [WriteTreatmentResource](#writetreatmentresource)
    * CustomDeliveryConfiguration
      * DeliveryUri **required**
      * EndpointTypes
        * items [__EndpointTypesElement](#__endpointtypeselement)
    * Description
    * HoldoutPercent
    * Hook
      * LambdaFunctionName
      * Mode
      * WebUrl
    * IsPaused
    * Limits
      * Daily
      * MaximumDuration
      * MessagesPerSecond
      * Total
    * MessageConfiguration
      * ADMMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * APNSMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * BaiduMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * CustomMessage
        * Data
      * DefaultMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * EmailMessage
        * Body
        * FromAddress
        * HtmlBody
        * Title
      * GCMMessage
        * Action
        * Body
        * ImageIconUrl
        * ImageSmallIconUrl
        * ImageUrl
        * JsonBody
        * MediaUrl
        * RawContent
        * SilentPush
        * TimeToLive
        * Title
        * Url
      * SMSMessage
        * Body
        * MessageType
        * SenderId
    * Name
    * Schedule
      * EndTime
      * EventFilter
        * Dimensions **required**
          * Attributes
          * EventType
          * Metrics
        * FilterType **required**
      * Frequency
      * IsLocalTime
      * QuietTime
        * End
        * Start
      * StartTime **required**
      * Timezone
    * SegmentId
    * SegmentVersion
    * TemplateConfiguration
      * EmailTemplate
        * Name
        * Version
      * PushTemplate
        * Name
        * Version
      * SMSTemplate
        * Name
        * Version
      * VoiceTemplate
        * Name
        * Version
    * TreatmentDescription
    * TreatmentName

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
  * page-size `string`
  * token `string`

#### Output
* output [GetCampaignActivitiesResponse](#getcampaignactivitiesresponse)

### GetCampaignDateRangeKpi



```js
amazonaws_pinpoint.GetCampaignDateRangeKpi({
  "application-id": "",
  "campaign-id": "",
  "kpi-name": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * campaign-id **required** `string`
  * end-time `string`
  * kpi-name **required** `string`
  * next-token `string`
  * page-size `string`
  * start-time `string`

#### Output
* output [GetCampaignDateRangeKpiResponse](#getcampaigndaterangekpiresponse)

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
  * page-size `string`
  * token `string`

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

### GetChannels



```js
amazonaws_pinpoint.GetChannels({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetChannelsResponse](#getchannelsresponse)

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
  * ADMChannelRequest **required** `object`: Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
    * ClientId
    * ClientSecret
    * Enabled

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
  * APNSChannelRequest **required** `object`: Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
    * BundleId
    * Certificate
    * DefaultAuthenticationMethod
    * Enabled
    * PrivateKey
    * TeamId
    * TokenKey
    * TokenKeyId

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
  * APNSSandboxChannelRequest **required** `object`: Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
    * BundleId
    * Certificate
    * DefaultAuthenticationMethod
    * Enabled
    * PrivateKey
    * TeamId
    * TokenKey
    * TokenKeyId

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
  * APNSVoipChannelRequest **required** `object`: Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
    * BundleId
    * Certificate
    * DefaultAuthenticationMethod
    * Enabled
    * PrivateKey
    * TeamId
    * TokenKey
    * TokenKeyId

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
  * APNSVoipSandboxChannelRequest **required** `object`: Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
    * BundleId
    * Certificate
    * DefaultAuthenticationMethod
    * Enabled
    * PrivateKey
    * TeamId
    * TokenKey
    * TokenKeyId

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
  * BaiduChannelRequest **required** `object`: Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
    * ApiKey
    * Enabled
    * SecretKey

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
  * EmailChannelRequest **required** `object`: Specifies the status and settings of the email channel for an application.
    * ConfigurationSet
    * Enabled
    * FromAddress
    * Identity
    * RoleArn

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
  * GCMChannelRequest **required** `object`: Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
    * ApiKey
    * Enabled

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
  * SMSChannelRequest **required** `object`: Specifies the status and settings of the SMS channel for an application.
    * Enabled
    * SenderId
    * ShortCode

#### Output
* output [UpdateSmsChannelResponse](#updatesmschannelresponse)

### DeleteVoiceChannel



```js
amazonaws_pinpoint.DeleteVoiceChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [DeleteVoiceChannelResponse](#deletevoicechannelresponse)

### GetVoiceChannel



```js
amazonaws_pinpoint.GetVoiceChannel({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`

#### Output
* output [GetVoiceChannelResponse](#getvoicechannelresponse)

### UpdateVoiceChannel



```js
amazonaws_pinpoint.UpdateVoiceChannel({
  "application-id": "",
  "VoiceChannelRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * VoiceChannelRequest **required** `object`: Specifies the status and settings of the voice channel for an application.
    * Enabled

#### Output
* output [UpdateVoiceChannelResponse](#updatevoicechannelresponse)

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
  * EndpointBatchRequest **required** `object`: Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
    * Item
      * items [EndpointBatchItem](#endpointbatchitem)

#### Output
*Output schema unknown*

### DeleteEndpoint



```js
amazonaws_pinpoint.DeleteEndpoint({
  "application-id": "",
  "endpoint-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * endpoint-id **required** `string`

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
  * EndpointRequest **required** `object`: Specifies the channel type and other settings for an endpoint.
    * Address
    * Attributes
    * ChannelType
    * Demographic
      * AppVersion
      * Locale
      * Make
      * Model
      * ModelVersion
      * Platform
      * PlatformVersion
      * Timezone
    * EffectiveDate
    * EndpointStatus
    * Location
      * City
      * Country
      * Latitude
      * Longitude
      * PostalCode
      * Region
    * Metrics
    * OptOut
    * RequestId
    * User
      * UserAttributes
      * UserId

#### Output
*Output schema unknown*

### PutEvents



```js
amazonaws_pinpoint.PutEvents({
  "application-id": "",
  "EventsRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * EventsRequest **required** `object`: Specifies a batch of events to process.
    * BatchItem

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
  * WriteEventStream **required** `object`: Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
    * DestinationStreamArn
    * RoleArn

#### Output
* output [PutEventStreamResponse](#puteventstreamresponse)

### GetExportJobs



```js
amazonaws_pinpoint.GetExportJobs({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * page-size `string`
  * token `string`

#### Output
* output [GetExportJobsResponse](#getexportjobsresponse)

### CreateExportJob



```js
amazonaws_pinpoint.CreateExportJob({
  "application-id": "",
  "ExportJobRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * ExportJobRequest **required** `object`: Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
    * RoleArn
    * S3UrlPrefix
    * SegmentId
    * SegmentVersion

#### Output
*Output schema unknown*

### GetExportJob



```js
amazonaws_pinpoint.GetExportJob({
  "application-id": "",
  "job-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * job-id **required** `string`

#### Output
* output [GetExportJobResponse](#getexportjobresponse)

### GetImportJobs



```js
amazonaws_pinpoint.GetImportJobs({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * page-size `string`
  * token `string`

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
  * ImportJobRequest **required** `object`: Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
    * DefineSegment
    * ExternalId
    * Format
    * RegisterEndpoints
    * RoleArn
    * S3Url
    * SegmentId
    * SegmentName

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

### ListJourneys



```js
amazonaws_pinpoint.ListJourneys({
  "application-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * page-size `string`
  * token `string`

#### Output
* output [ListJourneysResponse](#listjourneysresponse)

### CreateJourney



```js
amazonaws_pinpoint.CreateJourney({
  "application-id": "",
  "WriteJourneyRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * WriteJourneyRequest **required** `object`: Specifies the configuration and other settings for a journey.
    * Activities
    * CreationDate
    * LastModifiedDate
    * Limits
      * DailyCap
      * EndpointReentryCap
      * MessagesPerSecond
    * LocalTime
    * Name
    * QuietTime
      * End
      * Start
    * RefreshFrequency
    * Schedule
      * EndTime
      * StartTime
      * Timezone
    * StartActivity
    * StartCondition
      * Description
      * EventStartCondition [EventStartCondition](#eventstartcondition)
      * SegmentStartCondition
        * SegmentId **required**
    * State

#### Output
*Output schema unknown*

### DeleteJourney



```js
amazonaws_pinpoint.DeleteJourney({
  "application-id": "",
  "journey-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-id **required** `string`

#### Output
* output [DeleteJourneyResponse](#deletejourneyresponse)

### GetJourney



```js
amazonaws_pinpoint.GetJourney({
  "application-id": "",
  "journey-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-id **required** `string`

#### Output
* output [GetJourneyResponse](#getjourneyresponse)

### UpdateJourney



```js
amazonaws_pinpoint.UpdateJourney({
  "application-id": "",
  "journey-id": "",
  "WriteJourneyRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-id **required** `string`
  * WriteJourneyRequest **required** `object`: Specifies the configuration and other settings for a journey.
    * Activities
    * CreationDate
    * LastModifiedDate
    * Limits
      * DailyCap
      * EndpointReentryCap
      * MessagesPerSecond
    * LocalTime
    * Name
    * QuietTime
      * End
      * Start
    * RefreshFrequency
    * Schedule
      * EndTime
      * StartTime
      * Timezone
    * StartActivity
    * StartCondition
      * Description
      * EventStartCondition [EventStartCondition](#eventstartcondition)
      * SegmentStartCondition
        * SegmentId **required**
    * State

#### Output
* output [UpdateJourneyResponse](#updatejourneyresponse)

### GetJourneyExecutionActivityMetrics



```js
amazonaws_pinpoint.GetJourneyExecutionActivityMetrics({
  "application-id": "",
  "journey-activity-id": "",
  "journey-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-activity-id **required** `string`
  * journey-id **required** `string`
  * next-token `string`
  * page-size `string`

#### Output
* output [GetJourneyExecutionActivityMetricsResponse](#getjourneyexecutionactivitymetricsresponse)

### GetJourneyExecutionMetrics



```js
amazonaws_pinpoint.GetJourneyExecutionMetrics({
  "application-id": "",
  "journey-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-id **required** `string`
  * next-token `string`
  * page-size `string`

#### Output
* output [GetJourneyExecutionMetricsResponse](#getjourneyexecutionmetricsresponse)

### GetJourneyDateRangeKpi



```js
amazonaws_pinpoint.GetJourneyDateRangeKpi({
  "application-id": "",
  "journey-id": "",
  "kpi-name": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * end-time `string`
  * journey-id **required** `string`
  * kpi-name **required** `string`
  * next-token `string`
  * page-size `string`
  * start-time `string`

#### Output
* output [GetJourneyDateRangeKpiResponse](#getjourneydaterangekpiresponse)

### UpdateJourneyState



```js
amazonaws_pinpoint.UpdateJourneyState({
  "application-id": "",
  "journey-id": "",
  "JourneyStateRequest": {}
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * journey-id **required** `string`
  * JourneyStateRequest **required** `object`: Changes the status of a journey.
    * State

#### Output
* output [UpdateJourneyStateResponse](#updatejourneystateresponse)

### GetApplicationDateRangeKpi



```js
amazonaws_pinpoint.GetApplicationDateRangeKpi({
  "application-id": "",
  "kpi-name": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * end-time `string`
  * kpi-name **required** `string`
  * next-token `string`
  * page-size `string`
  * start-time `string`

#### Output
* output [GetApplicationDateRangeKpiResponse](#getapplicationdaterangekpiresponse)

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
  * MessageRequest **required** `object`: Specifies the configuration and other settings for a message.
    * Addresses
    * Context
    * Endpoints
    * MessageConfiguration
      * ADMMessage
        * Action
        * Body
        * ConsolidationKey
        * Data
        * ExpiresAfter
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * MD5
        * RawContent
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * Title
        * Url
      * APNSMessage
        * APNSPushType
        * Action
        * Badge
        * Body
        * Category
        * CollapseId
        * Data
        * MediaUrl
        * PreferredAuthenticationMethod
        * Priority
        * RawContent
        * SilentPush
        * Sound
        * Substitutions
        * ThreadId
        * TimeToLive
        * Title
        * Url
      * BaiduMessage
        * Action
        * Body
        * Data
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * RawContent
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * TimeToLive
        * Title
        * Url
      * DefaultMessage
        * Body
        * Substitutions
      * DefaultPushNotificationMessage
        * Action
        * Body
        * Data
        * SilentPush
        * Substitutions
        * Title
        * Url
      * EmailMessage
        * Body
        * FeedbackForwardingAddress
        * FromAddress
        * RawEmail
          * Data
        * ReplyToAddresses
          * items [__string](#__string)
        * SimpleEmail
          * HtmlPart
          * Subject
          * TextPart
        * Substitutions
      * GCMMessage
        * Action
        * Body
        * CollapseKey
        * Data
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * Priority
        * RawContent
        * RestrictedPackageName
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * TimeToLive
        * Title
        * Url
      * SMSMessage
        * Body
        * Keyword
        * MediaUrl
        * MessageType
        * OriginationNumber
        * SenderId
        * Substitutions
      * VoiceMessage
        * Body
        * LanguageCode
        * OriginationNumber
        * Substitutions
        * VoiceId
    * TemplateConfiguration
      * EmailTemplate
        * Name
        * Version
      * PushTemplate
        * Name
        * Version
      * SMSTemplate
        * Name
        * Version
      * VoiceTemplate
        * Name
        * Version
    * TraceId

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
  * page-size `string`
  * token `string`

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
  * WriteSegmentRequest **required** `object`: Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
    * tags
    * Dimensions
      * Attributes
      * Behavior
        * Recency
          * Duration **required**
          * RecencyType **required**
      * Demographic
        * AppVersion
          * DimensionType
          * Values **required**
        * Channel
          * DimensionType
          * Values **required**
        * DeviceType
          * DimensionType
          * Values **required**
        * Make
          * DimensionType
          * Values **required**
        * Model
          * DimensionType
          * Values **required**
        * Platform
          * DimensionType
          * Values **required**
      * Location
        * Country
          * DimensionType
          * Values **required**
        * GPSPoint
          * Coordinates **required**
          * RangeInKilometers
      * Metrics
      * UserAttributes
    * Name
    * SegmentGroups
      * Groups
        * items [SegmentGroup](#segmentgroup)
      * Include

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
  * WriteSegmentRequest **required** `object`: Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
    * tags
    * Dimensions
      * Attributes
      * Behavior
        * Recency
          * Duration **required**
          * RecencyType **required**
      * Demographic
        * AppVersion
          * DimensionType
          * Values **required**
        * Channel
          * DimensionType
          * Values **required**
        * DeviceType
          * DimensionType
          * Values **required**
        * Make
          * DimensionType
          * Values **required**
        * Model
          * DimensionType
          * Values **required**
        * Platform
          * DimensionType
          * Values **required**
      * Location
        * Country
          * DimensionType
          * Values **required**
        * GPSPoint
          * Coordinates **required**
          * RangeInKilometers
      * Metrics
      * UserAttributes
    * Name
    * SegmentGroups
      * Groups
        * items [SegmentGroup](#segmentgroup)
      * Include

#### Output
* output [UpdateSegmentResponse](#updatesegmentresponse)

### GetSegmentExportJobs



```js
amazonaws_pinpoint.GetSegmentExportJobs({
  "application-id": "",
  "segment-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * page-size `string`
  * segment-id **required** `string`
  * token `string`

#### Output
* output [GetSegmentExportJobsResponse](#getsegmentexportjobsresponse)

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
  * page-size `string`
  * segment-id **required** `string`
  * token `string`

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
  * page-size `string`
  * segment-id **required** `string`
  * token `string`

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
  * WriteApplicationSettingsRequest **required** `object`: Specifies the default settings for an application.
    * CampaignHook
      * LambdaFunctionName
      * Mode
      * WebUrl
    * CloudWatchMetricsEnabled
    * EventTaggingEnabled [__boolean](#__boolean)
    * Limits
      * Daily
      * MaximumDuration
      * MessagesPerSecond
      * Total
    * QuietTime
      * End
      * Start

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
  * SendUsersMessageRequest **required** `object`: Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
    * Context
    * MessageConfiguration
      * ADMMessage
        * Action
        * Body
        * ConsolidationKey
        * Data
        * ExpiresAfter
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * MD5
        * RawContent
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * Title
        * Url
      * APNSMessage
        * APNSPushType
        * Action
        * Badge
        * Body
        * Category
        * CollapseId
        * Data
        * MediaUrl
        * PreferredAuthenticationMethod
        * Priority
        * RawContent
        * SilentPush
        * Sound
        * Substitutions
        * ThreadId
        * TimeToLive
        * Title
        * Url
      * BaiduMessage
        * Action
        * Body
        * Data
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * RawContent
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * TimeToLive
        * Title
        * Url
      * DefaultMessage
        * Body
        * Substitutions
      * DefaultPushNotificationMessage
        * Action
        * Body
        * Data
        * SilentPush
        * Substitutions
        * Title
        * Url
      * EmailMessage
        * Body
        * FeedbackForwardingAddress
        * FromAddress
        * RawEmail
          * Data
        * ReplyToAddresses
          * items [__string](#__string)
        * SimpleEmail
          * HtmlPart
          * Subject
          * TextPart
        * Substitutions
      * GCMMessage
        * Action
        * Body
        * CollapseKey
        * Data
        * IconReference
        * ImageIconUrl
        * ImageUrl
        * Priority
        * RawContent
        * RestrictedPackageName
        * SilentPush
        * SmallImageIconUrl
        * Sound
        * Substitutions
        * TimeToLive
        * Title
        * Url
      * SMSMessage
        * Body
        * Keyword
        * MediaUrl
        * MessageType
        * OriginationNumber
        * SenderId
        * Substitutions
      * VoiceMessage
        * Body
        * LanguageCode
        * OriginationNumber
        * Substitutions
        * VoiceId
    * TemplateConfiguration
      * EmailTemplate
        * Name
        * Version
      * PushTemplate
        * Name
        * Version
      * SMSTemplate
        * Name
        * Version
      * VoiceTemplate
        * Name
        * Version
    * TraceId
    * Users

#### Output
* output [SendUsersMessagesResponse](#sendusersmessagesresponse)

### DeleteUserEndpoints



```js
amazonaws_pinpoint.DeleteUserEndpoints({
  "application-id": "",
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * user-id **required** `string`

#### Output
*Output schema unknown*

### GetUserEndpoints



```js
amazonaws_pinpoint.GetUserEndpoints({
  "application-id": "",
  "user-id": ""
}, context)
```

#### Input
* input `object`
  * application-id **required** `string`
  * user-id **required** `string`

#### Output
* output [GetUserEndpointsResponse](#getuserendpointsresponse)

### PhoneNumberValidate



```js
amazonaws_pinpoint.PhoneNumberValidate({
  "NumberValidateRequest": {}
}, context)
```

#### Input
* input `object`
  * NumberValidateRequest **required** `object`: Specifies a phone number to validate and retrieve information about.
    * IsoCountryCode
    * PhoneNumber

#### Output
* output [PhoneNumberValidateResponse](#phonenumbervalidateresponse)

### GetRecommenderConfigurations



```js
amazonaws_pinpoint.GetRecommenderConfigurations({}, context)
```

#### Input
* input `object`
  * page-size `string`
  * token `string`

#### Output
* output [GetRecommenderConfigurationsResponse](#getrecommenderconfigurationsresponse)

### CreateRecommenderConfiguration



```js
amazonaws_pinpoint.CreateRecommenderConfiguration({
  "CreateRecommenderConfiguration": {}
}, context)
```

#### Input
* input `object`
  * CreateRecommenderConfiguration **required** `object`: Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
    * Attributes
    * Description
    * Name
    * RecommendationProviderIdType
    * RecommendationProviderRoleArn
    * RecommendationProviderUri
    * RecommendationTransformerUri
    * RecommendationsDisplayName
    * RecommendationsPerMessage

#### Output
*Output schema unknown*

### DeleteRecommenderConfiguration



```js
amazonaws_pinpoint.DeleteRecommenderConfiguration({
  "recommender-id": ""
}, context)
```

#### Input
* input `object`
  * recommender-id **required** `string`

#### Output
* output [DeleteRecommenderConfigurationResponse](#deleterecommenderconfigurationresponse)

### GetRecommenderConfiguration



```js
amazonaws_pinpoint.GetRecommenderConfiguration({
  "recommender-id": ""
}, context)
```

#### Input
* input `object`
  * recommender-id **required** `string`

#### Output
* output [GetRecommenderConfigurationResponse](#getrecommenderconfigurationresponse)

### UpdateRecommenderConfiguration



```js
amazonaws_pinpoint.UpdateRecommenderConfiguration({
  "recommender-id": "",
  "UpdateRecommenderConfiguration": {}
}, context)
```

#### Input
* input `object`
  * recommender-id **required** `string`
  * UpdateRecommenderConfiguration **required** `object`: Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
    * Attributes
    * Description
    * Name
    * RecommendationProviderIdType
    * RecommendationProviderRoleArn
    * RecommendationProviderUri
    * RecommendationTransformerUri
    * RecommendationsDisplayName
    * RecommendationsPerMessage

#### Output
* output [UpdateRecommenderConfigurationResponse](#updaterecommenderconfigurationresponse)

### ListTagsForResource



```js
amazonaws_pinpoint.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_pinpoint.TagResource({
  "resource-arn": "",
  "TagsModel": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * TagsModel **required** `object`: Specifies the tags (keys and values) for an application, campaign, message template, or segment.
    * tags

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_pinpoint.UntagResource({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### ListTemplates



```js
amazonaws_pinpoint.ListTemplates({}, context)
```

#### Input
* input `object`
  * next-token `string`
  * page-size `string`
  * prefix `string`
  * template-type `string`

#### Output
* output [ListTemplatesResponse](#listtemplatesresponse)

### DeleteEmailTemplate



```js
amazonaws_pinpoint.DeleteEmailTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
*Output schema unknown*

### GetEmailTemplate



```js
amazonaws_pinpoint.GetEmailTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
* output [GetEmailTemplateResponse](#getemailtemplateresponse)

### CreateEmailTemplate



```js
amazonaws_pinpoint.CreateEmailTemplate({
  "template-name": "",
  "EmailTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * EmailTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
    * tags
    * DefaultSubstitutions
    * HtmlPart
    * RecommenderId
    * Subject
    * TemplateDescription
    * TextPart

#### Output
*Output schema unknown*

### UpdateEmailTemplate



```js
amazonaws_pinpoint.UpdateEmailTemplate({
  "template-name": "",
  "EmailTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * create-new-version `boolean`
  * template-name **required** `string`
  * version `string`
  * EmailTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
    * tags
    * DefaultSubstitutions
    * HtmlPart
    * RecommenderId
    * Subject
    * TemplateDescription
    * TextPart

#### Output
*Output schema unknown*

### DeletePushTemplate



```js
amazonaws_pinpoint.DeletePushTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
*Output schema unknown*

### GetPushTemplate



```js
amazonaws_pinpoint.GetPushTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
* output [GetPushTemplateResponse](#getpushtemplateresponse)

### CreatePushTemplate



```js
amazonaws_pinpoint.CreatePushTemplate({
  "template-name": "",
  "PushNotificationTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * PushNotificationTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
    * tags
    * ADM
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * APNS
      * Action
      * Body
      * MediaUrl
      * RawContent
      * Sound
      * Title
      * Url
    * Baidu
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * Default
      * Action
      * Body
      * Sound
      * Title
      * Url
    * DefaultSubstitutions
    * GCM
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * RecommenderId
    * TemplateDescription

#### Output
*Output schema unknown*

### UpdatePushTemplate



```js
amazonaws_pinpoint.UpdatePushTemplate({
  "template-name": "",
  "PushNotificationTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * create-new-version `boolean`
  * template-name **required** `string`
  * version `string`
  * PushNotificationTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
    * tags
    * ADM
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * APNS
      * Action
      * Body
      * MediaUrl
      * RawContent
      * Sound
      * Title
      * Url
    * Baidu
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * Default
      * Action
      * Body
      * Sound
      * Title
      * Url
    * DefaultSubstitutions
    * GCM
      * Action
      * Body
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SmallImageIconUrl
      * Sound
      * Title
      * Url
    * RecommenderId
    * TemplateDescription

#### Output
*Output schema unknown*

### DeleteSmsTemplate



```js
amazonaws_pinpoint.DeleteSmsTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
*Output schema unknown*

### GetSmsTemplate



```js
amazonaws_pinpoint.GetSmsTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
* output [GetSmsTemplateResponse](#getsmstemplateresponse)

### CreateSmsTemplate



```js
amazonaws_pinpoint.CreateSmsTemplate({
  "template-name": "",
  "SMSTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * SMSTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
    * tags
    * Body
    * DefaultSubstitutions
    * RecommenderId
    * TemplateDescription

#### Output
*Output schema unknown*

### UpdateSmsTemplate



```js
amazonaws_pinpoint.UpdateSmsTemplate({
  "template-name": "",
  "SMSTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * create-new-version `boolean`
  * template-name **required** `string`
  * version `string`
  * SMSTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
    * tags
    * Body
    * DefaultSubstitutions
    * RecommenderId
    * TemplateDescription

#### Output
*Output schema unknown*

### DeleteVoiceTemplate



```js
amazonaws_pinpoint.DeleteVoiceTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
*Output schema unknown*

### GetVoiceTemplate



```js
amazonaws_pinpoint.GetVoiceTemplate({
  "template-name": ""
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * version `string`

#### Output
* output [GetVoiceTemplateResponse](#getvoicetemplateresponse)

### CreateVoiceTemplate



```js
amazonaws_pinpoint.CreateVoiceTemplate({
  "template-name": "",
  "VoiceTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * VoiceTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
    * tags
    * Body
    * DefaultSubstitutions
    * LanguageCode
    * TemplateDescription
    * VoiceId

#### Output
*Output schema unknown*

### UpdateVoiceTemplate



```js
amazonaws_pinpoint.UpdateVoiceTemplate({
  "template-name": "",
  "VoiceTemplateRequest": {}
}, context)
```

#### Input
* input `object`
  * create-new-version `boolean`
  * template-name **required** `string`
  * version `string`
  * VoiceTemplateRequest **required** `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
    * tags
    * Body
    * DefaultSubstitutions
    * LanguageCode
    * TemplateDescription
    * VoiceId

#### Output
*Output schema unknown*

### UpdateTemplateActiveVersion



```js
amazonaws_pinpoint.UpdateTemplateActiveVersion({
  "template-name": "",
  "template-type": "",
  "TemplateActiveVersionRequest": {}
}, context)
```

#### Input
* input `object`
  * template-name **required** `string`
  * template-type **required** `string`
  * TemplateActiveVersionRequest **required** `object`: Specifies which version of a message template to use as the active version of the template.
    * Version

#### Output
* output [UpdateTemplateActiveVersionResponse](#updatetemplateactiveversionresponse)

### ListTemplateVersions



```js
amazonaws_pinpoint.ListTemplateVersions({
  "template-name": "",
  "template-type": ""
}, context)
```

#### Input
* input `object`
  * next-token `string`
  * page-size `string`
  * template-name **required** `string`
  * template-type **required** `string`

#### Output
* output [ListTemplateVersionsResponse](#listtemplateversionsresponse)



## Definitions

### ADMChannelRequest
* ADMChannelRequest `object`: Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
  * ClientId **required**
  * ClientSecret **required**
  * Enabled

### ADMChannelResponse
* ADMChannelResponse `object`: Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
  * ApplicationId
  * CreationDate
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### ADMMessage
* ADMMessage `object`: Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
  * Action
  * Body
  * ConsolidationKey
  * Data
  * ExpiresAfter
  * IconReference
  * ImageIconUrl
  * ImageUrl
  * MD5
  * RawContent
  * SilentPush
  * SmallImageIconUrl
  * Sound
  * Substitutions
  * Title
  * Url

### APNSChannelRequest
* APNSChannelRequest `object`: Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
  * BundleId
  * Certificate
  * DefaultAuthenticationMethod
  * Enabled
  * PrivateKey
  * TeamId
  * TokenKey
  * TokenKeyId

### APNSChannelResponse
* APNSChannelResponse `object`: Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
  * ApplicationId
  * CreationDate
  * DefaultAuthenticationMethod
  * Enabled
  * HasCredential
  * HasTokenKey
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### APNSMessage
* APNSMessage `object`: Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
  * APNSPushType
  * Action
  * Badge
  * Body
  * Category
  * CollapseId
  * Data
  * MediaUrl
  * PreferredAuthenticationMethod
  * Priority
  * RawContent
  * SilentPush
  * Sound
  * Substitutions
  * ThreadId
  * TimeToLive
  * Title
  * Url

### APNSPushNotificationTemplate
* APNSPushNotificationTemplate `object`: Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
  * Action
  * Body
  * MediaUrl
  * RawContent
  * Sound
  * Title
  * Url

### APNSSandboxChannelRequest
* APNSSandboxChannelRequest `object`: Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
  * BundleId
  * Certificate
  * DefaultAuthenticationMethod
  * Enabled
  * PrivateKey
  * TeamId
  * TokenKey
  * TokenKeyId

### APNSSandboxChannelResponse
* APNSSandboxChannelResponse `object`: Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
  * ApplicationId
  * CreationDate
  * DefaultAuthenticationMethod
  * Enabled
  * HasCredential
  * HasTokenKey
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### APNSVoipChannelRequest
* APNSVoipChannelRequest `object`: Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
  * BundleId
  * Certificate
  * DefaultAuthenticationMethod
  * Enabled
  * PrivateKey
  * TeamId
  * TokenKey
  * TokenKeyId

### APNSVoipChannelResponse
* APNSVoipChannelResponse `object`: Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
  * ApplicationId
  * CreationDate
  * DefaultAuthenticationMethod
  * Enabled
  * HasCredential
  * HasTokenKey
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### APNSVoipSandboxChannelRequest
* APNSVoipSandboxChannelRequest `object`: Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
  * BundleId
  * Certificate
  * DefaultAuthenticationMethod
  * Enabled
  * PrivateKey
  * TeamId
  * TokenKey
  * TokenKeyId

### APNSVoipSandboxChannelResponse
* APNSVoipSandboxChannelResponse `object`: Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
  * ApplicationId
  * CreationDate
  * DefaultAuthenticationMethod
  * Enabled
  * HasCredential
  * HasTokenKey
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### Action
* Action `string` (values: OPEN_APP, DEEP_LINK, URL)

### ActivitiesResponse
* ActivitiesResponse `object`: Provides information about the activities that were performed by a campaign.
  * Item **required**
    * items [ActivityResponse](#activityresponse)
  * NextToken

### Activity
* Activity `object`: Specifies the configuration and other settings for an activity in a journey.
  * CUSTOM
    * DeliveryUri
    * EndpointTypes
      * items [__EndpointTypesElement](#__endpointtypeselement)
    * MessageConfig
      * Data
    * NextActivity
    * TemplateName
    * TemplateVersion
  * ConditionalSplit
    * Condition
      * Conditions
        * items [SimpleCondition](#simplecondition)
      * Operator
    * EvaluationWaitTime
      * WaitFor
      * WaitUntil
    * FalseActivity
    * TrueActivity
  * Description
  * EMAIL
    * MessageConfig
      * FromAddress
    * NextActivity
    * TemplateName
    * TemplateVersion
  * Holdout
    * NextActivity
    * Percentage **required**
  * MultiCondition
    * Branches
      * items [MultiConditionalBranch](#multiconditionalbranch)
    * DefaultActivity
    * EvaluationWaitTime
      * WaitFor
      * WaitUntil
  * PUSH
    * MessageConfig
      * TimeToLive
    * NextActivity
    * TemplateName
    * TemplateVersion
  * RandomSplit
    * Branches
      * items [RandomSplitEntry](#randomsplitentry)
  * SMS
    * MessageConfig
      * MessageType
      * SenderId
    * NextActivity
    * TemplateName
    * TemplateVersion
  * Wait
    * NextActivity
    * WaitTime
      * WaitFor
      * WaitUntil

### ActivityResponse
* ActivityResponse `object`: Provides information about an activity that was performed by a campaign.
  * ApplicationId **required**
  * CampaignId **required**
  * End
  * Id **required**
  * Result
  * ScheduledStart
  * Start
  * State
  * SuccessfulEndpointCount
  * TimezonesCompletedCount
  * TimezonesTotalCount
  * TotalEndpointCount
  * TreatmentId

### AddressConfiguration
* AddressConfiguration `object`: Specifies address-based configuration settings for a message that's sent directly to an endpoint.
  * BodyOverride
  * ChannelType
  * Context
  * RawContent
  * Substitutions
  * TitleOverride

### AndroidPushNotificationTemplate
* AndroidPushNotificationTemplate `object`: Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
  * Action
  * Body
  * ImageIconUrl
  * ImageUrl
  * RawContent
  * SmallImageIconUrl
  * Sound
  * Title
  * Url

### ApplicationDateRangeKpiResponse
* ApplicationDateRangeKpiResponse `object`: Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
  * ApplicationId **required**
  * EndTime **required**
  * KpiName **required**
  * KpiResult **required**
    * Rows **required**
      * items [ResultRow](#resultrow)
  * NextToken
  * StartTime **required**

### ApplicationResponse
* ApplicationResponse `object`: Provides information about an application.
  * tags
  * Arn **required**
  * Id **required**
  * Name **required**

### ApplicationSettingsResource
* ApplicationSettingsResource `object`: Provides information about an application, including the default settings for an application.
  * ApplicationId **required**
  * CampaignHook
    * LambdaFunctionName
    * Mode
    * WebUrl
  * LastModifiedDate
  * Limits
    * Daily
    * MaximumDuration
    * MessagesPerSecond
    * Total
  * QuietTime
    * End
    * Start

### ApplicationsResponse
* ApplicationsResponse `object`: Provides information about all of your applications.
  * Item
    * items [ApplicationResponse](#applicationresponse)
  * NextToken

### AttributeDimension
* AttributeDimension `object`: Specifies attribute-based criteria for including or excluding endpoints from a segment.
  * AttributeType
  * Values **required**
    * items [__string](#__string)

### AttributeType
* AttributeType `string` (values: INCLUSIVE, EXCLUSIVE)

### AttributesResource
* AttributesResource `object`: Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
  * ApplicationId **required**
  * AttributeType **required**
  * Attributes
    * items [__string](#__string)

### BadRequestException


### BaiduChannelRequest
* BaiduChannelRequest `object`: Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
  * ApiKey **required**
  * Enabled
  * SecretKey **required**

### BaiduChannelResponse
* BaiduChannelResponse `object`: Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
  * ApplicationId
  * CreationDate
  * Credential **required**
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### BaiduMessage
* BaiduMessage `object`: Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
  * Action
  * Body
  * Data
  * IconReference
  * ImageIconUrl
  * ImageUrl
  * RawContent
  * SilentPush
  * SmallImageIconUrl
  * Sound
  * Substitutions
  * TimeToLive
  * Title
  * Url

### BaseKpiResult
* BaseKpiResult `object`: Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
  * Rows **required**
    * items [ResultRow](#resultrow)

### CampaignCustomMessage
* CampaignCustomMessage `object`: Specifies the contents of a message that's sent through a custom channel to recipients of a campaign.
  * Data

### CampaignDateRangeKpiResponse
* CampaignDateRangeKpiResponse `object`: Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
  * ApplicationId **required**
  * CampaignId **required**
  * EndTime **required**
  * KpiName **required**
  * KpiResult **required**
    * Rows **required**
      * items [ResultRow](#resultrow)
  * NextToken
  * StartTime **required**

### CampaignEmailMessage
* CampaignEmailMessage `object`: Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
  * Body
  * FromAddress
  * HtmlBody
  * Title

### CampaignEventFilter
* CampaignEventFilter `object`: Specifies the settings for events that cause a campaign to be sent.
  * Dimensions **required**
    * Attributes
    * EventType
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Metrics
  * FilterType **required**

### CampaignHook
* CampaignHook `object`: Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
  * LambdaFunctionName
  * Mode
  * WebUrl

### CampaignLimits
* CampaignLimits `object`: For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send.
  * Daily
  * MaximumDuration
  * MessagesPerSecond
  * Total

### CampaignResponse
* CampaignResponse `object`: Provides information about the status, configuration, and other settings for a campaign.
  * tags
  * AdditionalTreatments
    * items [TreatmentResource](#treatmentresource)
  * ApplicationId **required**
  * Arn **required**
  * CreationDate **required**
  * CustomDeliveryConfiguration
    * DeliveryUri **required**
    * EndpointTypes
      * items [__EndpointTypesElement](#__endpointtypeselement)
  * DefaultState
    * CampaignStatus
  * Description
  * HoldoutPercent
  * Hook
    * LambdaFunctionName
    * Mode
    * WebUrl
  * Id **required**
  * IsPaused
  * LastModifiedDate **required**
  * Limits
    * Daily
    * MaximumDuration
    * MessagesPerSecond
    * Total
  * MessageConfiguration
    * ADMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * APNSMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * CustomMessage
      * Data
    * DefaultMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * EmailMessage
      * Body
      * FromAddress
      * HtmlBody
      * Title
    * GCMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * MessageType
      * SenderId
  * Name
  * Schedule
    * EndTime
    * EventFilter
      * Dimensions **required**
        * Attributes
        * EventType
          * DimensionType
          * Values **required**
        * Metrics
      * FilterType **required**
    * Frequency
    * IsLocalTime
    * QuietTime
      * End
      * Start
    * StartTime **required**
    * Timezone
  * SegmentId **required**
  * SegmentVersion **required**
  * State
    * CampaignStatus
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TreatmentDescription
  * TreatmentName
  * Version

### CampaignSmsMessage
* CampaignSmsMessage `object`: Specifies the content and settings for an SMS message that's sent to recipients of a campaign.
  * Body
  * MessageType
  * SenderId

### CampaignState
* CampaignState `object`: Provides information about the status of a campaign.
  * CampaignStatus

### CampaignStatus
* CampaignStatus `string` (values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED, DELETED, INVALID)

### CampaignsResponse
* CampaignsResponse `object`: Provides information about the configuration and other settings for all the campaigns that are associated with an application.
  * Item **required**
    * items [CampaignResponse](#campaignresponse)
  * NextToken

### ChannelResponse
* ChannelResponse `object`: Provides information about the general settings and status of a channel for an application.
  * ApplicationId
  * CreationDate
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Version

### ChannelType
* ChannelType `string` (values: PUSH, GCM, APNS, APNS_SANDBOX, APNS_VOIP, APNS_VOIP_SANDBOX, ADM, SMS, VOICE, EMAIL, BAIDU, CUSTOM)

### ChannelsResponse
* ChannelsResponse `object`: Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
  * Channels **required**

### Condition
* Condition `object`: Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
  * Conditions
    * items [SimpleCondition](#simplecondition)
  * Operator

### ConditionalSplitActivity
* ConditionalSplitActivity `object`: <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
  * Condition
    * Conditions
      * items [SimpleCondition](#simplecondition)
    * Operator
  * EvaluationWaitTime
    * WaitFor
    * WaitUntil
  * FalseActivity
  * TrueActivity

### ConflictException


### CreateAppRequest
* CreateAppRequest `object`
  * CreateApplicationRequest **required** [CreateApplicationRequest](#createapplicationrequest)

### CreateAppResponse
* CreateAppResponse `object`
  * ApplicationResponse **required** [ApplicationResponse](#applicationresponse)

### CreateApplicationRequest
* CreateApplicationRequest `object`: Specifies the display name of an application and the tags to associate with the application.
  * tags
  * Name **required**

### CreateCampaignRequest
* CreateCampaignRequest `object`
  * WriteCampaignRequest **required** [WriteCampaignRequest](#writecampaignrequest)

### CreateCampaignResponse
* CreateCampaignResponse `object`
  * CampaignResponse **required** [CampaignResponse](#campaignresponse)

### CreateEmailTemplateRequest
* CreateEmailTemplateRequest `object`
  * EmailTemplateRequest **required** [EmailTemplateRequest](#emailtemplaterequest)

### CreateEmailTemplateResponse
* CreateEmailTemplateResponse `object`
  * CreateTemplateMessageBody **required** [CreateTemplateMessageBody](#createtemplatemessagebody)

### CreateExportJobRequest
* CreateExportJobRequest `object`
  * ExportJobRequest **required** [ExportJobRequest](#exportjobrequest)

### CreateExportJobResponse
* CreateExportJobResponse `object`
  * ExportJobResponse **required** [ExportJobResponse](#exportjobresponse)

### CreateImportJobRequest
* CreateImportJobRequest `object`
  * ImportJobRequest **required** [ImportJobRequest](#importjobrequest)

### CreateImportJobResponse
* CreateImportJobResponse `object`
  * ImportJobResponse **required** [ImportJobResponse](#importjobresponse)

### CreateJourneyRequest
* CreateJourneyRequest `object`
  * WriteJourneyRequest **required** [WriteJourneyRequest](#writejourneyrequest)

### CreateJourneyResponse
* CreateJourneyResponse `object`
  * JourneyResponse **required** [JourneyResponse](#journeyresponse)

### CreatePushTemplateRequest
* CreatePushTemplateRequest `object`
  * PushNotificationTemplateRequest **required** [PushNotificationTemplateRequest](#pushnotificationtemplaterequest)

### CreatePushTemplateResponse
* CreatePushTemplateResponse `object`
  * CreateTemplateMessageBody **required** [CreateTemplateMessageBody](#createtemplatemessagebody)

### CreateRecommenderConfiguration
* CreateRecommenderConfiguration `object`: Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
  * Attributes
  * Description
  * Name
  * RecommendationProviderIdType
  * RecommendationProviderRoleArn **required**
  * RecommendationProviderUri **required**
  * RecommendationTransformerUri
  * RecommendationsDisplayName
  * RecommendationsPerMessage

### CreateRecommenderConfigurationRequest
* CreateRecommenderConfigurationRequest `object`
  * CreateRecommenderConfiguration **required** [CreateRecommenderConfiguration](#createrecommenderconfiguration)

### CreateRecommenderConfigurationResponse
* CreateRecommenderConfigurationResponse `object`
  * RecommenderConfigurationResponse **required** [RecommenderConfigurationResponse](#recommenderconfigurationresponse)

### CreateSegmentRequest
* CreateSegmentRequest `object`
  * WriteSegmentRequest **required** [WriteSegmentRequest](#writesegmentrequest)

### CreateSegmentResponse
* CreateSegmentResponse `object`
  * SegmentResponse **required** [SegmentResponse](#segmentresponse)

### CreateSmsTemplateRequest
* CreateSmsTemplateRequest `object`
  * SMSTemplateRequest **required** [SMSTemplateRequest](#smstemplaterequest)

### CreateSmsTemplateResponse
* CreateSmsTemplateResponse `object`
  * CreateTemplateMessageBody **required** [CreateTemplateMessageBody](#createtemplatemessagebody)

### CreateTemplateMessageBody
* CreateTemplateMessageBody `object`: Provides information about a request to create a message template.
  * Arn
  * Message
  * RequestID

### CreateVoiceTemplateRequest
* CreateVoiceTemplateRequest `object`
  * VoiceTemplateRequest **required** [VoiceTemplateRequest](#voicetemplaterequest)

### CreateVoiceTemplateResponse
* CreateVoiceTemplateResponse `object`
  * CreateTemplateMessageBody **required** [CreateTemplateMessageBody](#createtemplatemessagebody)

### CustomDeliveryConfiguration
* CustomDeliveryConfiguration `object`: Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
  * DeliveryUri **required**
  * EndpointTypes
    * items [__EndpointTypesElement](#__endpointtypeselement)

### CustomMessageActivity
* CustomMessageActivity `object`: The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants.
  * DeliveryUri
  * EndpointTypes
    * items [__EndpointTypesElement](#__endpointtypeselement)
  * MessageConfig
    * Data
  * NextActivity
  * TemplateName
  * TemplateVersion

### DefaultMessage
* DefaultMessage `object`: Specifies the default message for all channels.
  * Body
  * Substitutions

### DefaultPushNotificationMessage
* DefaultPushNotificationMessage `object`: Specifies the default settings and content for a push notification that's sent directly to an endpoint.
  * Action
  * Body
  * Data
  * SilentPush
  * Substitutions
  * Title
  * Url

### DefaultPushNotificationTemplate
* DefaultPushNotificationTemplate `object`: Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
  * Action
  * Body
  * Sound
  * Title
  * Url

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

### DeleteEmailTemplateRequest
* DeleteEmailTemplateRequest `object`

### DeleteEmailTemplateResponse
* DeleteEmailTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### DeleteEndpointRequest
* DeleteEndpointRequest `object`

### DeleteEndpointResponse
* DeleteEndpointResponse `object`
  * EndpointResponse **required** [EndpointResponse](#endpointresponse)

### DeleteEventStreamRequest
* DeleteEventStreamRequest `object`

### DeleteEventStreamResponse
* DeleteEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### DeleteGcmChannelRequest
* DeleteGcmChannelRequest `object`

### DeleteGcmChannelResponse
* DeleteGcmChannelResponse `object`
  * GCMChannelResponse **required** [GCMChannelResponse](#gcmchannelresponse)

### DeleteJourneyRequest
* DeleteJourneyRequest `object`

### DeleteJourneyResponse
* DeleteJourneyResponse `object`
  * JourneyResponse **required** [JourneyResponse](#journeyresponse)

### DeletePushTemplateRequest
* DeletePushTemplateRequest `object`

### DeletePushTemplateResponse
* DeletePushTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### DeleteRecommenderConfigurationRequest
* DeleteRecommenderConfigurationRequest `object`

### DeleteRecommenderConfigurationResponse
* DeleteRecommenderConfigurationResponse `object`
  * RecommenderConfigurationResponse **required** [RecommenderConfigurationResponse](#recommenderconfigurationresponse)

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

### DeleteSmsTemplateRequest
* DeleteSmsTemplateRequest `object`

### DeleteSmsTemplateResponse
* DeleteSmsTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### DeleteUserEndpointsRequest
* DeleteUserEndpointsRequest `object`

### DeleteUserEndpointsResponse
* DeleteUserEndpointsResponse `object`
  * EndpointsResponse **required** [EndpointsResponse](#endpointsresponse)

### DeleteVoiceChannelRequest
* DeleteVoiceChannelRequest `object`

### DeleteVoiceChannelResponse
* DeleteVoiceChannelResponse `object`
  * VoiceChannelResponse **required** [VoiceChannelResponse](#voicechannelresponse)

### DeleteVoiceTemplateRequest
* DeleteVoiceTemplateRequest `object`

### DeleteVoiceTemplateResponse
* DeleteVoiceTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### DeliveryStatus
* DeliveryStatus `string` (values: SUCCESSFUL, THROTTLED, TEMPORARY_FAILURE, PERMANENT_FAILURE, UNKNOWN_FAILURE, OPT_OUT, DUPLICATE)

### DimensionType
* DimensionType `string` (values: INCLUSIVE, EXCLUSIVE)

### DirectMessageConfiguration
* DirectMessageConfiguration `object`: Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
  * ADMMessage
    * Action
    * Body
    * ConsolidationKey
    * Data
    * ExpiresAfter
    * IconReference
    * ImageIconUrl
    * ImageUrl
    * MD5
    * RawContent
    * SilentPush
    * SmallImageIconUrl
    * Sound
    * Substitutions
    * Title
    * Url
  * APNSMessage
    * APNSPushType
    * Action
    * Badge
    * Body
    * Category
    * CollapseId
    * Data
    * MediaUrl
    * PreferredAuthenticationMethod
    * Priority
    * RawContent
    * SilentPush
    * Sound
    * Substitutions
    * ThreadId
    * TimeToLive
    * Title
    * Url
  * BaiduMessage
    * Action
    * Body
    * Data
    * IconReference
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SilentPush
    * SmallImageIconUrl
    * Sound
    * Substitutions
    * TimeToLive
    * Title
    * Url
  * DefaultMessage
    * Body
    * Substitutions
  * DefaultPushNotificationMessage
    * Action
    * Body
    * Data
    * SilentPush
    * Substitutions
    * Title
    * Url
  * EmailMessage
    * Body
    * FeedbackForwardingAddress
    * FromAddress
    * RawEmail
      * Data
    * ReplyToAddresses
      * items [__string](#__string)
    * SimpleEmail
      * HtmlPart
        * Charset
        * Data
      * Subject
        * Charset
        * Data
      * TextPart
        * Charset
        * Data
    * Substitutions
  * GCMMessage
    * Action
    * Body
    * CollapseKey
    * Data
    * IconReference
    * ImageIconUrl
    * ImageUrl
    * Priority
    * RawContent
    * RestrictedPackageName
    * SilentPush
    * SmallImageIconUrl
    * Sound
    * Substitutions
    * TimeToLive
    * Title
    * Url
  * SMSMessage
    * Body
    * Keyword
    * MediaUrl
    * MessageType
    * OriginationNumber
    * SenderId
    * Substitutions
  * VoiceMessage
    * Body
    * LanguageCode
    * OriginationNumber
    * Substitutions
    * VoiceId

### Duration
* Duration `string` (values: HR_24, DAY_7, DAY_14, DAY_30)

### EmailChannelRequest
* EmailChannelRequest `object`: Specifies the status and settings of the email channel for an application.
  * ConfigurationSet
  * Enabled
  * FromAddress **required**
  * Identity **required**
  * RoleArn

### EmailChannelResponse
* EmailChannelResponse `object`: Provides information about the status and settings of the email channel for an application.
  * ApplicationId
  * ConfigurationSet
  * CreationDate
  * Enabled
  * FromAddress
  * HasCredential
  * Id
  * Identity
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * MessagesPerSecond
  * Platform **required**
  * RoleArn
  * Version

### EmailMessage
* EmailMessage `object`: Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
  * Body
  * FeedbackForwardingAddress
  * FromAddress
  * RawEmail
    * Data
  * ReplyToAddresses
    * items [__string](#__string)
  * SimpleEmail
    * HtmlPart
      * Charset
      * Data
    * Subject
      * Charset
      * Data
    * TextPart
      * Charset
      * Data
  * Substitutions

### EmailMessageActivity
* EmailMessageActivity `object`: Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
  * MessageConfig
    * FromAddress
  * NextActivity
  * TemplateName
  * TemplateVersion

### EmailTemplateRequest
* EmailTemplateRequest `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
  * tags
  * DefaultSubstitutions
  * HtmlPart
  * RecommenderId
  * Subject
  * TemplateDescription
  * TextPart

### EmailTemplateResponse
* EmailTemplateResponse `object`: Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
  * tags
  * Arn
  * CreationDate **required**
  * DefaultSubstitutions
  * HtmlPart
  * LastModifiedDate **required**
  * RecommenderId
  * Subject
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * TextPart
  * Version

### EndpointBatchItem
* EndpointBatchItem `object`: Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.
  * Address
  * Attributes
  * ChannelType
  * Demographic
    * AppVersion
    * Locale
    * Make
    * Model
    * ModelVersion
    * Platform
    * PlatformVersion
    * Timezone
  * EffectiveDate
  * EndpointStatus
  * Id
  * Location
    * City
    * Country
    * Latitude
    * Longitude
    * PostalCode
    * Region
  * Metrics
  * OptOut
  * RequestId
  * User
    * UserAttributes
    * UserId

### EndpointBatchRequest
* EndpointBatchRequest `object`: Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
  * Item **required**
    * items [EndpointBatchItem](#endpointbatchitem)

### EndpointDemographic
* EndpointDemographic `object`: Specifies demographic information about an endpoint, such as the applicable time zone and platform.
  * AppVersion
  * Locale
  * Make
  * Model
  * ModelVersion
  * Platform
  * PlatformVersion
  * Timezone

### EndpointItemResponse
* EndpointItemResponse `object`: Provides the status code and message that result from processing data for an endpoint.
  * Message
  * StatusCode

### EndpointLocation
* EndpointLocation `object`: Specifies geographic information about an endpoint.
  * City
  * Country
  * Latitude
  * Longitude
  * PostalCode
  * Region

### EndpointMessageResult
* EndpointMessageResult `object`: Provides information about the delivery status and results of sending a message directly to an endpoint.
  * Address
  * DeliveryStatus **required**
  * MessageId
  * StatusCode **required**
  * StatusMessage
  * UpdatedToken

### EndpointRequest
* EndpointRequest `object`: Specifies the channel type and other settings for an endpoint.
  * Address
  * Attributes
  * ChannelType
  * Demographic
    * AppVersion
    * Locale
    * Make
    * Model
    * ModelVersion
    * Platform
    * PlatformVersion
    * Timezone
  * EffectiveDate
  * EndpointStatus
  * Location
    * City
    * Country
    * Latitude
    * Longitude
    * PostalCode
    * Region
  * Metrics
  * OptOut
  * RequestId
  * User
    * UserAttributes
    * UserId

### EndpointResponse
* EndpointResponse `object`: Provides information about the channel type and other settings for an endpoint.
  * Address
  * ApplicationId
  * Attributes
  * ChannelType
  * CohortId
  * CreationDate
  * Demographic
    * AppVersion
    * Locale
    * Make
    * Model
    * ModelVersion
    * Platform
    * PlatformVersion
    * Timezone
  * EffectiveDate
  * EndpointStatus
  * Id
  * Location
    * City
    * Country
    * Latitude
    * Longitude
    * PostalCode
    * Region
  * Metrics
  * OptOut
  * RequestId
  * User
    * UserAttributes
    * UserId

### EndpointSendConfiguration
* EndpointSendConfiguration `object`: Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
  * BodyOverride
  * Context
  * RawContent
  * Substitutions
  * TitleOverride

### EndpointUser
* EndpointUser `object`: Specifies data for one or more attributes that describe the user who's associated with an endpoint.
  * UserAttributes
  * UserId

### EndpointsResponse
* EndpointsResponse `object`: Provides information about all the endpoints that are associated with a user ID.
  * Item **required**
    * items [EndpointResponse](#endpointresponse)

### Event
* Event `object`: Specifies information about an event that reports data to Amazon Pinpoint.
  * AppPackageName
  * AppTitle
  * AppVersionCode
  * Attributes
  * ClientSdkVersion
  * EventType **required**
  * Metrics
  * SdkName
  * Session
    * Duration
    * Id **required**
    * StartTimestamp **required**
    * StopTimestamp
  * Timestamp **required**

### EventCondition
* EventCondition `object`: Specifies the conditions to evaluate for an event that applies to an activity in a journey.
  * Dimensions
    * Attributes
    * EventType
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Metrics
  * MessageActivity

### EventDimensions
* EventDimensions `object`: Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
  * Attributes
  * EventType
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * Metrics

### EventFilter
* EventFilter `object`: Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
  * Dimensions **required**
    * Attributes
    * EventType
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Metrics
  * FilterType **required**

### EventItemResponse
* EventItemResponse `object`: Provides the status code and message that result from processing an event.
  * Message
  * StatusCode

### EventStartCondition
* EventStartCondition `object`: Specifies the settings for an event that causes a journey activity to start.
  * EventFilter [EventFilter](#eventfilter)
  * SegmentId [__string](#__string)

### EventStream
* EventStream `object`: Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
  * ApplicationId **required**
  * DestinationStreamArn **required**
  * ExternalId
  * LastModifiedDate
  * LastUpdatedBy
  * RoleArn **required**

### EventsBatch
* EventsBatch `object`: Specifies a batch of endpoints and events to process.
  * Endpoint **required**
    * Address
    * Attributes
    * ChannelType
    * Demographic
      * AppVersion
      * Locale
      * Make
      * Model
      * ModelVersion
      * Platform
      * PlatformVersion
      * Timezone
    * EffectiveDate
    * EndpointStatus
    * Location
      * City
      * Country
      * Latitude
      * Longitude
      * PostalCode
      * Region
    * Metrics
    * OptOut
    * RequestId
    * User
      * UserAttributes
      * UserId
  * Events **required**

### EventsRequest
* EventsRequest `object`: Specifies a batch of events to process.
  * BatchItem **required**

### EventsResponse
* EventsResponse `object`: Provides information about endpoints and the events that they're associated with.
  * Results

### ExportJobRequest
* ExportJobRequest `object`: Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
  * RoleArn **required**
  * S3UrlPrefix **required**
  * SegmentId
  * SegmentVersion

### ExportJobResource
* ExportJobResource `object`: Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
  * RoleArn **required**
  * S3UrlPrefix **required**
  * SegmentId
  * SegmentVersion

### ExportJobResponse
* ExportJobResponse `object`: Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
  * ApplicationId **required**
  * CompletedPieces
  * CompletionDate
  * CreationDate **required**
  * Definition **required**
    * RoleArn **required**
    * S3UrlPrefix **required**
    * SegmentId
    * SegmentVersion
  * FailedPieces
  * Failures
    * items [__string](#__string)
  * Id **required**
  * JobStatus **required**
  * TotalFailures
  * TotalPieces
  * TotalProcessed
  * Type **required**

### ExportJobsResponse
* ExportJobsResponse `object`: Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
  * Item **required**
    * items [ExportJobResponse](#exportjobresponse)
  * NextToken

### FilterType
* FilterType `string` (values: SYSTEM, ENDPOINT)

### ForbiddenException


### Format
* Format `string` (values: CSV, JSON)

### Frequency
* Frequency `string` (values: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, EVENT)

### GCMChannelRequest
* GCMChannelRequest `object`: Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
  * ApiKey **required**
  * Enabled

### GCMChannelResponse
* GCMChannelResponse `object`: Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
  * ApplicationId
  * CreationDate
  * Credential **required**
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### GCMMessage
* GCMMessage `object`: Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
  * Action
  * Body
  * CollapseKey
  * Data
  * IconReference
  * ImageIconUrl
  * ImageUrl
  * Priority
  * RawContent
  * RestrictedPackageName
  * SilentPush
  * SmallImageIconUrl
  * Sound
  * Substitutions
  * TimeToLive
  * Title
  * Url

### GPSCoordinates
* GPSCoordinates `object`: Specifies the GPS coordinates of a location.
  * Latitude **required**
  * Longitude **required**

### GPSPointDimension
* GPSPointDimension `object`: Specifies GPS-based criteria for including or excluding endpoints from a segment.
  * Coordinates **required**
    * Latitude **required**
    * Longitude **required**
  * RangeInKilometers

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

### GetApplicationDateRangeKpiRequest
* GetApplicationDateRangeKpiRequest `object`

### GetApplicationDateRangeKpiResponse
* GetApplicationDateRangeKpiResponse `object`
  * ApplicationDateRangeKpiResponse **required** [ApplicationDateRangeKpiResponse](#applicationdaterangekpiresponse)

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

### GetCampaignDateRangeKpiRequest
* GetCampaignDateRangeKpiRequest `object`

### GetCampaignDateRangeKpiResponse
* GetCampaignDateRangeKpiResponse `object`
  * CampaignDateRangeKpiResponse **required** [CampaignDateRangeKpiResponse](#campaigndaterangekpiresponse)

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

### GetChannelsRequest
* GetChannelsRequest `object`

### GetChannelsResponse
* GetChannelsResponse `object`
  * ChannelsResponse **required** [ChannelsResponse](#channelsresponse)

### GetEmailChannelRequest
* GetEmailChannelRequest `object`

### GetEmailChannelResponse
* GetEmailChannelResponse `object`
  * EmailChannelResponse **required** [EmailChannelResponse](#emailchannelresponse)

### GetEmailTemplateRequest
* GetEmailTemplateRequest `object`

### GetEmailTemplateResponse
* GetEmailTemplateResponse `object`
  * EmailTemplateResponse **required** [EmailTemplateResponse](#emailtemplateresponse)

### GetEndpointRequest
* GetEndpointRequest `object`

### GetEndpointResponse
* GetEndpointResponse `object`
  * EndpointResponse **required** [EndpointResponse](#endpointresponse)

### GetEventStreamRequest
* GetEventStreamRequest `object`

### GetEventStreamResponse
* GetEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### GetExportJobRequest
* GetExportJobRequest `object`

### GetExportJobResponse
* GetExportJobResponse `object`
  * ExportJobResponse **required** [ExportJobResponse](#exportjobresponse)

### GetExportJobsRequest
* GetExportJobsRequest `object`

### GetExportJobsResponse
* GetExportJobsResponse `object`
  * ExportJobsResponse **required** [ExportJobsResponse](#exportjobsresponse)

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

### GetJourneyDateRangeKpiRequest
* GetJourneyDateRangeKpiRequest `object`

### GetJourneyDateRangeKpiResponse
* GetJourneyDateRangeKpiResponse `object`
  * JourneyDateRangeKpiResponse **required** [JourneyDateRangeKpiResponse](#journeydaterangekpiresponse)

### GetJourneyExecutionActivityMetricsRequest
* GetJourneyExecutionActivityMetricsRequest `object`

### GetJourneyExecutionActivityMetricsResponse
* GetJourneyExecutionActivityMetricsResponse `object`
  * JourneyExecutionActivityMetricsResponse **required** [JourneyExecutionActivityMetricsResponse](#journeyexecutionactivitymetricsresponse)

### GetJourneyExecutionMetricsRequest
* GetJourneyExecutionMetricsRequest `object`

### GetJourneyExecutionMetricsResponse
* GetJourneyExecutionMetricsResponse `object`
  * JourneyExecutionMetricsResponse **required** [JourneyExecutionMetricsResponse](#journeyexecutionmetricsresponse)

### GetJourneyRequest
* GetJourneyRequest `object`

### GetJourneyResponse
* GetJourneyResponse `object`
  * JourneyResponse **required** [JourneyResponse](#journeyresponse)

### GetPushTemplateRequest
* GetPushTemplateRequest `object`

### GetPushTemplateResponse
* GetPushTemplateResponse `object`
  * PushNotificationTemplateResponse **required** [PushNotificationTemplateResponse](#pushnotificationtemplateresponse)

### GetRecommenderConfigurationRequest
* GetRecommenderConfigurationRequest `object`

### GetRecommenderConfigurationResponse
* GetRecommenderConfigurationResponse `object`
  * RecommenderConfigurationResponse **required** [RecommenderConfigurationResponse](#recommenderconfigurationresponse)

### GetRecommenderConfigurationsRequest
* GetRecommenderConfigurationsRequest `object`

### GetRecommenderConfigurationsResponse
* GetRecommenderConfigurationsResponse `object`
  * ListRecommenderConfigurationsResponse **required** [ListRecommenderConfigurationsResponse](#listrecommenderconfigurationsresponse)

### GetSegmentExportJobsRequest
* GetSegmentExportJobsRequest `object`

### GetSegmentExportJobsResponse
* GetSegmentExportJobsResponse `object`
  * ExportJobsResponse **required** [ExportJobsResponse](#exportjobsresponse)

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

### GetSmsTemplateRequest
* GetSmsTemplateRequest `object`

### GetSmsTemplateResponse
* GetSmsTemplateResponse `object`
  * SMSTemplateResponse **required** [SMSTemplateResponse](#smstemplateresponse)

### GetUserEndpointsRequest
* GetUserEndpointsRequest `object`

### GetUserEndpointsResponse
* GetUserEndpointsResponse `object`
  * EndpointsResponse **required** [EndpointsResponse](#endpointsresponse)

### GetVoiceChannelRequest
* GetVoiceChannelRequest `object`

### GetVoiceChannelResponse
* GetVoiceChannelResponse `object`
  * VoiceChannelResponse **required** [VoiceChannelResponse](#voicechannelresponse)

### GetVoiceTemplateRequest
* GetVoiceTemplateRequest `object`

### GetVoiceTemplateResponse
* GetVoiceTemplateResponse `object`
  * VoiceTemplateResponse **required** [VoiceTemplateResponse](#voicetemplateresponse)

### HoldoutActivity
* HoldoutActivity `object`: Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
  * NextActivity
  * Percentage **required**

### ImportJobRequest
* ImportJobRequest `object`: Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
  * DefineSegment
  * ExternalId
  * Format **required**
  * RegisterEndpoints
  * RoleArn **required**
  * S3Url **required**
  * SegmentId
  * SegmentName

### ImportJobResource
* ImportJobResource `object`: Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
  * DefineSegment
  * ExternalId
  * Format **required**
  * RegisterEndpoints
  * RoleArn **required**
  * S3Url **required**
  * SegmentId
  * SegmentName

### ImportJobResponse
* ImportJobResponse `object`: Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
  * ApplicationId **required**
  * CompletedPieces
  * CompletionDate
  * CreationDate **required**
  * Definition **required**
    * DefineSegment
    * ExternalId
    * Format **required**
    * RegisterEndpoints
    * RoleArn **required**
    * S3Url **required**
    * SegmentId
    * SegmentName
  * FailedPieces
  * Failures
    * items [__string](#__string)
  * Id **required**
  * JobStatus **required**
  * TotalFailures
  * TotalPieces
  * TotalProcessed
  * Type **required**

### ImportJobsResponse
* ImportJobsResponse `object`: Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
  * Item **required**
    * items [ImportJobResponse](#importjobresponse)
  * NextToken

### Include
* Include `string` (values: ALL, ANY, NONE)

### InternalServerErrorException


### ItemResponse
* ItemResponse `object`: Provides information about the results of a request to create or update an endpoint that's associated with an event.
  * EndpointItemResponse
    * Message
    * StatusCode
  * EventsItemResponse

### JobStatus
* JobStatus `string` (values: CREATED, PREPARING_FOR_INITIALIZATION, INITIALIZING, PROCESSING, PENDING_JOB, COMPLETING, COMPLETED, FAILING, FAILED)

### JourneyCustomMessage
* JourneyCustomMessage `object`: Specifies the message content for a custom channel message that's sent to participants in a journey.
  * Data

### JourneyDateRangeKpiResponse
* JourneyDateRangeKpiResponse `object`: Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
  * ApplicationId **required**
  * EndTime **required**
  * JourneyId **required**
  * KpiName **required**
  * KpiResult **required**
    * Rows **required**
      * items [ResultRow](#resultrow)
  * NextToken
  * StartTime **required**

### JourneyEmailMessage
* JourneyEmailMessage `object`: Specifies the "From" address for an email message that's sent to participants in a journey.
  * FromAddress

### JourneyExecutionActivityMetricsResponse
* JourneyExecutionActivityMetricsResponse `object`: Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
  * ActivityType **required**
  * ApplicationId **required**
  * JourneyActivityId **required**
  * JourneyId **required**
  * LastEvaluatedTime **required**
  * Metrics **required**

### JourneyExecutionMetricsResponse
* JourneyExecutionMetricsResponse `object`: Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
  * ApplicationId **required**
  * JourneyId **required**
  * LastEvaluatedTime **required**
  * Metrics **required**

### JourneyLimits
* JourneyLimits `object`: Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
  * DailyCap
  * EndpointReentryCap
  * MessagesPerSecond

### JourneyPushMessage
* JourneyPushMessage `object`: Specifies the message configuration for a push notification that's sent to participants in a journey.
  * TimeToLive

### JourneyResponse
* JourneyResponse `object`: Provides information about the status, configuration, and other settings for a journey.
  * tags
  * Activities
  * ApplicationId **required**
  * CreationDate
  * Id **required**
  * LastModifiedDate
  * Limits
    * DailyCap
    * EndpointReentryCap
    * MessagesPerSecond
  * LocalTime
  * Name **required**
  * QuietTime
    * End
    * Start
  * RefreshFrequency
  * Schedule
    * EndTime
    * StartTime
    * Timezone
  * StartActivity
  * StartCondition
    * Description
    * EventStartCondition [EventStartCondition](#eventstartcondition)
    * SegmentStartCondition
      * SegmentId **required**
  * State

### JourneySMSMessage
* JourneySMSMessage `object`: Specifies the sender ID and message type for an SMS message that's sent to participants in a journey.
  * MessageType
  * SenderId

### JourneySchedule
* JourneySchedule `object`: Specifies the schedule settings for a journey.
  * EndTime
  * StartTime
  * Timezone

### JourneyStateRequest
* JourneyStateRequest `object`: Changes the status of a journey.
  * State

### JourneysResponse
* JourneysResponse `object`: Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
  * Item **required**
    * items [JourneyResponse](#journeyresponse)
  * NextToken

### ListJourneysRequest
* ListJourneysRequest `object`

### ListJourneysResponse
* ListJourneysResponse `object`
  * JourneysResponse **required** [JourneysResponse](#journeysresponse)

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

### ListOfEndpointResponse
* ListOfEndpointResponse `array`
  * items [EndpointResponse](#endpointresponse)

### ListOfExportJobResponse
* ListOfExportJobResponse `array`
  * items [ExportJobResponse](#exportjobresponse)

### ListOfImportJobResponse
* ListOfImportJobResponse `array`
  * items [ImportJobResponse](#importjobresponse)

### ListOfJourneyResponse
* ListOfJourneyResponse `array`
  * items [JourneyResponse](#journeyresponse)

### ListOfMultiConditionalBranch
* ListOfMultiConditionalBranch `array`
  * items [MultiConditionalBranch](#multiconditionalbranch)

### ListOfRandomSplitEntry
* ListOfRandomSplitEntry `array`
  * items [RandomSplitEntry](#randomsplitentry)

### ListOfRecommenderConfigurationResponse
* ListOfRecommenderConfigurationResponse `array`
  * items [RecommenderConfigurationResponse](#recommenderconfigurationresponse)

### ListOfResultRow
* ListOfResultRow `array`
  * items [ResultRow](#resultrow)

### ListOfResultRowValue
* ListOfResultRowValue `array`
  * items [ResultRowValue](#resultrowvalue)

### ListOfSegmentDimensions
* ListOfSegmentDimensions `array`
  * items [SegmentDimensions](#segmentdimensions)

### ListOfSegmentGroup
* ListOfSegmentGroup `array`
  * items [SegmentGroup](#segmentgroup)

### ListOfSegmentReference
* ListOfSegmentReference `array`
  * items [SegmentReference](#segmentreference)

### ListOfSegmentResponse
* ListOfSegmentResponse `array`
  * items [SegmentResponse](#segmentresponse)

### ListOfSimpleCondition
* ListOfSimpleCondition `array`
  * items [SimpleCondition](#simplecondition)

### ListOfTemplateResponse
* ListOfTemplateResponse `array`
  * items [TemplateResponse](#templateresponse)

### ListOfTemplateVersionResponse
* ListOfTemplateVersionResponse `array`
  * items [TemplateVersionResponse](#templateversionresponse)

### ListOfTreatmentResource
* ListOfTreatmentResource `array`
  * items [TreatmentResource](#treatmentresource)

### ListOfWriteTreatmentResource
* ListOfWriteTreatmentResource `array`
  * items [WriteTreatmentResource](#writetreatmentresource)

### ListOf__EndpointTypesElement
* ListOf__EndpointTypesElement `array`
  * items [__EndpointTypesElement](#__endpointtypeselement)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### ListRecommenderConfigurationsResponse
* ListRecommenderConfigurationsResponse `object`: Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
  * Item **required**
    * items [RecommenderConfigurationResponse](#recommenderconfigurationresponse)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * TagsModel **required** [TagsModel](#tagsmodel)

### ListTemplateVersionsRequest
* ListTemplateVersionsRequest `object`

### ListTemplateVersionsResponse
* ListTemplateVersionsResponse `object`
  * TemplateVersionsResponse **required** [TemplateVersionsResponse](#templateversionsresponse)

### ListTemplatesRequest
* ListTemplatesRequest `object`

### ListTemplatesResponse
* ListTemplatesResponse `object`
  * TemplatesResponse **required** [TemplatesResponse](#templatesresponse)

### MapOfActivity
* MapOfActivity `object`

### MapOfAddressConfiguration
* MapOfAddressConfiguration `object`

### MapOfAttributeDimension
* MapOfAttributeDimension `object`

### MapOfChannelResponse
* MapOfChannelResponse `object`

### MapOfEndpointMessageResult
* MapOfEndpointMessageResult `object`

### MapOfEndpointSendConfiguration
* MapOfEndpointSendConfiguration `object`

### MapOfEvent
* MapOfEvent `object`

### MapOfEventItemResponse
* MapOfEventItemResponse `object`

### MapOfEventsBatch
* MapOfEventsBatch `object`

### MapOfItemResponse
* MapOfItemResponse `object`

### MapOfListOf__string
* MapOfListOf__string `object`

### MapOfMapOfEndpointMessageResult
* MapOfMapOfEndpointMessageResult `object`

### MapOfMessageResult
* MapOfMessageResult `object`

### MapOfMetricDimension
* MapOfMetricDimension `object`

### MapOf__double
* MapOf__double `object`

### MapOf__integer
* MapOf__integer `object`

### MapOf__string
* MapOf__string `object`

### Message
* Message `object`: Specifies the content and settings for a push notification that's sent to recipients of a campaign.
  * Action
  * Body
  * ImageIconUrl
  * ImageSmallIconUrl
  * ImageUrl
  * JsonBody
  * MediaUrl
  * RawContent
  * SilentPush
  * TimeToLive
  * Title
  * Url

### MessageBody
* MessageBody `object`: Provides information about an API request or response.
  * Message
  * RequestID

### MessageConfiguration
* MessageConfiguration `object`: Specifies the message configuration settings for a campaign.
  * ADMMessage
    * Action
    * Body
    * ImageIconUrl
    * ImageSmallIconUrl
    * ImageUrl
    * JsonBody
    * MediaUrl
    * RawContent
    * SilentPush
    * TimeToLive
    * Title
    * Url
  * APNSMessage
    * Action
    * Body
    * ImageIconUrl
    * ImageSmallIconUrl
    * ImageUrl
    * JsonBody
    * MediaUrl
    * RawContent
    * SilentPush
    * TimeToLive
    * Title
    * Url
  * BaiduMessage
    * Action
    * Body
    * ImageIconUrl
    * ImageSmallIconUrl
    * ImageUrl
    * JsonBody
    * MediaUrl
    * RawContent
    * SilentPush
    * TimeToLive
    * Title
    * Url
  * CustomMessage
    * Data
  * DefaultMessage
    * Action
    * Body
    * ImageIconUrl
    * ImageSmallIconUrl
    * ImageUrl
    * JsonBody
    * MediaUrl
    * RawContent
    * SilentPush
    * TimeToLive
    * Title
    * Url
  * EmailMessage
    * Body
    * FromAddress
    * HtmlBody
    * Title
  * GCMMessage
    * Action
    * Body
    * ImageIconUrl
    * ImageSmallIconUrl
    * ImageUrl
    * JsonBody
    * MediaUrl
    * RawContent
    * SilentPush
    * TimeToLive
    * Title
    * Url
  * SMSMessage
    * Body
    * MessageType
    * SenderId

### MessageRequest
* MessageRequest `object`: Specifies the configuration and other settings for a message.
  * Addresses
  * Context
  * Endpoints
  * MessageConfiguration **required**
    * ADMMessage
      * Action
      * Body
      * ConsolidationKey
      * Data
      * ExpiresAfter
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * MD5
      * RawContent
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * Title
      * Url
    * APNSMessage
      * APNSPushType
      * Action
      * Badge
      * Body
      * Category
      * CollapseId
      * Data
      * MediaUrl
      * PreferredAuthenticationMethod
      * Priority
      * RawContent
      * SilentPush
      * Sound
      * Substitutions
      * ThreadId
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * Data
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * TimeToLive
      * Title
      * Url
    * DefaultMessage
      * Body
      * Substitutions
    * DefaultPushNotificationMessage
      * Action
      * Body
      * Data
      * SilentPush
      * Substitutions
      * Title
      * Url
    * EmailMessage
      * Body
      * FeedbackForwardingAddress
      * FromAddress
      * RawEmail
        * Data
      * ReplyToAddresses
        * items [__string](#__string)
      * SimpleEmail
        * HtmlPart
          * Charset
          * Data
        * Subject
          * Charset
          * Data
        * TextPart
          * Charset
          * Data
      * Substitutions
    * GCMMessage
      * Action
      * Body
      * CollapseKey
      * Data
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * Priority
      * RawContent
      * RestrictedPackageName
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * Keyword
      * MediaUrl
      * MessageType
      * OriginationNumber
      * SenderId
      * Substitutions
    * VoiceMessage
      * Body
      * LanguageCode
      * OriginationNumber
      * Substitutions
      * VoiceId
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TraceId

### MessageResponse
* MessageResponse `object`: Provides information about the results of a request to send a message to an endpoint address.
  * ApplicationId **required**
  * EndpointResult
  * RequestId
  * Result

### MessageResult
* MessageResult `object`: Provides information about the results of sending a message directly to an endpoint address.
  * DeliveryStatus **required**
  * MessageId
  * StatusCode **required**
  * StatusMessage
  * UpdatedToken

### MessageType
* MessageType `string` (values: TRANSACTIONAL, PROMOTIONAL)

### MethodNotAllowedException


### MetricDimension
* MetricDimension `object`: Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints.
  * ComparisonOperator **required**
  * Value **required**

### Mode
* Mode `string` (values: DELIVERY, FILTER)

### MultiConditionalBranch
* MultiConditionalBranch `object`: Specifies a condition to evaluate for an activity path in a journey.
  * Condition
    * EventCondition
      * Dimensions
        * Attributes
        * EventType
          * DimensionType
          * Values **required**
        * Metrics
      * MessageActivity
    * SegmentCondition
      * SegmentId **required**
    * SegmentDimensions
      * Attributes
      * Behavior
        * Recency
          * Duration **required**
          * RecencyType **required**
      * Demographic
        * AppVersion
          * DimensionType
          * Values **required**
        * Channel
          * DimensionType
          * Values **required**
        * DeviceType
          * DimensionType
          * Values **required**
        * Make
          * DimensionType
          * Values **required**
        * Model
          * DimensionType
          * Values **required**
        * Platform
          * DimensionType
          * Values **required**
      * Location
        * Country
          * DimensionType
          * Values **required**
        * GPSPoint
          * Coordinates **required**
          * RangeInKilometers
      * Metrics
      * UserAttributes
  * NextActivity

### MultiConditionalSplitActivity
* MultiConditionalSplitActivity `object`: <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
  * Branches
    * items [MultiConditionalBranch](#multiconditionalbranch)
  * DefaultActivity
  * EvaluationWaitTime
    * WaitFor
    * WaitUntil

### NotFoundException


### NumberValidateRequest
* NumberValidateRequest `object`: Specifies a phone number to validate and retrieve information about.
  * IsoCountryCode
  * PhoneNumber

### NumberValidateResponse
* NumberValidateResponse `object`: Provides information about a phone number.
  * Carrier
  * City
  * CleansedPhoneNumberE164
  * CleansedPhoneNumberNational
  * Country
  * CountryCodeIso2
  * CountryCodeNumeric
  * County
  * OriginalCountryCodeIso2
  * OriginalPhoneNumber
  * PhoneType
  * PhoneTypeCode
  * Timezone
  * ZipCode

### Operator
* Operator `string` (values: ALL, ANY)

### PayloadTooLargeException


### PhoneNumberValidateRequest
* PhoneNumberValidateRequest `object`
  * NumberValidateRequest **required** [NumberValidateRequest](#numbervalidaterequest)

### PhoneNumberValidateResponse
* PhoneNumberValidateResponse `object`
  * NumberValidateResponse **required** [NumberValidateResponse](#numbervalidateresponse)

### PublicEndpoint
* PublicEndpoint `object`: Specifies the properties and attributes of an endpoint that's associated with an event.
  * Address
  * Attributes
  * ChannelType
  * Demographic
    * AppVersion
    * Locale
    * Make
    * Model
    * ModelVersion
    * Platform
    * PlatformVersion
    * Timezone
  * EffectiveDate
  * EndpointStatus
  * Location
    * City
    * Country
    * Latitude
    * Longitude
    * PostalCode
    * Region
  * Metrics
  * OptOut
  * RequestId
  * User
    * UserAttributes
    * UserId

### PushMessageActivity
* PushMessageActivity `object`: Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
  * MessageConfig
    * TimeToLive
  * NextActivity
  * TemplateName
  * TemplateVersion

### PushNotificationTemplateRequest
* PushNotificationTemplateRequest `object`: Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
  * tags
  * ADM
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * APNS
    * Action
    * Body
    * MediaUrl
    * RawContent
    * Sound
    * Title
    * Url
  * Baidu
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * Default
    * Action
    * Body
    * Sound
    * Title
    * Url
  * DefaultSubstitutions
  * GCM
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * RecommenderId
  * TemplateDescription

### PushNotificationTemplateResponse
* PushNotificationTemplateResponse `object`: Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
  * tags
  * ADM
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * APNS
    * Action
    * Body
    * MediaUrl
    * RawContent
    * Sound
    * Title
    * Url
  * Arn
  * Baidu
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * CreationDate **required**
  * Default
    * Action
    * Body
    * Sound
    * Title
    * Url
  * DefaultSubstitutions
  * GCM
    * Action
    * Body
    * ImageIconUrl
    * ImageUrl
    * RawContent
    * SmallImageIconUrl
    * Sound
    * Title
    * Url
  * LastModifiedDate **required**
  * RecommenderId
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * Version

### PutEventStreamRequest
* PutEventStreamRequest `object`
  * WriteEventStream **required** [WriteEventStream](#writeeventstream)

### PutEventStreamResponse
* PutEventStreamResponse `object`
  * EventStream **required** [EventStream](#eventstream)

### PutEventsRequest
* PutEventsRequest `object`
  * EventsRequest **required** [EventsRequest](#eventsrequest)

### PutEventsResponse
* PutEventsResponse `object`
  * EventsResponse **required** [EventsResponse](#eventsresponse)

### QuietTime
* QuietTime `object`: Specifies the start and end times that define a time range when messages aren't sent to endpoints.
  * End
  * Start

### RandomSplitActivity
* RandomSplitActivity `object`: Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify.
  * Branches
    * items [RandomSplitEntry](#randomsplitentry)

### RandomSplitEntry
* RandomSplitEntry `object`: Specifies the settings for a path in a random split activity in a journey.
  * NextActivity
  * Percentage

### RawEmail
* RawEmail `object`: Specifies the contents of an email message, represented as a raw MIME message.
  * Data

### RecencyDimension
* RecencyDimension `object`: Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
  * Duration **required**
  * RecencyType **required**

### RecencyType
* RecencyType `string` (values: ACTIVE, INACTIVE)

### RecommenderConfigurationResponse
* RecommenderConfigurationResponse `object`: Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
  * Attributes
  * CreationDate **required**
  * Description
  * Id **required**
  * LastModifiedDate **required**
  * Name
  * RecommendationProviderIdType
  * RecommendationProviderRoleArn **required**
  * RecommendationProviderUri **required**
  * RecommendationTransformerUri
  * RecommendationsDisplayName
  * RecommendationsPerMessage

### RemoveAttributesRequest
* RemoveAttributesRequest `object`
  * UpdateAttributesRequest **required** [UpdateAttributesRequest](#updateattributesrequest)

### RemoveAttributesResponse
* RemoveAttributesResponse `object`
  * AttributesResource **required** [AttributesResource](#attributesresource)

### ResultRow
* ResultRow `object`: Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
  * GroupedBys **required**
    * items [ResultRowValue](#resultrowvalue)
  * Values **required**
    * items [ResultRowValue](#resultrowvalue)

### ResultRowValue
* ResultRowValue `object`: Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
  * Key **required**
  * Type **required**
  * Value **required**

### SMSChannelRequest
* SMSChannelRequest `object`: Specifies the status and settings of the SMS channel for an application.
  * Enabled
  * SenderId
  * ShortCode

### SMSChannelResponse
* SMSChannelResponse `object`: Provides information about the status and settings of the SMS channel for an application.
  * ApplicationId
  * CreationDate
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * PromotionalMessagesPerSecond
  * SenderId
  * ShortCode
  * TransactionalMessagesPerSecond
  * Version

### SMSMessage
* SMSMessage `object`: Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
  * Body
  * Keyword
  * MediaUrl
  * MessageType
  * OriginationNumber
  * SenderId
  * Substitutions

### SMSMessageActivity
* SMSMessageActivity `object`: Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
  * MessageConfig
    * MessageType
    * SenderId
  * NextActivity
  * TemplateName
  * TemplateVersion

### SMSTemplateRequest
* SMSTemplateRequest `object`: Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
  * tags
  * Body
  * DefaultSubstitutions
  * RecommenderId
  * TemplateDescription

### SMSTemplateResponse
* SMSTemplateResponse `object`: Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
  * tags
  * Arn
  * Body
  * CreationDate **required**
  * DefaultSubstitutions
  * LastModifiedDate **required**
  * RecommenderId
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * Version

### Schedule
* Schedule `object`: Specifies the schedule settings for a campaign.
  * EndTime
  * EventFilter
    * Dimensions **required**
      * Attributes
      * EventType
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Metrics
    * FilterType **required**
  * Frequency
  * IsLocalTime
  * QuietTime
    * End
    * Start
  * StartTime **required**
  * Timezone

### SegmentBehaviors
* SegmentBehaviors `object`: Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active.
  * Recency
    * Duration **required**
    * RecencyType **required**

### SegmentCondition
* SegmentCondition `object`: Specifies a segment to associate with an activity in a journey.
  * SegmentId **required**

### SegmentDemographics
* SegmentDemographics `object`: Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
  * AppVersion
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * Channel
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * DeviceType
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * Make
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * Model
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * Platform
    * DimensionType
    * Values **required**
      * items [__string](#__string)

### SegmentDimensions
* SegmentDimensions `object`: Specifies the dimension settings for a segment.
  * Attributes
  * Behavior
    * Recency
      * Duration **required**
      * RecencyType **required**
  * Demographic
    * AppVersion
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Channel
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * DeviceType
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Make
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Model
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * Platform
      * DimensionType
      * Values **required**
        * items [__string](#__string)
  * Location
    * Country
      * DimensionType
      * Values **required**
        * items [__string](#__string)
    * GPSPoint
      * Coordinates **required**
        * Latitude **required**
        * Longitude **required**
      * RangeInKilometers
  * Metrics
  * UserAttributes

### SegmentGroup
* SegmentGroup `object`: Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
  * Dimensions
    * items [SegmentDimensions](#segmentdimensions)
  * SourceSegments
    * items [SegmentReference](#segmentreference)
  * SourceType
  * Type

### SegmentGroupList
* SegmentGroupList `object`: Specifies the settings that define the relationships between segment groups for a segment.
  * Groups
    * items [SegmentGroup](#segmentgroup)
  * Include

### SegmentImportResource
* SegmentImportResource `object`: Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
  * ChannelCounts
  * ExternalId **required**
  * Format **required**
  * RoleArn **required**
  * S3Url **required**
  * Size **required**

### SegmentLocation
* SegmentLocation `object`: Specifies geographical dimension settings for a segment.
  * Country
    * DimensionType
    * Values **required**
      * items [__string](#__string)
  * GPSPoint
    * Coordinates **required**
      * Latitude **required**
      * Longitude **required**
    * RangeInKilometers

### SegmentReference
* SegmentReference `object`: Specifies the segment identifier and version of a segment.
  * Id **required**
  * Version

### SegmentResponse
* SegmentResponse `object`: Provides information about the configuration, dimension, and other settings for a segment.
  * tags
  * ApplicationId **required**
  * Arn **required**
  * CreationDate **required**
  * Dimensions
    * Attributes
    * Behavior
      * Recency
        * Duration **required**
        * RecencyType **required**
    * Demographic
      * AppVersion
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Channel
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * DeviceType
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Make
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Model
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Platform
        * DimensionType
        * Values **required**
          * items [__string](#__string)
    * Location
      * Country
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * GPSPoint
        * Coordinates **required**
          * Latitude **required**
          * Longitude **required**
        * RangeInKilometers
    * Metrics
    * UserAttributes
  * Id **required**
  * ImportDefinition
    * ChannelCounts
    * ExternalId **required**
    * Format **required**
    * RoleArn **required**
    * S3Url **required**
    * Size **required**
  * LastModifiedDate
  * Name
  * SegmentGroups
    * Groups
      * items [SegmentGroup](#segmentgroup)
    * Include
  * SegmentType **required**
  * Version

### SegmentType
* SegmentType `string` (values: DIMENSIONAL, IMPORT)

### SegmentsResponse
* SegmentsResponse `object`: Provides information about all the segments that are associated with an application.
  * Item **required**
    * items [SegmentResponse](#segmentresponse)
  * NextToken

### SendMessagesRequest
* SendMessagesRequest `object`
  * MessageRequest **required** [MessageRequest](#messagerequest)

### SendMessagesResponse
* SendMessagesResponse `object`
  * MessageResponse **required** [MessageResponse](#messageresponse)

### SendUsersMessageRequest
* SendUsersMessageRequest `object`: Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
  * Context
  * MessageConfiguration **required**
    * ADMMessage
      * Action
      * Body
      * ConsolidationKey
      * Data
      * ExpiresAfter
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * MD5
      * RawContent
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * Title
      * Url
    * APNSMessage
      * APNSPushType
      * Action
      * Badge
      * Body
      * Category
      * CollapseId
      * Data
      * MediaUrl
      * PreferredAuthenticationMethod
      * Priority
      * RawContent
      * SilentPush
      * Sound
      * Substitutions
      * ThreadId
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * Data
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * RawContent
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * TimeToLive
      * Title
      * Url
    * DefaultMessage
      * Body
      * Substitutions
    * DefaultPushNotificationMessage
      * Action
      * Body
      * Data
      * SilentPush
      * Substitutions
      * Title
      * Url
    * EmailMessage
      * Body
      * FeedbackForwardingAddress
      * FromAddress
      * RawEmail
        * Data
      * ReplyToAddresses
        * items [__string](#__string)
      * SimpleEmail
        * HtmlPart
          * Charset
          * Data
        * Subject
          * Charset
          * Data
        * TextPart
          * Charset
          * Data
      * Substitutions
    * GCMMessage
      * Action
      * Body
      * CollapseKey
      * Data
      * IconReference
      * ImageIconUrl
      * ImageUrl
      * Priority
      * RawContent
      * RestrictedPackageName
      * SilentPush
      * SmallImageIconUrl
      * Sound
      * Substitutions
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * Keyword
      * MediaUrl
      * MessageType
      * OriginationNumber
      * SenderId
      * Substitutions
    * VoiceMessage
      * Body
      * LanguageCode
      * OriginationNumber
      * Substitutions
      * VoiceId
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TraceId
  * Users **required**

### SendUsersMessageResponse
* SendUsersMessageResponse `object`: Provides information about which users and endpoints a message was sent to.
  * ApplicationId **required**
  * RequestId
  * Result

### SendUsersMessagesRequest
* SendUsersMessagesRequest `object`
  * SendUsersMessageRequest **required** [SendUsersMessageRequest](#sendusersmessagerequest)

### SendUsersMessagesResponse
* SendUsersMessagesResponse `object`
  * SendUsersMessageResponse **required** [SendUsersMessageResponse](#sendusersmessageresponse)

### Session
* Session `object`: Provides information about a session.
  * Duration
  * Id **required**
  * StartTimestamp **required**
  * StopTimestamp

### SetDimension
* SetDimension `object`: Specifies the dimension type and values for a segment dimension.
  * DimensionType
  * Values **required**
    * items [__string](#__string)

### SimpleCondition
* SimpleCondition `object`: Specifies a condition to evaluate for an activity in a journey.
  * EventCondition
    * Dimensions
      * Attributes
      * EventType
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Metrics
    * MessageActivity
  * SegmentCondition
    * SegmentId **required**
  * SegmentDimensions
    * Attributes
    * Behavior
      * Recency
        * Duration **required**
        * RecencyType **required**
    * Demographic
      * AppVersion
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Channel
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * DeviceType
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Make
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Model
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Platform
        * DimensionType
        * Values **required**
          * items [__string](#__string)
    * Location
      * Country
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * GPSPoint
        * Coordinates **required**
          * Latitude **required**
          * Longitude **required**
        * RangeInKilometers
    * Metrics
    * UserAttributes

### SimpleEmail
* SimpleEmail `object`: Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
  * HtmlPart
    * Charset
    * Data
  * Subject
    * Charset
    * Data
  * TextPart
    * Charset
    * Data

### SimpleEmailPart
* SimpleEmailPart `object`: Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
  * Charset
  * Data

### SourceType
* SourceType `string` (values: ALL, ANY, NONE)

### StartCondition
* StartCondition `object`: Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey.
  * Description
  * EventStartCondition [EventStartCondition](#eventstartcondition)
  * SegmentStartCondition
    * SegmentId **required**

### State
* State `string` (values: DRAFT, ACTIVE, COMPLETED, CANCELLED, CLOSED)

### TagResourceRequest
* TagResourceRequest `object`
  * TagsModel **required** [TagsModel](#tagsmodel)

### TagsModel
* TagsModel `object`: Specifies the tags (keys and values) for an application, campaign, message template, or segment.
  * tags **required**

### Template
* Template `object`: Specifies the name and version of the message template to use for the message.
  * Name
  * Version

### TemplateActiveVersionRequest
* TemplateActiveVersionRequest `object`: Specifies which version of a message template to use as the active version of the template.
  * Version

### TemplateConfiguration
* TemplateConfiguration `object`: Specifies the message template to use for the message, for each type of channel.
  * EmailTemplate
    * Name
    * Version
  * PushTemplate
    * Name
    * Version
  * SMSTemplate
    * Name
    * Version
  * VoiceTemplate
    * Name
    * Version

### TemplateResponse
* TemplateResponse `object`: Provides information about a message template that's associated with your Amazon Pinpoint account.
  * tags
  * Arn
  * CreationDate **required**
  * DefaultSubstitutions
  * LastModifiedDate **required**
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * Version

### TemplateType
* TemplateType `string` (values: EMAIL, SMS, VOICE, PUSH)

### TemplateVersionResponse
* TemplateVersionResponse `object`: Provides information about a specific version of a message template.
  * CreationDate **required**
  * DefaultSubstitutions
  * LastModifiedDate **required**
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * Version

### TemplateVersionsResponse
* TemplateVersionsResponse `object`: Provides information about all the versions of a specific message template.
  * Item **required**
    * items [TemplateVersionResponse](#templateversionresponse)
  * Message
  * NextToken
  * RequestID

### TemplatesResponse
* TemplatesResponse `object`: Provides information about all the message templates that are associated with your Amazon Pinpoint account.
  * Item **required**
    * items [TemplateResponse](#templateresponse)
  * NextToken

### TooManyRequestsException


### TreatmentResource
* TreatmentResource `object`: Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
  * CustomDeliveryConfiguration
    * DeliveryUri **required**
    * EndpointTypes
      * items [__EndpointTypesElement](#__endpointtypeselement)
  * Id **required**
  * MessageConfiguration
    * ADMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * APNSMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * CustomMessage
      * Data
    * DefaultMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * EmailMessage
      * Body
      * FromAddress
      * HtmlBody
      * Title
    * GCMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * MessageType
      * SenderId
  * Schedule
    * EndTime
    * EventFilter
      * Dimensions **required**
        * Attributes
        * EventType
          * DimensionType
          * Values **required**
        * Metrics
      * FilterType **required**
    * Frequency
    * IsLocalTime
    * QuietTime
      * End
      * Start
    * StartTime **required**
    * Timezone
  * SizePercent **required**
  * State
    * CampaignStatus
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TreatmentDescription
  * TreatmentName

### Type
* Type `string` (values: ALL, ANY, NONE)

### UntagResourceRequest
* UntagResourceRequest `object`

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

### UpdateAttributesRequest
* UpdateAttributesRequest `object`: Specifies one or more attributes to remove from all the endpoints that are associated with an application.
  * Blacklist
    * items [__string](#__string)

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

### UpdateEmailTemplateRequest
* UpdateEmailTemplateRequest `object`
  * EmailTemplateRequest **required** [EmailTemplateRequest](#emailtemplaterequest)

### UpdateEmailTemplateResponse
* UpdateEmailTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

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

### UpdateJourneyRequest
* UpdateJourneyRequest `object`
  * WriteJourneyRequest **required** [WriteJourneyRequest](#writejourneyrequest)

### UpdateJourneyResponse
* UpdateJourneyResponse `object`
  * JourneyResponse **required** [JourneyResponse](#journeyresponse)

### UpdateJourneyStateRequest
* UpdateJourneyStateRequest `object`
  * JourneyStateRequest **required** [JourneyStateRequest](#journeystaterequest)

### UpdateJourneyStateResponse
* UpdateJourneyStateResponse `object`
  * JourneyResponse **required** [JourneyResponse](#journeyresponse)

### UpdatePushTemplateRequest
* UpdatePushTemplateRequest `object`
  * PushNotificationTemplateRequest **required** [PushNotificationTemplateRequest](#pushnotificationtemplaterequest)

### UpdatePushTemplateResponse
* UpdatePushTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### UpdateRecommenderConfiguration
* UpdateRecommenderConfiguration `object`: Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
  * Attributes
  * Description
  * Name
  * RecommendationProviderIdType
  * RecommendationProviderRoleArn **required**
  * RecommendationProviderUri **required**
  * RecommendationTransformerUri
  * RecommendationsDisplayName
  * RecommendationsPerMessage

### UpdateRecommenderConfigurationRequest
* UpdateRecommenderConfigurationRequest `object`
  * UpdateRecommenderConfiguration **required** [UpdateRecommenderConfiguration](#updaterecommenderconfiguration)

### UpdateRecommenderConfigurationResponse
* UpdateRecommenderConfigurationResponse `object`
  * RecommenderConfigurationResponse **required** [RecommenderConfigurationResponse](#recommenderconfigurationresponse)

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

### UpdateSmsTemplateRequest
* UpdateSmsTemplateRequest `object`
  * SMSTemplateRequest **required** [SMSTemplateRequest](#smstemplaterequest)

### UpdateSmsTemplateResponse
* UpdateSmsTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### UpdateTemplateActiveVersionRequest
* UpdateTemplateActiveVersionRequest `object`
  * TemplateActiveVersionRequest **required** [TemplateActiveVersionRequest](#templateactiveversionrequest)

### UpdateTemplateActiveVersionResponse
* UpdateTemplateActiveVersionResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### UpdateVoiceChannelRequest
* UpdateVoiceChannelRequest `object`
  * VoiceChannelRequest **required** [VoiceChannelRequest](#voicechannelrequest)

### UpdateVoiceChannelResponse
* UpdateVoiceChannelResponse `object`
  * VoiceChannelResponse **required** [VoiceChannelResponse](#voicechannelresponse)

### UpdateVoiceTemplateRequest
* UpdateVoiceTemplateRequest `object`
  * VoiceTemplateRequest **required** [VoiceTemplateRequest](#voicetemplaterequest)

### UpdateVoiceTemplateResponse
* UpdateVoiceTemplateResponse `object`
  * MessageBody **required** [MessageBody](#messagebody)

### VoiceChannelRequest
* VoiceChannelRequest `object`: Specifies the status and settings of the voice channel for an application.
  * Enabled

### VoiceChannelResponse
* VoiceChannelResponse `object`: Provides information about the status and settings of the voice channel for an application.
  * ApplicationId
  * CreationDate
  * Enabled
  * HasCredential
  * Id
  * IsArchived
  * LastModifiedBy
  * LastModifiedDate
  * Platform **required**
  * Version

### VoiceMessage
* VoiceMessage `object`: Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel.
  * Body
  * LanguageCode
  * OriginationNumber
  * Substitutions
  * VoiceId

### VoiceTemplateRequest
* VoiceTemplateRequest `object`: Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
  * tags
  * Body
  * DefaultSubstitutions
  * LanguageCode
  * TemplateDescription
  * VoiceId

### VoiceTemplateResponse
* VoiceTemplateResponse `object`: Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
  * tags
  * Arn
  * Body
  * CreationDate **required**
  * DefaultSubstitutions
  * LanguageCode
  * LastModifiedDate **required**
  * TemplateDescription
  * TemplateName **required**
  * TemplateType **required**
  * Version
  * VoiceId

### WaitActivity
* WaitActivity `object`: Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
  * NextActivity
  * WaitTime
    * WaitFor
    * WaitUntil

### WaitTime
* WaitTime `object`: Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
  * WaitFor
  * WaitUntil

### WriteApplicationSettingsRequest
* WriteApplicationSettingsRequest `object`: Specifies the default settings for an application.
  * CampaignHook
    * LambdaFunctionName
    * Mode
    * WebUrl
  * CloudWatchMetricsEnabled
  * EventTaggingEnabled [__boolean](#__boolean)
  * Limits
    * Daily
    * MaximumDuration
    * MessagesPerSecond
    * Total
  * QuietTime
    * End
    * Start

### WriteCampaignRequest
* WriteCampaignRequest `object`: Specifies the configuration and other settings for a campaign.
  * tags
  * AdditionalTreatments
    * items [WriteTreatmentResource](#writetreatmentresource)
  * CustomDeliveryConfiguration
    * DeliveryUri **required**
    * EndpointTypes
      * items [__EndpointTypesElement](#__endpointtypeselement)
  * Description
  * HoldoutPercent
  * Hook
    * LambdaFunctionName
    * Mode
    * WebUrl
  * IsPaused
  * Limits
    * Daily
    * MaximumDuration
    * MessagesPerSecond
    * Total
  * MessageConfiguration
    * ADMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * APNSMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * CustomMessage
      * Data
    * DefaultMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * EmailMessage
      * Body
      * FromAddress
      * HtmlBody
      * Title
    * GCMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * MessageType
      * SenderId
  * Name
  * Schedule
    * EndTime
    * EventFilter
      * Dimensions **required**
        * Attributes
        * EventType
          * DimensionType
          * Values **required**
        * Metrics
      * FilterType **required**
    * Frequency
    * IsLocalTime
    * QuietTime
      * End
      * Start
    * StartTime **required**
    * Timezone
  * SegmentId
  * SegmentVersion
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TreatmentDescription
  * TreatmentName

### WriteEventStream
* WriteEventStream `object`: Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
  * DestinationStreamArn **required**
  * RoleArn **required**

### WriteJourneyRequest
* WriteJourneyRequest `object`: Specifies the configuration and other settings for a journey.
  * Activities
  * CreationDate
  * LastModifiedDate
  * Limits
    * DailyCap
    * EndpointReentryCap
    * MessagesPerSecond
  * LocalTime
  * Name **required**
  * QuietTime
    * End
    * Start
  * RefreshFrequency
  * Schedule
    * EndTime
    * StartTime
    * Timezone
  * StartActivity
  * StartCondition
    * Description
    * EventStartCondition [EventStartCondition](#eventstartcondition)
    * SegmentStartCondition
      * SegmentId **required**
  * State

### WriteSegmentRequest
* WriteSegmentRequest `object`: Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
  * tags
  * Dimensions
    * Attributes
    * Behavior
      * Recency
        * Duration **required**
        * RecencyType **required**
    * Demographic
      * AppVersion
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Channel
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * DeviceType
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Make
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Model
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * Platform
        * DimensionType
        * Values **required**
          * items [__string](#__string)
    * Location
      * Country
        * DimensionType
        * Values **required**
          * items [__string](#__string)
      * GPSPoint
        * Coordinates **required**
          * Latitude **required**
          * Longitude **required**
        * RangeInKilometers
    * Metrics
    * UserAttributes
  * Name
  * SegmentGroups
    * Groups
      * items [SegmentGroup](#segmentgroup)
    * Include

### WriteTreatmentResource
* WriteTreatmentResource `object`: Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
  * CustomDeliveryConfiguration
    * DeliveryUri **required**
    * EndpointTypes
      * items [__EndpointTypesElement](#__endpointtypeselement)
  * MessageConfiguration
    * ADMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * APNSMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * BaiduMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * CustomMessage
      * Data
    * DefaultMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * EmailMessage
      * Body
      * FromAddress
      * HtmlBody
      * Title
    * GCMMessage
      * Action
      * Body
      * ImageIconUrl
      * ImageSmallIconUrl
      * ImageUrl
      * JsonBody
      * MediaUrl
      * RawContent
      * SilentPush
      * TimeToLive
      * Title
      * Url
    * SMSMessage
      * Body
      * MessageType
      * SenderId
  * Schedule
    * EndTime
    * EventFilter
      * Dimensions **required**
        * Attributes
        * EventType
          * DimensionType
          * Values **required**
        * Metrics
      * FilterType **required**
    * Frequency
    * IsLocalTime
    * QuietTime
      * End
      * Start
    * StartTime **required**
    * Timezone
  * SizePercent **required**
  * TemplateConfiguration
    * EmailTemplate
      * Name
      * Version
    * PushTemplate
      * Name
      * Version
    * SMSTemplate
      * Name
      * Version
    * VoiceTemplate
      * Name
      * Version
  * TreatmentDescription
  * TreatmentName

### __EndpointTypesElement
* __EndpointTypesElement `string` (values: PUSH, GCM, APNS, APNS_SANDBOX, APNS_VOIP, APNS_VOIP_SANDBOX, ADM, SMS, VOICE, EMAIL, BAIDU, CUSTOM)

### __blob
* __blob `string`

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __string
* __string `string`

### __timestampIso8601
* __timestampIso8601 `string`


