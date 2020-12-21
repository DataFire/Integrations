# @datafire/amazonaws_kinesisvideo

Client library for Amazon Kinesis Video Streams

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesisvideo
```
```js
let amazonaws_kinesisvideo = require('@datafire/amazonaws_kinesisvideo').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p/>

## Actions

### ListTagsForResource



```js
amazonaws_kinesisvideo.ListTagsForResource({
  "ResourceARN": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`: If you specify this parameter and the result of a <code>ListTagsForResource</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags. 
  * ResourceARN **required** `string`: The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags.

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### TagResource



```js
amazonaws_kinesisvideo.TagResource({
  "ResourceARN": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`: The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags.
  * Tags **required** `array`: A list of tags to associate with the specified signaling channel. Each tag is a key-value pair.
    * items [Tag](#tag)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_kinesisvideo.UntagResource({
  "ResourceARN": "",
  "TagKeyList": []
}, context)
```

#### Input
* input `object`
  * ResourceARN **required** `string`: The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags.
  * TagKeyList **required** `array`: A list of the keys of the tags that you want to remove.
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### CreateSignalingChannel



```js
amazonaws_kinesisvideo.CreateSignalingChannel({
  "ChannelName": ""
}, context)
```

#### Input
* input `object`
  * ChannelName **required** `string`: A name for the signaling channel that you are creating. It must be unique for each AWS account and AWS Region.
  * ChannelType `string` (values: SINGLE_MASTER): A type of the signaling channel that you are creating. Currently, <code>SINGLE_MASTER</code> is the only supported channel type. 
  * SingleMasterConfiguration `object`: A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
    * MessageTtlSeconds
  * Tags `array`: A set of tags (key-value pairs) that you want to associate with this channel.
    * items [Tag](#tag)

#### Output
* output [CreateSignalingChannelOutput](#createsignalingchanneloutput)

### CreateStream



```js
amazonaws_kinesisvideo.CreateStream({
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * DataRetentionInHours `integer`: <p>The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream.</p> <p>The default value is 0, indicating that the stream does not persist data.</p> <p>When the <code>DataRetentionInHours</code> value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.</p>
  * DeviceName `string`: <p>The name of the device that is writing to the stream. </p> <note> <p>In the current implementation, Kinesis Video Streams does not use this name.</p> </note>
  * KmsKeyId `string`: <p>The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data.</p> <p>If no key ID is specified, the default, Kinesis Video-managed key (<code>aws/kinesisvideo</code>) is used.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters">DescribeKey</a>. </p>
  * MediaType `string`: <p>The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a> for guidelines.</p> <p>Example valid values include "video/h264" and "video/h264,audio/aac".</p> <p>This parameter is optional; the default value is <code>null</code> (or empty in JSON).</p>
  * StreamName **required** `string`: <p>A name for the stream that you are creating.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
  * Tags `object`: A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).

#### Output
* output [CreateStreamOutput](#createstreamoutput)

### DeleteSignalingChannel



```js
amazonaws_kinesisvideo.DeleteSignalingChannel({
  "ChannelARN": ""
}, context)
```

#### Input
* input `object`
  * ChannelARN **required** `string`: The Amazon Resource Name (ARN) of the signaling channel that you want to delete.
  * CurrentVersion `string`: The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the <code>DescribeSignalingChannel</code> or <code>ListSignalingChannels</code> API operations.

#### Output
* output [DeleteSignalingChannelOutput](#deletesignalingchanneloutput)

### DeleteStream



```js
amazonaws_kinesisvideo.DeleteStream({
  "StreamARN": ""
}, context)
```

#### Input
* input `object`
  * CurrentVersion `string`: <p>Optional: The version of the stream that you want to delete. </p> <p>Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the <code>DescribeStream</code> API.</p> <p>If not specified, only the <code>CreationTime</code> is checked before deleting the stream.</p>
  * StreamARN **required** `string`: The Amazon Resource Name (ARN) of the stream that you want to delete. 

#### Output
* output [DeleteStreamOutput](#deletestreamoutput)

### DescribeSignalingChannel



```js
amazonaws_kinesisvideo.DescribeSignalingChannel({}, context)
```

#### Input
* input `object`
  * ChannelARN `string`: The ARN of the signaling channel that you want to describe.
  * ChannelName `string`: The name of the signaling channel that you want to describe.

#### Output
* output [DescribeSignalingChannelOutput](#describesignalingchanneloutput)

### DescribeStream



```js
amazonaws_kinesisvideo.DescribeStream({}, context)
```

#### Input
* input `object`
  * StreamARN `string`: The Amazon Resource Name (ARN) of the stream.
  * StreamName `string`: The name of the stream.

#### Output
* output [DescribeStreamOutput](#describestreamoutput)

### GetDataEndpoint



```js
amazonaws_kinesisvideo.GetDataEndpoint({
  "APIName": ""
}, context)
```

#### Input
* input `object`
  * APIName **required** `string` (values: PUT_MEDIA, GET_MEDIA, LIST_FRAGMENTS, GET_MEDIA_FOR_FRAGMENT_LIST, GET_HLS_STREAMING_SESSION_URL, GET_DASH_STREAMING_SESSION_URL, GET_CLIP): The name of the API action for which to get an endpoint.
  * StreamARN `string`: The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request. 
  * StreamName `string`: The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.

#### Output
* output [GetDataEndpointOutput](#getdataendpointoutput)

### GetSignalingChannelEndpoint



```js
amazonaws_kinesisvideo.GetSignalingChannelEndpoint({
  "ChannelARN": ""
}, context)
```

#### Input
* input `object`
  * ChannelARN **required** `string`: The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint.
  * SingleMasterChannelEndpointConfiguration `object`: An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
    * Protocols
      * items [ChannelProtocol](#channelprotocol)
    * Role

#### Output
* output [GetSignalingChannelEndpointOutput](#getsignalingchannelendpointoutput)

### ListSignalingChannels



```js
amazonaws_kinesisvideo.ListSignalingChannels({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ChannelNameCondition `object`: An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
    * ComparisonOperator
    * ComparisonValue
  * MaxResults `integer`: The maximum number of channels to return in the response. The default is 500.
  * NextToken `string`: If you specify this parameter, when the result of a <code>ListSignalingChannels</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of channels, provide this token in your next request.

#### Output
* output [ListSignalingChannelsOutput](#listsignalingchannelsoutput)

### ListStreams



```js
amazonaws_kinesisvideo.ListStreams({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults `integer`: The maximum number of streams to return in the response. The default is 10,000.
  * NextToken `string`: If you specify this parameter, when the result of a <code>ListStreams</code> operation is truncated, the call returns the <code>NextToken</code> in the response. To get another batch of streams, provide this token in your next request.
  * StreamNameCondition `object`: Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
    * ComparisonOperator
    * ComparisonValue

#### Output
* output [ListStreamsOutput](#liststreamsoutput)

### ListTagsForStream



```js
amazonaws_kinesisvideo.ListTagsForStream({}, context)
```

#### Input
* input `object`
  * NextToken `string`: If you specify this parameter and the result of a <code>ListTagsForStream</code> call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
  * StreamARN `string`: The Amazon Resource Name (ARN) of the stream that you want to list tags for.
  * StreamName `string`: The name of the stream that you want to list tags for.

#### Output
* output [ListTagsForStreamOutput](#listtagsforstreamoutput)

### TagStream



```js
amazonaws_kinesisvideo.TagStream({
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * StreamARN `string`: The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
  * StreamName `string`: The name of the stream that you want to add the tag or tags to.
  * Tags **required** `object`: A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).

#### Output
* output [TagStreamOutput](#tagstreamoutput)

### UntagStream



```js
amazonaws_kinesisvideo.UntagStream({
  "TagKeyList": []
}, context)
```

#### Input
* input `object`
  * StreamARN `string`: The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
  * StreamName `string`: The name of the stream that you want to remove tags from.
  * TagKeyList **required** `array`: A list of the keys of the tags that you want to remove.
    * items [TagKey](#tagkey)

#### Output
* output [UntagStreamOutput](#untagstreamoutput)

### UpdateDataRetention



```js
amazonaws_kinesisvideo.UpdateDataRetention({
  "CurrentVersion": "",
  "Operation": "",
  "DataRetentionChangeInHours": 0
}, context)
```

#### Input
* input `object`
  * CurrentVersion **required** `string`: The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
  * DataRetentionChangeInHours **required** `integer`: The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
  * Operation **required** `string` (values: INCREASE_DATA_RETENTION, DECREASE_DATA_RETENTION): Indicates whether you want to increase or decrease the retention period.
  * StreamARN `string`: The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
  * StreamName `string`: The name of the stream whose retention period you want to change.

#### Output
* output [UpdateDataRetentionOutput](#updatedataretentionoutput)

### UpdateSignalingChannel



```js
amazonaws_kinesisvideo.UpdateSignalingChannel({
  "ChannelARN": "",
  "CurrentVersion": ""
}, context)
```

#### Input
* input `object`
  * ChannelARN **required** `string`: The Amazon Resource Name (ARN) of the signaling channel that you want to update.
  * CurrentVersion **required** `string`: The current version of the signaling channel that you want to update.
  * SingleMasterConfiguration `object`: A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
    * MessageTtlSeconds

#### Output
* output [UpdateSignalingChannelOutput](#updatesignalingchanneloutput)

### UpdateStream



```js
amazonaws_kinesisvideo.UpdateStream({
  "CurrentVersion": ""
}, context)
```

#### Input
* input `object`
  * CurrentVersion **required** `string`: The version of the stream whose metadata you want to update.
  * DeviceName `string`: <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
  * MediaType `string`: <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
  * StreamARN `string`: The ARN of the stream whose metadata you want to update.
  * StreamName `string`: <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>

#### Output
* output [UpdateStreamOutput](#updatestreamoutput)



## Definitions

### APIName
* APIName `string` (values: PUT_MEDIA, GET_MEDIA, LIST_FRAGMENTS, GET_MEDIA_FOR_FRAGMENT_LIST, GET_HLS_STREAMING_SESSION_URL, GET_DASH_STREAMING_SESSION_URL, GET_CLIP)

### AccessDeniedException


### AccountChannelLimitExceededException


### AccountStreamLimitExceededException


### ChannelInfo
* ChannelInfo `object`: A structure that encapsulates a signaling channel's metadata and properties.
  * ChannelARN
  * ChannelName
  * ChannelStatus
  * ChannelType
  * CreationTime
  * SingleMasterConfiguration
    * MessageTtlSeconds
  * Version

### ChannelInfoList
* ChannelInfoList `array`
  * items [ChannelInfo](#channelinfo)

### ChannelName
* ChannelName `string`

### ChannelNameCondition
* ChannelNameCondition `object`: An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
  * ComparisonOperator
  * ComparisonValue

### ChannelProtocol
* ChannelProtocol `string` (values: WSS, HTTPS)

### ChannelRole
* ChannelRole `string` (values: MASTER, VIEWER)

### ChannelType
* ChannelType `string` (values: SINGLE_MASTER)

### ClientLimitExceededException


### ComparisonOperator
* ComparisonOperator `string` (values: BEGINS_WITH)

### CreateSignalingChannelInput
* CreateSignalingChannelInput `object`
  * ChannelName **required**
  * ChannelType
  * SingleMasterConfiguration
    * MessageTtlSeconds
  * Tags
    * items [Tag](#tag)

### CreateSignalingChannelOutput
* CreateSignalingChannelOutput `object`
  * ChannelARN

### CreateStreamInput
* CreateStreamInput `object`
  * DataRetentionInHours
  * DeviceName
  * KmsKeyId
  * MediaType
  * StreamName **required**
  * Tags

### CreateStreamOutput
* CreateStreamOutput `object`
  * StreamARN

### DataEndpoint
* DataEndpoint `string`

### DataRetentionChangeInHours
* DataRetentionChangeInHours `integer`

### DataRetentionInHours
* DataRetentionInHours `integer`

### DeleteSignalingChannelInput
* DeleteSignalingChannelInput `object`
  * ChannelARN **required**
  * CurrentVersion

### DeleteSignalingChannelOutput
* DeleteSignalingChannelOutput `object`

### DeleteStreamInput
* DeleteStreamInput `object`
  * CurrentVersion
  * StreamARN **required**

### DeleteStreamOutput
* DeleteStreamOutput `object`

### DescribeSignalingChannelInput
* DescribeSignalingChannelInput `object`
  * ChannelARN
  * ChannelName

### DescribeSignalingChannelOutput
* DescribeSignalingChannelOutput `object`
  * ChannelInfo
    * ChannelARN
    * ChannelName
    * ChannelStatus
    * ChannelType
    * CreationTime
    * SingleMasterConfiguration
      * MessageTtlSeconds
    * Version

### DescribeStreamInput
* DescribeStreamInput `object`
  * StreamARN
  * StreamName

### DescribeStreamOutput
* DescribeStreamOutput `object`
  * StreamInfo
    * CreationTime
    * DataRetentionInHours
    * DeviceName
    * KmsKeyId
    * MediaType
    * Status
    * StreamARN
    * StreamName
    * Version

### DeviceName
* DeviceName `string`

### DeviceStreamLimitExceededException


### GetDataEndpointInput
* GetDataEndpointInput `object`
  * APIName **required**
  * StreamARN
  * StreamName

### GetDataEndpointOutput
* GetDataEndpointOutput `object`
  * DataEndpoint

### GetSignalingChannelEndpointInput
* GetSignalingChannelEndpointInput `object`
  * ChannelARN **required**
  * SingleMasterChannelEndpointConfiguration
    * Protocols
      * items [ChannelProtocol](#channelprotocol)
    * Role

### GetSignalingChannelEndpointOutput
* GetSignalingChannelEndpointOutput `object`
  * ResourceEndpointList
    * items [ResourceEndpointListItem](#resourceendpointlistitem)

### InvalidArgumentException


### InvalidDeviceException


### InvalidResourceFormatException


### KmsKeyId
* KmsKeyId `string`

### ListOfProtocols
* ListOfProtocols `array`
  * items [ChannelProtocol](#channelprotocol)

### ListSignalingChannelsInput
* ListSignalingChannelsInput `object`
  * ChannelNameCondition
    * ComparisonOperator
    * ComparisonValue
  * MaxResults
  * NextToken

### ListSignalingChannelsOutput
* ListSignalingChannelsOutput `object`
  * ChannelInfoList
    * items [ChannelInfo](#channelinfo)
  * NextToken

### ListStreamsInput
* ListStreamsInput `object`
  * MaxResults
  * NextToken
  * StreamNameCondition
    * ComparisonOperator
    * ComparisonValue

### ListStreamsInputLimit
* ListStreamsInputLimit `integer`

### ListStreamsOutput
* ListStreamsOutput `object`
  * NextToken
  * StreamInfoList
    * items [StreamInfo](#streaminfo)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * NextToken
  * ResourceARN **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * NextToken
  * Tags

### ListTagsForStreamInput
* ListTagsForStreamInput `object`
  * NextToken
  * StreamARN
  * StreamName

### ListTagsForStreamOutput
* ListTagsForStreamOutput `object`
  * NextToken
  * Tags

### MediaType
* MediaType `string`

### MessageTtlSeconds
* MessageTtlSeconds `integer`

### NextToken
* NextToken `string`

### NotAuthorizedException


### ResourceARN
* ResourceARN `string`

### ResourceEndpoint
* ResourceEndpoint `string`

### ResourceEndpointList
* ResourceEndpointList `array`
  * items [ResourceEndpointListItem](#resourceendpointlistitem)

### ResourceEndpointListItem
* ResourceEndpointListItem `object`: An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
  * Protocol
  * ResourceEndpoint

### ResourceInUseException


### ResourceNotFoundException


### ResourceTags
* ResourceTags `object`

### SingleMasterChannelEndpointConfiguration
* SingleMasterChannelEndpointConfiguration `object`: An object that contains the endpoint configuration for the <code>SINGLE_MASTER</code> channel type. 
  * Protocols
    * items [ChannelProtocol](#channelprotocol)
  * Role

### SingleMasterConfiguration
* SingleMasterConfiguration `object`: A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
  * MessageTtlSeconds

### Status
* Status `string` (values: CREATING, ACTIVE, UPDATING, DELETING)

### StreamInfo
* StreamInfo `object`: An object describing a Kinesis video stream.
  * CreationTime
  * DataRetentionInHours
  * DeviceName
  * KmsKeyId
  * MediaType
  * Status
  * StreamARN
  * StreamName
  * Version

### StreamInfoList
* StreamInfoList `array`
  * items [StreamInfo](#streaminfo)

### StreamName
* StreamName `string`

### StreamNameCondition
* StreamNameCondition `object`: Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
  * ComparisonOperator
  * ComparisonValue

### Tag
* Tag `object`: A key and value pair that is associated with the specified signaling channel.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagOnCreateList
* TagOnCreateList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagStreamInput
* TagStreamInput `object`
  * StreamARN
  * StreamName
  * Tags **required**

### TagStreamOutput
* TagStreamOutput `object`

### TagValue
* TagValue `string`

### TagsPerResourceExceededLimitException


### Timestamp
* Timestamp `string`

### UntagResourceInput
* UntagResourceInput `object`
  * ResourceARN **required**
  * TagKeyList **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### UntagStreamInput
* UntagStreamInput `object`
  * StreamARN
  * StreamName
  * TagKeyList **required**
    * items [TagKey](#tagkey)

### UntagStreamOutput
* UntagStreamOutput `object`

### UpdateDataRetentionInput
* UpdateDataRetentionInput `object`
  * CurrentVersion **required**
  * DataRetentionChangeInHours **required**
  * Operation **required**
  * StreamARN
  * StreamName

### UpdateDataRetentionOperation
* UpdateDataRetentionOperation `string` (values: INCREASE_DATA_RETENTION, DECREASE_DATA_RETENTION)

### UpdateDataRetentionOutput
* UpdateDataRetentionOutput `object`

### UpdateSignalingChannelInput
* UpdateSignalingChannelInput `object`
  * ChannelARN **required**
  * CurrentVersion **required**
  * SingleMasterConfiguration
    * MessageTtlSeconds

### UpdateSignalingChannelOutput
* UpdateSignalingChannelOutput `object`

### UpdateStreamInput
* UpdateStreamInput `object`
  * CurrentVersion **required**
  * DeviceName
  * MediaType
  * StreamARN
  * StreamName

### UpdateStreamOutput
* UpdateStreamOutput `object`

### Version
* Version `string`

### VersionMismatchException



