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

amazonaws_mediatailor.PutPlaybackConfiguration({}).then(data => {
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
  * AdDecisionServerUrl [__string](#__string)
  * CdnConfiguration [CdnConfiguration](#cdnconfiguration)
  * Name [__string](#__string)
  * SlateAdUrl [__string](#__string)
  * VideoContentSourceUrl [__string](#__string)

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

#### Output
* output [ListPlaybackConfigurationsResponse](#listplaybackconfigurationsresponse)



## Definitions

### CdnConfiguration
* CdnConfiguration `object`: The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
  * AdSegmentUrlPrefix [__string](#__string)
  * ContentSegmentUrlPrefix [__string](#__string)

### DeletePlaybackConfigurationRequest
* DeletePlaybackConfigurationRequest `object`

### DeletePlaybackConfigurationResponse
* DeletePlaybackConfigurationResponse `object`

### Empty
* Empty `object`

### GetPlaybackConfigurationRequest
* GetPlaybackConfigurationRequest `object`

### GetPlaybackConfigurationResponse
* GetPlaybackConfigurationResponse `object`
  * AdDecisionServerUrl [__string](#__string)
  * CdnConfiguration [CdnConfiguration](#cdnconfiguration)
  * HlsConfiguration [HlsConfiguration](#hlsconfiguration)
  * Name [__string](#__string)
  * PlaybackEndpointPrefix [__string](#__string)
  * SessionInitializationEndpointPrefix [__string](#__string)
  * SlateAdUrl [__string](#__string)
  * VideoContentSourceUrl [__string](#__string)

### HlsConfiguration
* HlsConfiguration `object`: The configuration for HLS content. 
  * ManifestEndpointPrefix [__string](#__string)

### ListPlaybackConfigurationsRequest
* ListPlaybackConfigurationsRequest `object`

### ListPlaybackConfigurationsResponse
* ListPlaybackConfigurationsResponse `object`
  * Items [__listOfPlaybackConfigurations](#__listofplaybackconfigurations)
  * NextToken [__string](#__string)

### PlaybackConfiguration
* PlaybackConfiguration `object`: The AWSMediaTailor configuration.
  * AdDecisionServerUrl [__string](#__string)
  * CdnConfiguration [CdnConfiguration](#cdnconfiguration)
  * Name [__string](#__string)
  * SlateAdUrl [__string](#__string)
  * VideoContentSourceUrl [__string](#__string)

### PutPlaybackConfigurationRequest
* PutPlaybackConfigurationRequest `object`
  * AdDecisionServerUrl [__string](#__string)
  * CdnConfiguration [CdnConfiguration](#cdnconfiguration)
  * Name [__string](#__string)
  * SlateAdUrl [__string](#__string)
  * VideoContentSourceUrl [__string](#__string)

### PutPlaybackConfigurationResponse
* PutPlaybackConfigurationResponse `object`
  * AdDecisionServerUrl [__string](#__string)
  * CdnConfiguration [CdnConfiguration](#cdnconfiguration)
  * HlsConfiguration [HlsConfiguration](#hlsconfiguration)
  * Name [__string](#__string)
  * PlaybackEndpointPrefix [__string](#__string)
  * SessionInitializationEndpointPrefix [__string](#__string)
  * SlateAdUrl [__string](#__string)
  * VideoContentSourceUrl [__string](#__string)

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __integerMin1Max100
* __integerMin1Max100 `integer`

### __listOfPlaybackConfigurations
* __listOfPlaybackConfigurations `array`
  * items [PlaybackConfiguration](#playbackconfiguration)

### __long
* __long `integer`

### __string
* __string `string`


