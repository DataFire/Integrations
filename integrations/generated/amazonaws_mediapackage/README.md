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

amazonaws_mediapackage.ListChannels({}).then(data => {
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
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### CreateChannel



```js
amazonaws_mediapackage.CreateChannel({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Description [__string](#__string)
  * Id **required** [__string](#__string)

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
  * Description [__string](#__string)

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

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

### ListOriginEndpoints



```js
amazonaws_mediapackage.ListOriginEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListOriginEndpointsResponse](#listoriginendpointsresponse)

### CreateOriginEndpoint



```js
amazonaws_mediapackage.CreateOriginEndpoint({
  "ChannelId": "",
  "Id": ""
}, context)
```

#### Input
* input `object`
  * ChannelId **required** [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id **required** [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

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
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

#### Output
* output [UpdateOriginEndpointResponse](#updateoriginendpointresponse)



## Definitions

### AdMarkers
* AdMarkers `string` (values: NONE, SCTE35_ENHANCED, PASSTHROUGH)

### Channel
* Channel `object`: A Channel resource configuration.
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * HlsIngest [HlsIngest](#hlsingest)
  * Id [__string](#__string)

### ChannelCreateParameters
* ChannelCreateParameters `object`: Configuration parameters for a new Channel.
  * Description [__string](#__string)
  * Id [__string](#__string)

### ChannelList
* ChannelList `object`: A collection of Channel records.
  * Channels [ListOfChannel](#listofchannel)
  * NextToken [__string](#__string)

### ChannelUpdateParameters
* ChannelUpdateParameters `object`: Configuration parameters for updating an existing Channel.
  * Description [__string](#__string)

### CreateChannelRequest
* CreateChannelRequest `object`: A new Channel configuration.
  * Description [__string](#__string)
  * Id **required** [__string](#__string)

### CreateChannelResponse
* CreateChannelResponse `object`
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * HlsIngest [HlsIngest](#hlsingest)
  * Id [__string](#__string)

### CreateOriginEndpointRequest
* CreateOriginEndpointRequest `object`: Configuration parameters used to create a new OriginEndpoint.
  * ChannelId **required** [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id **required** [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

### CreateOriginEndpointResponse
* CreateOriginEndpointResponse `object`
  * Arn [__string](#__string)
  * ChannelId [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Url [__string](#__string)
  * Whitelist [ListOf__string](#listof__string)

### DashEncryption
* DashEncryption `object`: A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
  * KeyRotationIntervalSeconds [__integer](#__integer)
  * SpekeKeyProvider **required** [SpekeKeyProvider](#spekekeyprovider)

### DashPackage
* DashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
  * Encryption [DashEncryption](#dashencryption)
  * ManifestWindowSeconds [__integer](#__integer)
  * MinBufferTimeSeconds [__integer](#__integer)
  * MinUpdatePeriodSeconds [__integer](#__integer)
  * Profile [Profile](#profile)
  * SegmentDurationSeconds [__integer](#__integer)
  * StreamSelection [StreamSelection](#streamselection)
  * SuggestedPresentationDelaySeconds [__integer](#__integer)

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
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * HlsIngest [HlsIngest](#hlsingest)
  * Id [__string](#__string)

### DescribeOriginEndpointRequest
* DescribeOriginEndpointRequest `object`

### DescribeOriginEndpointResponse
* DescribeOriginEndpointResponse `object`
  * Arn [__string](#__string)
  * ChannelId [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Url [__string](#__string)
  * Whitelist [ListOf__string](#listof__string)

### EncryptionMethod
* EncryptionMethod `string` (values: AES_128, SAMPLE_AES)

### ForbiddenException
* ForbiddenException `object`: The client is not authorized to access the requested resource.
  * Message [__string](#__string)

### HlsEncryption
* HlsEncryption `object`: An HTTP Live Streaming (HLS) encryption configuration.
  * ConstantInitializationVector [__string](#__string)
  * EncryptionMethod [EncryptionMethod](#encryptionmethod)
  * KeyRotationIntervalSeconds [__integer](#__integer)
  * RepeatExtXKey [__boolean](#__boolean)
  * SpekeKeyProvider **required** [SpekeKeyProvider](#spekekeyprovider)

### HlsIngest
* HlsIngest `object`: An HTTP Live Streaming (HLS) ingest resource configuration.
  * IngestEndpoints [ListOfIngestEndpoint](#listofingestendpoint)

### HlsPackage
* HlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
  * AdMarkers [AdMarkers](#admarkers)
  * Encryption [HlsEncryption](#hlsencryption)
  * IncludeIframeOnlyStream [__boolean](#__boolean)
  * PlaylistType [PlaylistType](#playlisttype)
  * PlaylistWindowSeconds [__integer](#__integer)
  * ProgramDateTimeIntervalSeconds [__integer](#__integer)
  * SegmentDurationSeconds [__integer](#__integer)
  * StreamSelection [StreamSelection](#streamselection)
  * UseAudioRenditionGroup [__boolean](#__boolean)

### IngestEndpoint
* IngestEndpoint `object`: An endpoint for ingesting source content for a Channel.
  * Password [__string](#__string)
  * Url [__string](#__string)
  * Username [__string](#__string)

### InternalServerErrorException
* InternalServerErrorException `object`: An unexpected error occurred.
  * Message [__string](#__string)

### ListChannelsRequest
* ListChannelsRequest `object`

### ListChannelsResponse
* ListChannelsResponse `object`
  * Channels [ListOfChannel](#listofchannel)
  * NextToken [__string](#__string)

### ListOfChannel
* ListOfChannel `array`
  * items [Channel](#channel)

### ListOfIngestEndpoint
* ListOfIngestEndpoint `array`
  * items [IngestEndpoint](#ingestendpoint)

### ListOfOriginEndpoint
* ListOfOriginEndpoint `array`
  * items [OriginEndpoint](#originendpoint)

### ListOf__string
* ListOf__string `array`
  * items [__string](#__string)

### ListOriginEndpointsRequest
* ListOriginEndpointsRequest `object`

### ListOriginEndpointsResponse
* ListOriginEndpointsResponse `object`
  * NextToken [__string](#__string)
  * OriginEndpoints [ListOfOriginEndpoint](#listoforiginendpoint)

### MaxResults
* MaxResults `integer`

### MssEncryption
* MssEncryption `object`: A Microsoft Smooth Streaming (MSS) encryption configuration.
  * SpekeKeyProvider **required** [SpekeKeyProvider](#spekekeyprovider)

### MssPackage
* MssPackage `object`: A Microsoft Smooth Streaming (MSS) packaging configuration.
  * Encryption [MssEncryption](#mssencryption)
  * ManifestWindowSeconds [__integer](#__integer)
  * SegmentDurationSeconds [__integer](#__integer)
  * StreamSelection [StreamSelection](#streamselection)

### NotFoundException
* NotFoundException `object`: The requested resource does not exist.
  * Message [__string](#__string)

### OriginEndpoint
* OriginEndpoint `object`: An OriginEndpoint resource configuration.
  * Arn [__string](#__string)
  * ChannelId [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Url [__string](#__string)
  * Whitelist [ListOf__string](#listof__string)

### OriginEndpointCreateParameters
* OriginEndpointCreateParameters `object`: Configuration parameters for a new OriginEndpoint.
  * ChannelId [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

### OriginEndpointList
* OriginEndpointList `object`: A collection of OriginEndpoint records.
  * NextToken [__string](#__string)
  * OriginEndpoints [ListOfOriginEndpoint](#listoforiginendpoint)

### OriginEndpointUpdateParameters
* OriginEndpointUpdateParameters `object`: Configuration parameters for updating an existing OriginEndpoint.
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

### PlaylistType
* PlaylistType `string` (values: NONE, EVENT, VOD)

### Profile
* Profile `string` (values: NONE, HBBTV_1_5)

### RotateChannelCredentialsRequest
* RotateChannelCredentialsRequest `object`

### RotateChannelCredentialsResponse
* RotateChannelCredentialsResponse `object`
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * HlsIngest [HlsIngest](#hlsingest)
  * Id [__string](#__string)

### ServiceUnavailableException
* ServiceUnavailableException `object`: An unexpected error occurred.
  * Message [__string](#__string)

### SpekeKeyProvider
* SpekeKeyProvider `object`: A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * ResourceId **required** [__string](#__string)
  * RoleArn **required** [__string](#__string)
  * SystemIds **required** [ListOf__string](#listof__string)
  * Url **required** [__string](#__string)

### StreamOrder
* StreamOrder `string` (values: ORIGINAL, VIDEO_BITRATE_ASCENDING, VIDEO_BITRATE_DESCENDING)

### StreamSelection
* StreamSelection `object`: A StreamSelection configuration.
  * MaxVideoBitsPerSecond [__integer](#__integer)
  * MinVideoBitsPerSecond [__integer](#__integer)
  * StreamOrder [StreamOrder](#streamorder)

### TooManyRequestsException
* TooManyRequestsException `object`: The client has exceeded their resource or throttling limits.
  * Message [__string](#__string)

### UnprocessableEntityException
* UnprocessableEntityException `object`: The parameters sent in the request are not valid.
  * Message [__string](#__string)

### UpdateChannelRequest
* UpdateChannelRequest `object`: Configuration parameters used to update the Channel.
  * Description [__string](#__string)

### UpdateChannelResponse
* UpdateChannelResponse `object`
  * Arn [__string](#__string)
  * Description [__string](#__string)
  * HlsIngest [HlsIngest](#hlsingest)
  * Id [__string](#__string)

### UpdateOriginEndpointRequest
* UpdateOriginEndpointRequest `object`: Configuration parameters used to update an existing OriginEndpoint.
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Whitelist [ListOf__string](#listof__string)

### UpdateOriginEndpointResponse
* UpdateOriginEndpointResponse `object`
  * Arn [__string](#__string)
  * ChannelId [__string](#__string)
  * DashPackage [DashPackage](#dashpackage)
  * Description [__string](#__string)
  * HlsPackage [HlsPackage](#hlspackage)
  * Id [__string](#__string)
  * ManifestName [__string](#__string)
  * MssPackage [MssPackage](#msspackage)
  * StartoverWindowSeconds [__integer](#__integer)
  * TimeDelaySeconds [__integer](#__integer)
  * Url [__string](#__string)
  * Whitelist [ListOf__string](#listof__string)

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


