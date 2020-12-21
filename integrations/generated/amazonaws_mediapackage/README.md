# @datafire/amazonaws_mediapackage

Client library for AWS Elemental MediaPackage

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediapackage
```
```js
let amazonaws_mediapackage = require('@datafire/amazonaws_mediapackage').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Elemental MediaPackage

## Actions

### ListChannels



```js
amazonaws_mediapackage.ListChannels({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### CreateChannel



```js
amazonaws_mediapackage.CreateChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A collection of tags associated with a resource
  * description `string`: A short text description of the Channel.
  * id **required** `string`: The ID of the Channel. The ID must be unique within the region and it

#### Output
* output [CreateChannelResponse](#createchannelresponse)

### DeleteChannel



```js
amazonaws_mediapackage.DeleteChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### DescribeChannel



```js
amazonaws_mediapackage.DescribeChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribeChannelResponse](#describechannelresponse)

### UpdateChannel



```js
amazonaws_mediapackage.UpdateChannel({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * description `string`: A short text description of the Channel.

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

### ConfigureLogs



```js
amazonaws_mediapackage.ConfigureLogs({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * egressAccessLogs `object`: Configure egress access logging.
    * LogGroupName
  * ingressAccessLogs `object`: Configure ingress access logging.
    * LogGroupName

#### Output
* output [ConfigureLogsResponse](#configurelogsresponse)

### RotateChannelCredentials



```js
amazonaws_mediapackage.RotateChannelCredentials({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [RotateChannelCredentialsResponse](#rotatechannelcredentialsresponse)

### RotateIngestEndpointCredentials



```js
amazonaws_mediapackage.RotateIngestEndpointCredentials({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * ingestEndpointId `string`

#### Output
* output [RotateIngestEndpointCredentialsResponse](#rotateingestendpointcredentialsresponse)

### ListHarvestJobs



```js
amazonaws_mediapackage.ListHarvestJobs({}, context)
```

#### Input
* input `object`
  * includeChannelId `string`
  * includeStatus `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListHarvestJobsResponse](#listharvestjobsresponse)

### CreateHarvestJob



```js
amazonaws_mediapackage.CreateHarvestJob({
  "endTime": "",
  "id": "",
  "originEndpointId": "",
  "s3Destination": {},
  "startTime": ""
}, context)
```

#### Input
* input `object`
  * endTime **required** `string`: The end of the time-window which will be harvested
  * id **required** `string`: The ID of the HarvestJob. The ID must be unique within the region
  * originEndpointId **required** `string`: The ID of the OriginEndpoint that the HarvestJob will harvest from.
  * s3Destination **required** `object`: Configuration parameters for where in an S3 bucket to place the harvested content
    * BucketName
    * ManifestKey
    * RoleArn
  * startTime **required** `string`: The start of the time-window which will be harvested

#### Output
* output [CreateHarvestJobResponse](#createharvestjobresponse)

### DescribeHarvestJob



```js
amazonaws_mediapackage.DescribeHarvestJob({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribeHarvestJobResponse](#describeharvestjobresponse)

### ListOriginEndpoints



```js
amazonaws_mediapackage.ListOriginEndpoints({}, context)
```

#### Input
* input `object`
  * channelId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListOriginEndpointsResponse](#listoriginendpointsresponse)

### CreateOriginEndpoint



```js
amazonaws_mediapackage.CreateOriginEndpoint({
  "channelId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A collection of tags associated with a resource
  * authorization `object`: CDN Authorization credentials
    * CdnIdentifierSecret
    * SecretsRoleArn
  * channelId **required** `string`: The ID of the Channel that the OriginEndpoint will be associated with.
  * cmafPackage `object`: A Common Media Application Format (CMAF) packaging configuration.
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * dashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * description `string`: A short text description of the OriginEndpoint.
  * hlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * id **required** `string`: The ID of the OriginEndpoint.  The ID must be unique within the region
  * manifestName `string`: A short string that will be used as the filename of the OriginEndpoint URL (defaults to "index").
  * mssPackage `object`: A Microsoft Smooth Streaming (MSS) packaging configuration.
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * origination `string` (values: ALLOW, DENY): Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
  * startoverWindowSeconds `integer`: Maximum duration (seconds) of content to retain for startover playback.
  * timeDelaySeconds `integer`: Amount of delay (seconds) to enforce on the playback of live content.
  * whitelist `array`: A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
    * items [__string](#__string)

#### Output
* output [CreateOriginEndpointResponse](#createoriginendpointresponse)

### DeleteOriginEndpoint



```js
amazonaws_mediapackage.DeleteOriginEndpoint({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### DescribeOriginEndpoint



```js
amazonaws_mediapackage.DescribeOriginEndpoint({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribeOriginEndpointResponse](#describeoriginendpointresponse)

### UpdateOriginEndpoint



```js
amazonaws_mediapackage.UpdateOriginEndpoint({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * authorization `object`: CDN Authorization credentials
    * CdnIdentifierSecret
    * SecretsRoleArn
  * cmafPackage `object`: A Common Media Application Format (CMAF) packaging configuration.
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * dashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * description `string`: A short text description of the OriginEndpoint.
  * hlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * manifestName `string`: A short string that will be appended to the end of the Endpoint URL.
  * mssPackage `object`: A Microsoft Smooth Streaming (MSS) packaging configuration.
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * origination `string` (values: ALLOW, DENY): Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint
  * startoverWindowSeconds `integer`: Maximum duration (in seconds) of content to retain for startover playback.
  * timeDelaySeconds `integer`: Amount of delay (in seconds) to enforce on the playback of live content.
  * whitelist `array`: A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.
    * items [__string](#__string)

#### Output
* output [UpdateOriginEndpointResponse](#updateoriginendpointresponse)

### ListTagsForResource



```js
amazonaws_mediapackage.ListTagsForResource({
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
amazonaws_mediapackage.TagResource({
  "resource-arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags **required** `object`

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_mediapackage.UntagResource({
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



## Definitions

### AdMarkers
* AdMarkers `string` (values: NONE, SCTE35_ENHANCED, PASSTHROUGH, DATERANGE)

### AdTriggers
* AdTriggers `array`: A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no
  * items [__AdTriggersElement](#__adtriggerselement)

### AdsOnDeliveryRestrictions
* AdsOnDeliveryRestrictions `string` (values: NONE, RESTRICTED, UNRESTRICTED, BOTH): This setting allows the delivery restriction flags on SCTE-35 segmentation descriptors to

### Authorization
* Authorization `object`: CDN Authorization credentials
  * CdnIdentifierSecret **required**
  * SecretsRoleArn **required**

### Channel
* Channel `object`: A Channel resource configuration.
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### CmafEncryption
* CmafEncryption `object`: A Common Media Application Format (CMAF) encryption configuration.
  * KeyRotationIntervalSeconds
  * SpekeKeyProvider **required**
    * CertificateArn
    * ResourceId **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### CmafPackage
* CmafPackage `object`: A Common Media Application Format (CMAF) packaging configuration.
  * Encryption
    * KeyRotationIntervalSeconds
    * SpekeKeyProvider **required**
      * CertificateArn
      * ResourceId **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * HlsManifests
    * items [HlsManifest](#hlsmanifest)
  * SegmentDurationSeconds
  * SegmentPrefix
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### CmafPackageCreateOrUpdateParameters
* CmafPackageCreateOrUpdateParameters `object`: A Common Media Application Format (CMAF) packaging configuration.
  * Encryption
    * KeyRotationIntervalSeconds
    * SpekeKeyProvider **required**
      * CertificateArn
      * ResourceId **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * HlsManifests
    * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)
  * SegmentDurationSeconds
  * SegmentPrefix
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### ConfigureLogsRequest
* ConfigureLogsRequest `object`: the option to configure log subscription.
  * EgressAccessLogs
    * LogGroupName
  * IngressAccessLogs
    * LogGroupName

### ConfigureLogsResponse
* ConfigureLogsResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### CreateChannelRequest
* CreateChannelRequest `object`: A new Channel configuration.
  * Description
  * Id **required**
  * Tags

### CreateChannelResponse
* CreateChannelResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### CreateHarvestJobRequest
* CreateHarvestJobRequest `object`: Configuration parameters used to create a new HarvestJob.
  * EndTime **required**
  * Id **required**
  * OriginEndpointId **required**
  * S3Destination **required**
    * BucketName **required**
    * ManifestKey **required**
    * RoleArn **required**
  * StartTime **required**

### CreateHarvestJobResponse
* CreateHarvestJobResponse `object`
  * Arn
  * ChannelId
  * CreatedAt
  * EndTime
  * Id
  * OriginEndpointId
  * S3Destination
    * BucketName **required**
    * ManifestKey **required**
    * RoleArn **required**
  * StartTime
  * Status

### CreateOriginEndpointRequest
* CreateOriginEndpointRequest `object`: Configuration parameters used to create a new OriginEndpoint.
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * ChannelId **required**
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * Id **required**
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * Tags
  * TimeDelaySeconds
  * Whitelist
    * items [__string](#__string)

### CreateOriginEndpointResponse
* CreateOriginEndpointResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * ChannelId
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * Id
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * Tags
  * TimeDelaySeconds
  * Url
  * Whitelist
    * items [__string](#__string)

### DashEncryption
* DashEncryption `object`: A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
  * KeyRotationIntervalSeconds
  * SpekeKeyProvider **required**
    * CertificateArn
    * ResourceId **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### DashPackage
* DashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
  * AdTriggers
    * items [__AdTriggersElement](#__adtriggerselement)
  * AdsOnDeliveryRestrictions
  * Encryption
    * KeyRotationIntervalSeconds
    * SpekeKeyProvider **required**
      * CertificateArn
      * ResourceId **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * ManifestLayout
  * ManifestWindowSeconds
  * MinBufferTimeSeconds
  * MinUpdatePeriodSeconds
  * PeriodTriggers
    * items [__PeriodTriggersElement](#__periodtriggerselement)
  * Profile
  * SegmentDurationSeconds
  * SegmentTemplateFormat
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder
  * SuggestedPresentationDelaySeconds
  * UtcTiming
  * UtcTimingUri

### DeleteChannelRequest
* DeleteChannelRequest `object`

### DeleteChannelResponse
* DeleteChannelResponse `object`

### DeleteOriginEndpointRequest
* DeleteOriginEndpointRequest `object`

### DeleteOriginEndpointResponse
* DeleteOriginEndpointResponse `object`

### DescribeChannelRequest
* DescribeChannelRequest `object`

### DescribeChannelResponse
* DescribeChannelResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### DescribeHarvestJobRequest
* DescribeHarvestJobRequest `object`

### DescribeHarvestJobResponse
* DescribeHarvestJobResponse `object`
  * Arn
  * ChannelId
  * CreatedAt
  * EndTime
  * Id
  * OriginEndpointId
  * S3Destination
    * BucketName **required**
    * ManifestKey **required**
    * RoleArn **required**
  * StartTime
  * Status

### DescribeOriginEndpointRequest
* DescribeOriginEndpointRequest `object`

### DescribeOriginEndpointResponse
* DescribeOriginEndpointResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * ChannelId
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * Id
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * Tags
  * TimeDelaySeconds
  * Url
  * Whitelist
    * items [__string](#__string)

### EgressAccessLogs
* EgressAccessLogs `object`: Configure egress access logging.
  * LogGroupName

### EncryptionMethod
* EncryptionMethod `string` (values: AES_128, SAMPLE_AES)

### ForbiddenException


### HarvestJob
* HarvestJob `object`: A HarvestJob resource configuration
  * Arn
  * ChannelId
  * CreatedAt
  * EndTime
  * Id
  * OriginEndpointId
  * S3Destination
    * BucketName **required**
    * ManifestKey **required**
    * RoleArn **required**
  * StartTime
  * Status

### HlsEncryption
* HlsEncryption `object`: An HTTP Live Streaming (HLS) encryption configuration.
  * ConstantInitializationVector
  * EncryptionMethod
  * KeyRotationIntervalSeconds
  * RepeatExtXKey
  * SpekeKeyProvider **required**
    * CertificateArn
    * ResourceId **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### HlsIngest
* HlsIngest `object`: An HTTP Live Streaming (HLS) ingest resource configuration.
  * IngestEndpoints
    * items [IngestEndpoint](#ingestendpoint)

### HlsManifest
* HlsManifest `object`: A HTTP Live Streaming (HLS) manifest configuration.
  * AdMarkers
  * Id **required**
  * IncludeIframeOnlyStream
  * ManifestName
  * PlaylistType
  * PlaylistWindowSeconds
  * ProgramDateTimeIntervalSeconds
  * Url

### HlsManifestCreateOrUpdateParameters
* HlsManifestCreateOrUpdateParameters `object`: A HTTP Live Streaming (HLS) manifest configuration.
  * AdMarkers
  * AdTriggers
    * items [__AdTriggersElement](#__adtriggerselement)
  * AdsOnDeliveryRestrictions
  * Id **required**
  * IncludeIframeOnlyStream
  * ManifestName
  * PlaylistType
  * PlaylistWindowSeconds
  * ProgramDateTimeIntervalSeconds

### HlsPackage
* HlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
  * AdMarkers
  * AdTriggers
    * items [__AdTriggersElement](#__adtriggerselement)
  * AdsOnDeliveryRestrictions
  * Encryption
    * ConstantInitializationVector
    * EncryptionMethod
    * KeyRotationIntervalSeconds
    * RepeatExtXKey
    * SpekeKeyProvider **required**
      * CertificateArn
      * ResourceId **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * IncludeIframeOnlyStream
  * PlaylistType
  * PlaylistWindowSeconds
  * ProgramDateTimeIntervalSeconds
  * SegmentDurationSeconds
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder
  * UseAudioRenditionGroup

### IngestEndpoint
* IngestEndpoint `object`: An endpoint for ingesting source content for a Channel.
  * Id
  * Password
  * Url
  * Username

### IngressAccessLogs
* IngressAccessLogs `object`: Configure ingress access logging.
  * LogGroupName

### InternalServerErrorException


### ListChannelsRequest
* ListChannelsRequest `object`

### ListChannelsResponse
* ListChannelsResponse `object`
  * Channels
    * items [Channel](#channel)
  * NextToken

### ListHarvestJobsRequest
* ListHarvestJobsRequest `object`

### ListHarvestJobsResponse
* ListHarvestJobsResponse `object`
  * HarvestJobs
    * items [HarvestJob](#harvestjob)
  * NextToken

### ListOriginEndpointsRequest
* ListOriginEndpointsRequest `object`

### ListOriginEndpointsResponse
* ListOriginEndpointsResponse `object`
  * NextToken
  * OriginEndpoints
    * items [OriginEndpoint](#originendpoint)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### ManifestLayout
* ManifestLayout `string` (values: FULL, COMPACT)

### MaxResults
* MaxResults `integer`

### MssEncryption
* MssEncryption `object`: A Microsoft Smooth Streaming (MSS) encryption configuration.
  * SpekeKeyProvider **required**
    * CertificateArn
    * ResourceId **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### MssPackage
* MssPackage `object`: A Microsoft Smooth Streaming (MSS) packaging configuration.
  * Encryption
    * SpekeKeyProvider **required**
      * CertificateArn
      * ResourceId **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * ManifestWindowSeconds
  * SegmentDurationSeconds
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### NotFoundException


### OriginEndpoint
* OriginEndpoint `object`: An OriginEndpoint resource configuration.
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * ChannelId
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * Id
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * Tags
  * TimeDelaySeconds
  * Url
  * Whitelist
    * items [__string](#__string)

### Origination
* Origination `string` (values: ALLOW, DENY)

### PlaylistType
* PlaylistType `string` (values: NONE, EVENT, VOD)

### Profile
* Profile `string` (values: NONE, HBBTV_1_5)

### RotateChannelCredentialsRequest
* RotateChannelCredentialsRequest `object`

### RotateChannelCredentialsResponse
* RotateChannelCredentialsResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### RotateIngestEndpointCredentialsRequest
* RotateIngestEndpointCredentialsRequest `object`

### RotateIngestEndpointCredentialsResponse
* RotateIngestEndpointCredentialsResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### S3Destination
* S3Destination `object`: Configuration parameters for where in an S3 bucket to place the harvested content
  * BucketName **required**
  * ManifestKey **required**
  * RoleArn **required**

### SegmentTemplateFormat
* SegmentTemplateFormat `string` (values: NUMBER_WITH_TIMELINE, TIME_WITH_TIMELINE, NUMBER_WITH_DURATION)

### ServiceUnavailableException


### SpekeKeyProvider
* SpekeKeyProvider `object`: A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * CertificateArn
  * ResourceId **required**
  * RoleArn **required**
  * SystemIds **required**
    * items [__string](#__string)
  * Url **required**

### Status
* Status `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### StreamOrder
* StreamOrder `string` (values: ORIGINAL, VIDEO_BITRATE_ASCENDING, VIDEO_BITRATE_DESCENDING)

### StreamSelection
* StreamSelection `object`: A StreamSelection configuration.
  * MaxVideoBitsPerSecond
  * MinVideoBitsPerSecond
  * StreamOrder

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### Tags
* Tags `object`: A collection of tags associated with a resource

### TooManyRequestsException


### UnprocessableEntityException


### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateChannelRequest
* UpdateChannelRequest `object`: Configuration parameters used to update the Channel.
  * Description

### UpdateChannelResponse
* UpdateChannelResponse `object`
  * Arn
  * Description
  * EgressAccessLogs
    * LogGroupName
  * HlsIngest
    * IngestEndpoints
      * items [IngestEndpoint](#ingestendpoint)
  * Id
  * IngressAccessLogs
    * LogGroupName
  * Tags

### UpdateOriginEndpointRequest
* UpdateOriginEndpointRequest `object`: Configuration parameters used to update an existing OriginEndpoint.
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * TimeDelaySeconds
  * Whitelist
    * items [__string](#__string)

### UpdateOriginEndpointResponse
* UpdateOriginEndpointResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * ChannelId
  * CmafPackage
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * SegmentPrefix
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * DashPackage
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * KeyRotationIntervalSeconds
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestLayout
    * ManifestWindowSeconds
    * MinBufferTimeSeconds
    * MinUpdatePeriodSeconds
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * Profile
    * SegmentDurationSeconds
    * SegmentTemplateFormat
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * SuggestedPresentationDelaySeconds
    * UtcTiming
    * UtcTimingUri
  * Description
  * HlsPackage
    * AdMarkers
    * AdTriggers
      * items [__AdTriggersElement](#__adtriggerselement)
    * AdsOnDeliveryRestrictions
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * KeyRotationIntervalSeconds
      * RepeatExtXKey
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * IncludeIframeOnlyStream
    * PlaylistType
    * PlaylistWindowSeconds
    * ProgramDateTimeIntervalSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
    * UseAudioRenditionGroup
  * Id
  * ManifestName
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * CertificateArn
        * ResourceId **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * ManifestWindowSeconds
    * SegmentDurationSeconds
    * StreamSelection
      * MaxVideoBitsPerSecond
      * MinVideoBitsPerSecond
      * StreamOrder
  * Origination
  * StartoverWindowSeconds
  * Tags
  * TimeDelaySeconds
  * Url
  * Whitelist
    * items [__string](#__string)

### UtcTiming
* UtcTiming `string` (values: NONE, HTTP-HEAD, HTTP-ISO)

### __AdTriggersElement
* __AdTriggersElement `string` (values: SPLICE_INSERT, BREAK, PROVIDER_ADVERTISEMENT, DISTRIBUTOR_ADVERTISEMENT, PROVIDER_PLACEMENT_OPPORTUNITY, DISTRIBUTOR_PLACEMENT_OPPORTUNITY, PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY, DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY)

### __PeriodTriggersElement
* __PeriodTriggersElement `string` (values: ADS)

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __listOfChannel
* __listOfChannel `array`
  * items [Channel](#channel)

### __listOfHarvestJob
* __listOfHarvestJob `array`
  * items [HarvestJob](#harvestjob)

### __listOfHlsManifest
* __listOfHlsManifest `array`
  * items [HlsManifest](#hlsmanifest)

### __listOfHlsManifestCreateOrUpdateParameters
* __listOfHlsManifestCreateOrUpdateParameters `array`
  * items [HlsManifestCreateOrUpdateParameters](#hlsmanifestcreateorupdateparameters)

### __listOfIngestEndpoint
* __listOfIngestEndpoint `array`
  * items [IngestEndpoint](#ingestendpoint)

### __listOfOriginEndpoint
* __listOfOriginEndpoint `array`
  * items [OriginEndpoint](#originendpoint)

### __listOf__PeriodTriggersElement
* __listOf__PeriodTriggersElement `array`
  * items [__PeriodTriggersElement](#__periodtriggerselement)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`


