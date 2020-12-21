# @datafire/amazonaws_mediatailor

Client library for AWS MediaTailor

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediatailor
```
```js
let amazonaws_mediatailor = require('@datafire/amazonaws_mediatailor').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Use the AWS Elemental MediaTailor SDK to configure scalable ad insertion for your live and VOD content. With AWS Elemental MediaTailor, you can serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the AWS Elemental MediaTailor User Guide.<p>Through the SDK, you manage AWS Elemental MediaTailor configurations the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>

## Actions

### PutPlaybackConfiguration



```js
amazonaws_mediatailor.PutPlaybackConfiguration({}, context)
```

#### Input
* input `object`
  * tags `object`: The tags to assign to the playback configuration. 
  * AdDecisionServerUrl `string`: The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
  * AvailSuppression `object`: The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
    * Mode
    * Value
  * Bumper `object`: The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. 
    * EndUrl
    * StartUrl
  * CdnConfiguration `object`: The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
    * AdSegmentUrlPrefix
    * ContentSegmentUrlPrefix
  * DashConfiguration `object`: The configuration for DASH PUT operations. 
    * MpdLocation
    * OriginManifestType
  * LivePreRollConfiguration `object`: The configuration for pre-roll ad insertion.
    * AdDecisionServerUrl
    * MaxDurationSeconds
  * ManifestProcessingRules `object`: The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
    * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)
  * Name `string`: The identifier for the playback configuration.
  * PersonalizationThresholdSeconds `integer`: The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
  * SlateAdUrl `string`: The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
  * TranscodeProfileName `string`: The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
  * VideoContentSourceUrl `string`: The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.

