# @datafire/amazonaws_mediapackage_vod

Client library for AWS Elemental MediaPackage VOD

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mediapackage_vod
```
```js
let amazonaws_mediapackage_vod = require('@datafire/amazonaws_mediapackage_vod').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Elemental MediaPackage VOD

## Actions

### ListAssets



```js
amazonaws_mediapackage_vod.ListAssets({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * packagingGroupId `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListAssetsResponse](#listassetsresponse)

### CreateAsset



```js
amazonaws_mediapackage_vod.CreateAsset({
  "id": "",
  "packagingGroupId": "",
  "sourceArn": "",
  "sourceRoleArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A collection of tags associated with a resource
  * id **required** `string`: The unique identifier for the Asset.
  * packagingGroupId **required** `string`: The ID of the PackagingGroup for the Asset.
  * resourceId `string`: The resource ID to include in SPEKE key requests.
  * sourceArn **required** `string`: ARN of the source object in S3.
  * sourceRoleArn **required** `string`: The IAM role ARN used to access the source S3 bucket.

#### Output
* output [CreateAssetResponse](#createassetresponse)

### DeleteAsset



```js
amazonaws_mediapackage_vod.DeleteAsset({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### DescribeAsset



```js
amazonaws_mediapackage_vod.DescribeAsset({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribeAssetResponse](#describeassetresponse)

### ListPackagingConfigurations



```js
amazonaws_mediapackage_vod.ListPackagingConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * packagingGroupId `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPackagingConfigurationsResponse](#listpackagingconfigurationsresponse)

### CreatePackagingConfiguration



```js
amazonaws_mediapackage_vod.CreatePackagingConfiguration({
  "id": "",
  "packagingGroupId": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A collection of tags associated with a resource
  * cmafPackage `object`: A CMAF packaging configuration.
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
  * dashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    * DashManifests
      * items [DashManifest](#dashmanifest)
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * SegmentDurationSeconds
    * SegmentTemplateFormat
  * hlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * UseAudioRenditionGroup
  * id **required** `string`: The ID of the PackagingConfiguration.
  * mssPackage `object`: A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * MssManifests
      * items [MssManifest](#mssmanifest)
    * SegmentDurationSeconds
  * packagingGroupId **required** `string`: The ID of a PackagingGroup.

#### Output
* output [CreatePackagingConfigurationResponse](#createpackagingconfigurationresponse)

### DeletePackagingConfiguration



```js
amazonaws_mediapackage_vod.DeletePackagingConfiguration({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### DescribePackagingConfiguration



```js
amazonaws_mediapackage_vod.DescribePackagingConfiguration({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribePackagingConfigurationResponse](#describepackagingconfigurationresponse)

### ListPackagingGroups



```js
amazonaws_mediapackage_vod.ListPackagingGroups({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPackagingGroupsResponse](#listpackaginggroupsresponse)

### CreatePackagingGroup



```js
amazonaws_mediapackage_vod.CreatePackagingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A collection of tags associated with a resource
  * authorization `object`: CDN Authorization credentials
    * CdnIdentifierSecret
    * SecretsRoleArn
  * id **required** `string`: The ID of the PackagingGroup.

#### Output
* output [CreatePackagingGroupResponse](#createpackaginggroupresponse)

### DeletePackagingGroup



```js
amazonaws_mediapackage_vod.DeletePackagingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### DescribePackagingGroup



```js
amazonaws_mediapackage_vod.DescribePackagingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DescribePackagingGroupResponse](#describepackaginggroupresponse)

### UpdatePackagingGroup



```js
amazonaws_mediapackage_vod.UpdatePackagingGroup({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * authorization `object`: CDN Authorization credentials
    * CdnIdentifierSecret
    * SecretsRoleArn

#### Output
* output [UpdatePackagingGroupResponse](#updatepackaginggroupresponse)

### ListTagsForResource



```js
amazonaws_mediapackage_vod.ListTagsForResource({
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
amazonaws_mediapackage_vod.TagResource({
  "resource-arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags **required** `object`: A collection of tags associated with a resource

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_mediapackage_vod.UntagResource({
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
* AdMarkers `string` (values: NONE, SCTE35_ENHANCED, PASSTHROUGH)

### AssetShallow
* AssetShallow `object`: A MediaPackage VOD Asset resource.
  * Arn
  * CreatedAt
  * Id
  * PackagingGroupId
  * ResourceId
  * SourceArn
  * SourceRoleArn
  * Tags

### Authorization
* Authorization `object`: CDN Authorization credentials
  * CdnIdentifierSecret **required**
  * SecretsRoleArn **required**

### CmafEncryption
* CmafEncryption `object`: A CMAF encryption configuration.
  * SpekeKeyProvider **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### CmafPackage
* CmafPackage `object`: A CMAF packaging configuration.
  * Encryption
    * SpekeKeyProvider **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * HlsManifests **required**
    * items [HlsManifest](#hlsmanifest)
  * SegmentDurationSeconds

### CreateAssetRequest
* CreateAssetRequest `object`: A new MediaPackage VOD Asset configuration.
  * Id **required**
  * PackagingGroupId **required**
  * ResourceId
  * SourceArn **required**
  * SourceRoleArn **required**
  * Tags

### CreateAssetResponse
* CreateAssetResponse `object`
  * Arn
  * CreatedAt
  * EgressEndpoints
    * items [EgressEndpoint](#egressendpoint)
  * Id
  * PackagingGroupId
  * ResourceId
  * SourceArn
  * SourceRoleArn
  * Tags

### CreatePackagingConfigurationRequest
* CreatePackagingConfigurationRequest `object`: A new MediaPackage VOD PackagingConfiguration resource configuration.
  * CmafPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
  * DashPackage
    * DashManifests **required**
      * items [DashManifest](#dashmanifest)
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * SegmentDurationSeconds
    * SegmentTemplateFormat
  * HlsPackage
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * UseAudioRenditionGroup
  * Id **required**
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * MssManifests **required**
      * items [MssManifest](#mssmanifest)
    * SegmentDurationSeconds
  * PackagingGroupId **required**
  * Tags

### CreatePackagingConfigurationResponse
* CreatePackagingConfigurationResponse `object`
  * Arn
  * CmafPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
  * DashPackage
    * DashManifests **required**
      * items [DashManifest](#dashmanifest)
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * SegmentDurationSeconds
    * SegmentTemplateFormat
  * HlsPackage
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * UseAudioRenditionGroup
  * Id
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * MssManifests **required**
      * items [MssManifest](#mssmanifest)
    * SegmentDurationSeconds
  * PackagingGroupId
  * Tags

### CreatePackagingGroupRequest
* CreatePackagingGroupRequest `object`: A new MediaPackage VOD PackagingGroup resource configuration.
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * Id **required**
  * Tags

### CreatePackagingGroupResponse
* CreatePackagingGroupResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * DomainName
  * Id
  * Tags

### DashEncryption
* DashEncryption `object`: A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
  * SpekeKeyProvider **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### DashManifest
* DashManifest `object`: A DASH manifest configuration.
  * ManifestLayout
  * ManifestName
  * MinBufferTimeSeconds
  * Profile
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### DashPackage
* DashPackage `object`: A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
  * DashManifests **required**
    * items [DashManifest](#dashmanifest)
  * Encryption
    * SpekeKeyProvider **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * PeriodTriggers
    * items [__PeriodTriggersElement](#__periodtriggerselement)
  * SegmentDurationSeconds
  * SegmentTemplateFormat

### DeleteAssetRequest
* DeleteAssetRequest `object`

### DeleteAssetResponse
* DeleteAssetResponse `object`

### DeletePackagingConfigurationRequest
* DeletePackagingConfigurationRequest `object`

### DeletePackagingConfigurationResponse
* DeletePackagingConfigurationResponse `object`

### DeletePackagingGroupRequest
* DeletePackagingGroupRequest `object`

### DeletePackagingGroupResponse
* DeletePackagingGroupResponse `object`

### DescribeAssetRequest
* DescribeAssetRequest `object`

### DescribeAssetResponse
* DescribeAssetResponse `object`
  * Arn
  * CreatedAt
  * EgressEndpoints
    * items [EgressEndpoint](#egressendpoint)
  * Id
  * PackagingGroupId
  * ResourceId
  * SourceArn
  * SourceRoleArn
  * Tags

### DescribePackagingConfigurationRequest
* DescribePackagingConfigurationRequest `object`

### DescribePackagingConfigurationResponse
* DescribePackagingConfigurationResponse `object`
  * Arn
  * CmafPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
  * DashPackage
    * DashManifests **required**
      * items [DashManifest](#dashmanifest)
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * SegmentDurationSeconds
    * SegmentTemplateFormat
  * HlsPackage
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * UseAudioRenditionGroup
  * Id
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * MssManifests **required**
      * items [MssManifest](#mssmanifest)
    * SegmentDurationSeconds
  * PackagingGroupId
  * Tags

### DescribePackagingGroupRequest
* DescribePackagingGroupRequest `object`

### DescribePackagingGroupResponse
* DescribePackagingGroupResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * DomainName
  * Id
  * Tags

### EgressEndpoint
* EgressEndpoint `object`: The endpoint URL used to access an Asset using one PackagingConfiguration.
  * PackagingConfigurationId
  * Url

### EncryptionMethod
* EncryptionMethod `string` (values: AES_128, SAMPLE_AES)

### ForbiddenException


### HlsEncryption
* HlsEncryption `object`: An HTTP Live Streaming (HLS) encryption configuration.
  * ConstantInitializationVector
  * EncryptionMethod
  * SpekeKeyProvider **required**
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### HlsManifest
* HlsManifest `object`: An HTTP Live Streaming (HLS) manifest configuration.
  * AdMarkers
  * IncludeIframeOnlyStream
  * ManifestName
  * ProgramDateTimeIntervalSeconds
  * RepeatExtXKey
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### HlsPackage
* HlsPackage `object`: An HTTP Live Streaming (HLS) packaging configuration.
  * Encryption
    * ConstantInitializationVector
    * EncryptionMethod
    * SpekeKeyProvider **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * HlsManifests **required**
    * items [HlsManifest](#hlsmanifest)
  * SegmentDurationSeconds
  * UseAudioRenditionGroup

### InternalServerErrorException


### ListAssetsRequest
* ListAssetsRequest `object`

### ListAssetsResponse
* ListAssetsResponse `object`
  * Assets
    * items [AssetShallow](#assetshallow)
  * NextToken

### ListPackagingConfigurationsRequest
* ListPackagingConfigurationsRequest `object`

### ListPackagingConfigurationsResponse
* ListPackagingConfigurationsResponse `object`
  * NextToken
  * PackagingConfigurations
    * items [PackagingConfiguration](#packagingconfiguration)

### ListPackagingGroupsRequest
* ListPackagingGroupsRequest `object`

### ListPackagingGroupsResponse
* ListPackagingGroupsResponse `object`
  * NextToken
  * PackagingGroups
    * items [PackagingGroup](#packaginggroup)

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
    * RoleArn **required**
    * SystemIds **required**
      * items [__string](#__string)
    * Url **required**

### MssManifest
* MssManifest `object`: A Microsoft Smooth Streaming (MSS) manifest configuration.
  * ManifestName
  * StreamSelection
    * MaxVideoBitsPerSecond
    * MinVideoBitsPerSecond
    * StreamOrder

### MssPackage
* MssPackage `object`: A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
  * Encryption
    * SpekeKeyProvider **required**
      * RoleArn **required**
      * SystemIds **required**
        * items [__string](#__string)
      * Url **required**
  * MssManifests **required**
    * items [MssManifest](#mssmanifest)
  * SegmentDurationSeconds

### NotFoundException


### PackagingConfiguration
* PackagingConfiguration `object`: A MediaPackage VOD PackagingConfiguration resource.
  * Arn
  * CmafPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
  * DashPackage
    * DashManifests **required**
      * items [DashManifest](#dashmanifest)
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * PeriodTriggers
      * items [__PeriodTriggersElement](#__periodtriggerselement)
    * SegmentDurationSeconds
    * SegmentTemplateFormat
  * HlsPackage
    * Encryption
      * ConstantInitializationVector
      * EncryptionMethod
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * HlsManifests **required**
      * items [HlsManifest](#hlsmanifest)
    * SegmentDurationSeconds
    * UseAudioRenditionGroup
  * Id
  * MssPackage
    * Encryption
      * SpekeKeyProvider **required**
        * RoleArn **required**
        * SystemIds **required**
          * items [__string](#__string)
        * Url **required**
    * MssManifests **required**
      * items [MssManifest](#mssmanifest)
    * SegmentDurationSeconds
  * PackagingGroupId
  * Tags

### PackagingGroup
* PackagingGroup `object`: A MediaPackage VOD PackagingGroup resource.
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * DomainName
  * Id
  * Tags

### Profile
* Profile `string` (values: NONE, HBBTV_1_5)

### SegmentTemplateFormat
* SegmentTemplateFormat `string` (values: NUMBER_WITH_TIMELINE, TIME_WITH_TIMELINE, NUMBER_WITH_DURATION)

### ServiceUnavailableException


### SpekeKeyProvider
* SpekeKeyProvider `object`: A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  * RoleArn **required**
  * SystemIds **required**
    * items [__string](#__string)
  * Url **required**

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

### UpdatePackagingGroupRequest
* UpdatePackagingGroupRequest `object`: A MediaPackage VOD PackagingGroup resource configuration.
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**

### UpdatePackagingGroupResponse
* UpdatePackagingGroupResponse `object`
  * Arn
  * Authorization
    * CdnIdentifierSecret **required**
    * SecretsRoleArn **required**
  * DomainName
  * Id
  * Tags

### __PeriodTriggersElement
* __PeriodTriggersElement `string` (values: ADS)

### __boolean
* __boolean `boolean`

### __integer
* __integer `integer`

### __listOfAssetShallow
* __listOfAssetShallow `array`
  * items [AssetShallow](#assetshallow)

### __listOfDashManifest
* __listOfDashManifest `array`
  * items [DashManifest](#dashmanifest)

### __listOfEgressEndpoint
* __listOfEgressEndpoint `array`
  * items [EgressEndpoint](#egressendpoint)

### __listOfHlsManifest
* __listOfHlsManifest `array`
  * items [HlsManifest](#hlsmanifest)

### __listOfMssManifest
* __listOfMssManifest `array`
  * items [MssManifest](#mssmanifest)

### __listOfPackagingConfiguration
* __listOfPackagingConfiguration `array`
  * items [PackagingConfiguration](#packagingconfiguration)

### __listOfPackagingGroup
* __listOfPackagingGroup `array`
  * items [PackagingGroup](#packaginggroup)

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