#### Output
* output [PutPlaybackConfigurationResponse](#putplaybackconfigurationresponse)

### DeletePlaybackConfiguration



```js
amazonaws_mediatailor.DeletePlaybackConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
*Output schema unknown*

### GetPlaybackConfiguration



```js
amazonaws_mediatailor.GetPlaybackConfiguration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [GetPlaybackConfigurationResponse](#getplaybackconfigurationresponse)

### ListPlaybackConfigurations



```js
amazonaws_mediatailor.ListPlaybackConfigurations({}, context)
```

#### Input
* input `object`
  * MaxResults `integer`
  * NextToken `string`

#### Output
* output [ListPlaybackConfigurationsResponse](#listplaybackconfigurationsresponse)

### ListTagsForResource



```js
amazonaws_mediatailor.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_mediatailor.TagResource({
  "ResourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tags **required** `object`: A comma-separated list of tag key:value pairs. For example: 

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_mediatailor.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### AdMarkerPassthrough
* AdMarkerPassthrough `object`: The configuration for Ad Marker Passthrough. Ad marker passthrough can be used to pass ad markers from the origin to the customized manifest.
  * Enabled

### AvailSuppression
* AvailSuppression `object`: The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
  * Mode
  * Value

### BadRequestException


### Bumper
* Bumper `object`: The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. 
  * EndUrl
  * StartUrl

### CdnConfiguration
* CdnConfiguration `object`: The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
  * AdSegmentUrlPrefix
  * ContentSegmentUrlPrefix

### DashConfiguration
* DashConfiguration `object`: The configuration for DASH content. 
  * ManifestEndpointPrefix
  * MpdLocation
  * OriginManifestType

### DashConfigurationForPut
* DashConfigurationForPut `object`: The configuration for DASH PUT operations. 
  * MpdLocation
  * OriginManifestType

### DeletePlaybackConfigurationRequest
* DeletePlaybackConfigurationRequest `object`

### DeletePlaybackConfigurationResponse
* DeletePlaybackConfigurationResponse `object`

### GetPlaybackConfigurationRequest
* GetPlaybackConfigurationRequest `object`

### GetPlaybackConfigurationResponse
* GetPlaybackConfigurationResponse `object`
  * AdDecisionServerUrl
  * AvailSuppression
    * Mode
    * Value
  * Bumper
    * EndUrl
    * StartUrl
  * CdnConfiguration
    * AdSegmentUrlPrefix
    * ContentSegmentUrlPrefix
  * DashConfiguration
    * ManifestEndpointPrefix
    * MpdLocation
    * OriginManifestType
  * HlsConfiguration
    * ManifestEndpointPrefix
  * LivePreRollConfiguration
    * AdDecisionServerUrl
    * MaxDurationSeconds
  * ManifestProcessingRules
    * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)
  * Name
  * PersonalizationThresholdSeconds
  * PlaybackConfigurationArn
  * PlaybackEndpointPrefix
  * SessionInitializationEndpointPrefix
  * SlateAdUrl
  * Tags
  * TranscodeProfileName
  * VideoContentSourceUrl

### HlsConfiguration
* HlsConfiguration `object`: The configuration for HLS content. 
  * ManifestEndpointPrefix

### ListPlaybackConfigurationsRequest
* ListPlaybackConfigurationsRequest `object`

### ListPlaybackConfigurationsResponse
* ListPlaybackConfigurationsResponse `object`
  * Items
    * items [PlaybackConfiguration](#playbackconfiguration)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### LivePreRollConfiguration
* LivePreRollConfiguration `object`: The configuration for pre-roll ad insertion.
  * AdDecisionServerUrl
  * MaxDurationSeconds

### ManifestProcessingRules
* ManifestProcessingRules `object`: The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
  * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)

### Mode
* Mode `string` (values: OFF, BEHIND_LIVE_EDGE)

### OriginManifestType
* OriginManifestType `string` (values: SINGLE_PERIOD, MULTI_PERIOD)

### PlaybackConfiguration
* PlaybackConfiguration `object`: The AWSMediaTailor configuration.
  * AdDecisionServerUrl
  * AvailSuppression
    * Mode
    * Value
  * Bumper
    * EndUrl
    * StartUrl
  * CdnConfiguration
    * AdSegmentUrlPrefix
    * ContentSegmentUrlPrefix
  * DashConfiguration
    * ManifestEndpointPrefix
    * MpdLocation
    * OriginManifestType
  * HlsConfiguration
    * ManifestEndpointPrefix
  * ManifestProcessingRules
    * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)
  * Name
  * PersonalizationThresholdSeconds
  * PlaybackConfigurationArn
  * PlaybackEndpointPrefix
  * SessionInitializationEndpointPrefix
  * SlateAdUrl
  * Tags
  * TranscodeProfileName
  * VideoContentSourceUrl

### PutPlaybackConfigurationRequest
* PutPlaybackConfigurationRequest `object`
  * AdDecisionServerUrl
  * AvailSuppression
    * Mode
    * Value
  * Bumper
    * EndUrl
    * StartUrl
  * CdnConfiguration
    * AdSegmentUrlPrefix
    * ContentSegmentUrlPrefix
  * DashConfiguration
    * MpdLocation
    * OriginManifestType
  * LivePreRollConfiguration
    * AdDecisionServerUrl
    * MaxDurationSeconds
  * ManifestProcessingRules
    * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)
  * Name
  * PersonalizationThresholdSeconds
  * SlateAdUrl
  * Tags
  * TranscodeProfileName
  * VideoContentSourceUrl

### PutPlaybackConfigurationResponse
* PutPlaybackConfigurationResponse `object`
  * AdDecisionServerUrl
  * AvailSuppression
    * Mode
    * Value
  * Bumper
    * EndUrl
    * StartUrl
  * CdnConfiguration
    * AdSegmentUrlPrefix
    * ContentSegmentUrlPrefix
  * DashConfiguration
    * ManifestEndpointPrefix
    * MpdLocation
    * OriginManifestType
  * HlsConfiguration
    * ManifestEndpointPrefix
  * LivePreRollConfiguration
    * AdDecisionServerUrl
    * MaxDurationSeconds
  * ManifestProcessingRules
    * AdMarkerPassthrough [AdMarkerPassthrough](#admarkerpassthrough)
  * Name
  * PersonalizationThresholdSeconds
  * PlaybackConfigurationArn
  * PlaybackEndpointPrefix
  * SessionInitializationEndpointPrefix
  * SlateAdUrl
  * Tags
  * TranscodeProfileName
  * VideoContentSourceUrl

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### UntagResourceRequest
* UntagResourceRequest `object`

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __integerMin1
* __integerMin1 `integer`

### __integerMin1Max100
* __integerMin1Max100 `integer`

### __listOfPlaybackConfigurations
* __listOfPlaybackConfigurations `array`
  * items [PlaybackConfiguration](#playbackconfiguration)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`


