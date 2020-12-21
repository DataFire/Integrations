# @datafire/amazonaws_ivs

Client library for Amazon Interactive Video Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ivs
```
```js
let amazonaws_ivs = require('@datafire/amazonaws_ivs').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an <a href="http://aws.amazon.com/sns">AWS SNS</a> event stream for responses. JSON is used for both requests and responses, including errors.</p> <p>The API is an AWS regional service, currently in these regions: us-west-2, us-east-1, and eu-west-1.</p> <p> <i> <b>All API request parameters and URLs are case sensitive. </b> </i> </p> <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document History</a>.</p> <p> <b>Service Endpoints</b> </p> <p>The following are the Amazon IVS service endpoints (all HTTPS): </p> <p>Region name: US West (Oregon)</p> <ul> <li> <p>Region: <code>us-west-2</code> </p> </li> <li> <p>Endpoint: <code>ivs.us-west-2.amazonaws.com</code> </p> </li> </ul> <p>Region name: US East (Virginia)</p> <ul> <li> <p>Region: <code>us-east-1</code> </p> </li> <li> <p>Endpoint: <code>ivs.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>Region name: EU West (Dublin)</p> <ul> <li> <p>Region: <code>eu-west-1</code> </p> </li> <li> <p>Endpoint: <code>ivs.eu-west-1.amazonaws.com</code> </p> </li> </ul> <p> <b>Allowed Header Values</b> </p> <ul> <li> <p> <code> <b>Accept:</b> </code> application/json</p> </li> <li> <p> <code> <b>Accept-Encoding:</b> </code> gzip, deflate</p> </li> <li> <p> <code> <b>Content-Type:</b> </code>application/json</p> </li> </ul> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/GSIVS.html"> Getting Started with Amazon IVS</a>):</p> <ul> <li> <p>Channel — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream. See the Channel endpoints for more information. </p> </li> <li> <p>Stream key — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. See the StreamKey endpoints for more information. <i> <b>Treat the stream key like a secret, since it allows anyone to stream to the channel.</b> </i> </p> </li> <li> <p>Playback key pair — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair endpoints for more information.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p> <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resources support tagging: Channels, Stream Keys, and Playback Key Pairs.</p> <p> <b>Channel Endpoints</b> </p> <ul> <li> <p> <a>CreateChannel</a> — Creates a new channel and an associated stream key to start streaming.</p> </li> <li> <p> <a>GetChannel</a> — Gets the channel configuration for the specified channel ARN (Amazon Resource Name).</p> </li> <li> <p> <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListChannels</a> — Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified string.</p> </li> <li> <p> <a>UpdateChannel</a> — Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.</p> </li> <li> <p> <a>DeleteChannel</a> — Deletes the specified channel.</p> </li> </ul> <p> <b>StreamKey Endpoints</b> </p> <ul> <li> <p> <a>CreateStreamKey</a> — Creates a stream key, used to initiate a stream, for the specified channel ARN.</p> </li> <li> <p> <a>GetStreamKey</a> — Gets stream key information for the specified ARN.</p> </li> <li> <p> <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on multiple ARNs simultaneously.</p> </li> <li> <p> <a>ListStreamKeys</a> — Gets summary information about stream keys for the specified channel.</p> </li> <li> <p> <a>DeleteStreamKey</a> — Deletes the stream key for the specified ARN, so it can no longer be used to stream.</p> </li> </ul> <p> <b>Stream Endpoints</b> </p> <ul> <li> <p> <a>GetStream</a> — Gets information about the active (live) stream on a specified channel.</p> </li> <li> <p> <a>ListStreams</a> — Gets summary information about live streams in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>StopStream</a> — Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to prevent further streaming to a channel.</p> </li> <li> <p> <a>PutMetadata</a> — Inserts metadata into an RTMPS stream for the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1KB payload.</p> </li> </ul> <p> <b>PlaybackKeyPair Endpoints</b> </p> <ul> <li> <p> <a>ImportPlaybackKeyPair</a> — Imports the public portion of a new key pair and returns its <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> can then be used to generate viewer authorization tokens, to grant viewers access to authorized channels.</p> </li> <li> <p> <a>GetPlaybackKeyPair</a> — Gets a specified playback authorization key pair and returns the <code>arn</code> and <code>fingerprint</code>. The <code>privateKey</code> held by the caller can be used to generate viewer authorization tokens, to grant viewers access to authorized channels.</p> </li> <li> <p> <a>ListPlaybackKeyPairs</a> — Gets summary information about playback key pairs.</p> </li> <li> <p> <a>DeletePlaybackKeyPair</a> — Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s <code>privateKey</code>.</p> </li> </ul> <p> <b>AWS Tags Endpoints</b> </p> <ul> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> </ul>

## Actions

### BatchGetChannel



```js
amazonaws_ivs.BatchGetChannel({
  "arns": []
}, context)
```

#### Input
* input `object`
  * arns **required** `array`: Array of ARNs, one per channel.
    * items [ChannelArn](#channelarn)

#### Output
* output [BatchGetChannelResponse](#batchgetchannelresponse)

### BatchGetStreamKey



```js
amazonaws_ivs.BatchGetStreamKey({
  "arns": []
}, context)
```

#### Input
* input `object`
  * arns **required** `array`: Array of ARNs, one per channel.
    * items [StreamKeyArn](#streamkeyarn)

#### Output
* output [BatchGetStreamKeyResponse](#batchgetstreamkeyresponse)

### CreateChannel



```js
amazonaws_ivs.CreateChannel({}, context)
```

#### Input
* input `object`
  * tags `object`: See <a>Channel$tags</a>.
  * authorized `boolean`: Whether the channel is authorized. Default: <code>false</code>.
  * latencyMode `string` (values: NORMAL, LOW): Channel latency mode. Default: <code>LOW</code>.
  * name `string`: Channel name.
  * type `string` (values: BASIC, STANDARD): <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.</p> </li> <li> <p> <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.</p> </li> </ul> <p>Default: <code>STANDARD</code>.</p>

#### Output
* output [CreateChannelResponse](#createchannelresponse)

### CreateStreamKey



```js
amazonaws_ivs.CreateStreamKey({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: See <a>Channel$tags</a>.
  * channelArn **required** `string`: ARN of the channel for which to create the stream key.

#### Output
* output [CreateStreamKeyResponse](#createstreamkeyresponse)

### DeleteChannel



```js
amazonaws_ivs.DeleteChannel({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the channel to be deleted.

#### Output
*Output schema unknown*

### DeletePlaybackKeyPair



```js
amazonaws_ivs.DeletePlaybackKeyPair({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the key pair to be deleted.

#### Output
* output [DeletePlaybackKeyPairResponse](#deleteplaybackkeypairresponse)

### DeleteStreamKey



```js
amazonaws_ivs.DeleteStreamKey({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the stream key to be deleted.

#### Output
*Output schema unknown*

### GetChannel



```js
amazonaws_ivs.GetChannel({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the channel for which the configuration is to be retrieved.

#### Output
* output [GetChannelResponse](#getchannelresponse)

### GetPlaybackKeyPair



```js
amazonaws_ivs.GetPlaybackKeyPair({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the key pair to be returned.

#### Output
* output [GetPlaybackKeyPairResponse](#getplaybackkeypairresponse)

### GetStream



```js
amazonaws_ivs.GetStream({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`: Channel ARN for stream to be accessed.

#### Output
* output [GetStreamResponse](#getstreamresponse)

### GetStreamKey



```js
amazonaws_ivs.GetStreamKey({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN for the stream key to be retrieved.

#### Output
* output [GetStreamKeyResponse](#getstreamkeyresponse)

### ImportPlaybackKeyPair



```js
amazonaws_ivs.ImportPlaybackKeyPair({
  "publicKeyMaterial": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Any tags provided with the request are added to the playback key pair tags.
  * name `string`: An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
  * publicKeyMaterial **required** `string`: The public portion of a customer-generated key pair.

#### Output
* output [ImportPlaybackKeyPairResponse](#importplaybackkeypairresponse)

### ListChannels



```js
amazonaws_ivs.ListChannels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filterByName `string`: Filters the channel list to match the specified name.
  * maxResults `integer`: Maximum number of channels to return.
  * nextToken `string`: The first channel to retrieve. This is used for pagination; see the <code>nextToken</code> response field.

#### Output
* output [ListChannelsResponse](#listchannelsresponse)

### ListPlaybackKeyPairs



```js
amazonaws_ivs.ListPlaybackKeyPairs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The first key pair to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
  * nextToken `string`: Maximum number of key pairs to return.

#### Output
* output [ListPlaybackKeyPairsResponse](#listplaybackkeypairsresponse)

### ListStreamKeys



```js
amazonaws_ivs.ListStreamKeys({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * channelArn **required** `string`: Channel ARN used to filter the list.
  * maxResults `integer`: Maximum number of streamKeys to return.
  * nextToken `string`: The first stream key to retrieve. This is used for pagination; see the <code>nextToken</code> response field.

#### Output
* output [ListStreamKeysResponse](#liststreamkeysresponse)

### ListStreams



```js
amazonaws_ivs.ListStreams({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: Maximum number of streams to return.
  * nextToken `string`: The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.

#### Output
* output [ListStreamsResponse](#liststreamsresponse)

### PutMetadata



```js
amazonaws_ivs.PutMetadata({
  "channelArn": "",
  "metadata": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`: ARN of the channel into which metadata is inserted. This channel must have an active stream.
  * metadata **required** `string`: Metadata to insert into the stream. Maximum: 1 KB per request.

#### Output
*Output schema unknown*

### StopStream



```js
amazonaws_ivs.StopStream({
  "channelArn": ""
}, context)
```

#### Input
* input `object`
  * channelArn **required** `string`: ARN of the channel for which the stream is to be stopped.

#### Output
* output [StopStreamResponse](#stopstreamresponse)

### UpdateChannel



```js
amazonaws_ivs.UpdateChannel({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`: ARN of the channel to be updated.
  * authorized `boolean`: Whether the channel is authorized. Default: <code>false</code>.
  * latencyMode `string` (values: NORMAL, LOW): Channel latency mode. Default: <code>LOW</code>.
  * name `string`: Channel name.
  * type `string` (values: BASIC, STANDARD): <p>Channel type, which determines the allowable resolution and bitrate. <i>If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.</i> Valid values:</p> <ul> <li> <p> <code>STANDARD</code>: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.</p> </li> <li> <p> <code>BASIC</code>: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.</p> </li> </ul> <p>Default: <code>STANDARD</code>.</p>

#### Output
* output [UpdateChannelResponse](#updatechannelresponse)

### ListTagsForResource



```js
amazonaws_ivs.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: Maximum number of tags to return.
  * nextToken `string`: The first tag to retrieve. This is used for pagination; see the <code>nextToken</code> response field.

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_ivs.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: Array of tags to be added or updated.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_ivs.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### BatchError
* BatchError `object`: Error related to a specific channel, specified by its ARN.
  * arn
  * code
  * message

### BatchErrors
* BatchErrors `array`
  * items [BatchError](#batcherror)

### BatchGetChannelRequest
* BatchGetChannelRequest `object`
  * arns **required**
    * items [ChannelArn](#channelarn)

### BatchGetChannelResponse
* BatchGetChannelResponse `object`
  * channels [Channels](#channels)
  * errors
    * items [BatchError](#batcherror)

### BatchGetStreamKeyRequest
* BatchGetStreamKeyRequest `object`
  * arns **required**
    * items [StreamKeyArn](#streamkeyarn)

### BatchGetStreamKeyResponse
* BatchGetStreamKeyResponse `object`
  * errors [BatchErrors](#batcherrors)
  * streamKeys [StreamKeys](#streamkeys)

### Boolean
* Boolean `boolean`

### Channel
* Channel `object`: Object specifying a channel.
  * tags
  * arn
  * authorized
  * ingestEndpoint
  * latencyMode
  * name
  * playbackUrl
  * type

### ChannelArn
* ChannelArn `string`

### ChannelArnList
* ChannelArnList `array`
  * items [ChannelArn](#channelarn)

### ChannelLatencyMode
* ChannelLatencyMode `string` (values: NORMAL, LOW)

### ChannelList
* ChannelList `array`
  * items [ChannelSummary](#channelsummary)

### ChannelName
* ChannelName `string`

### ChannelNotBroadcasting


### ChannelSummary
* ChannelSummary `object`: Summary information about a channel.
  * tags
  * arn
  * authorized
  * latencyMode
  * name

### ChannelType
* ChannelType `string` (values: BASIC, STANDARD)

### Channels
* Channels `array`
  * items [Channel](#channel)

### ConflictException


### CreateChannelRequest
* CreateChannelRequest `object`
  * tags
  * authorized
  * latencyMode
  * name
  * type

### CreateChannelResponse
* CreateChannelResponse `object`
  * channel [Channel](#channel)
  * streamKey [StreamKey](#streamkey)

### CreateStreamKeyRequest
* CreateStreamKeyRequest `object`
  * tags
  * channelArn **required**

### CreateStreamKeyResponse
* CreateStreamKeyResponse `object`
  * streamKey
    * tags
    * arn
    * channelArn
    * value

### DeleteChannelRequest
* DeleteChannelRequest `object`
  * arn **required**

### DeletePlaybackKeyPairRequest
* DeletePlaybackKeyPairRequest `object`
  * arn **required**

### DeletePlaybackKeyPairResponse
* DeletePlaybackKeyPairResponse `object`

### DeleteStreamKeyRequest
* DeleteStreamKeyRequest `object`
  * arn **required**

### GetChannelRequest
* GetChannelRequest `object`
  * arn **required**

### GetChannelResponse
* GetChannelResponse `object`
  * channel [Channel](#channel)

### GetPlaybackKeyPairRequest
* GetPlaybackKeyPairRequest `object`
  * arn **required**

### GetPlaybackKeyPairResponse
* GetPlaybackKeyPairResponse `object`
  * keyPair [PlaybackKeyPair](#playbackkeypair)

### GetStreamKeyRequest
* GetStreamKeyRequest `object`
  * arn **required**

### GetStreamKeyResponse
* GetStreamKeyResponse `object`
  * streamKey [StreamKey](#streamkey)

### GetStreamRequest
* GetStreamRequest `object`
  * channelArn **required**

### GetStreamResponse
* GetStreamResponse `object`
  * stream [Stream](#stream)

### ImportPlaybackKeyPairRequest
* ImportPlaybackKeyPairRequest `object`
  * tags
  * name
  * publicKeyMaterial **required**

### ImportPlaybackKeyPairResponse
* ImportPlaybackKeyPairResponse `object`
  * keyPair [PlaybackKeyPair](#playbackkeypair)

### IngestEndpoint
* IngestEndpoint `string`

### InternalServerException


### IsAuthorized
* IsAuthorized `boolean`

### ListChannelsRequest
* ListChannelsRequest `object`
  * filterByName
  * maxResults
  * nextToken

### ListChannelsResponse
* ListChannelsResponse `object`
  * channels **required**
    * items [ChannelSummary](#channelsummary)
  * nextToken

### ListPlaybackKeyPairsRequest
* ListPlaybackKeyPairsRequest `object`
  * maxResults
  * nextToken

### ListPlaybackKeyPairsResponse
* ListPlaybackKeyPairsResponse `object`
  * keyPairs **required**
    * items [PlaybackKeyPairSummary](#playbackkeypairsummary)
  * nextToken

### ListStreamKeysRequest
* ListStreamKeysRequest `object`
  * channelArn **required**
  * maxResults
  * nextToken

### ListStreamKeysResponse
* ListStreamKeysResponse `object`
  * nextToken
  * streamKeys **required**
    * items [StreamKeySummary](#streamkeysummary)

### ListStreamsRequest
* ListStreamsRequest `object`
  * maxResults
  * nextToken

### ListStreamsResponse
* ListStreamsResponse `object`
  * nextToken
  * streams **required**
    * items [StreamSummary](#streamsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * maxResults
  * nextToken

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags **required** [Tags](#tags)
  * nextToken

### MaxChannelResults
* MaxChannelResults `integer`

### MaxPlaybackKeyPairResults
* MaxPlaybackKeyPairResults `integer`

### MaxStreamKeyResults
* MaxStreamKeyResults `integer`

### MaxStreamResults
* MaxStreamResults `integer`

### MaxTagResults
* MaxTagResults `integer`

### PaginationToken
* PaginationToken `string`

### PendingVerification


### PlaybackKeyPair
* PlaybackKeyPair `object`: A key pair used to sign and validate a playback authorization token.
  * tags
  * arn
  * fingerprint
  * name

### PlaybackKeyPairArn
* PlaybackKeyPairArn `string`

### PlaybackKeyPairFingerprint
* PlaybackKeyPairFingerprint `string`

### PlaybackKeyPairList
* PlaybackKeyPairList `array`
  * items [PlaybackKeyPairSummary](#playbackkeypairsummary)

### PlaybackKeyPairName
* PlaybackKeyPairName `string`

### PlaybackKeyPairSummary
* PlaybackKeyPairSummary `object`: Summary information about a playback key pair.
  * tags
  * arn
  * name

### PlaybackPublicKeyMaterial
* PlaybackPublicKeyMaterial `string`

### PlaybackURL
* PlaybackURL `string`

### PutMetadataRequest
* PutMetadataRequest `object`
  * channelArn **required**
  * metadata **required**

### ResourceArn
* ResourceArn `string`

### ResourceNotFoundException


### ServiceQuotaExceededException


### StopStreamRequest
* StopStreamRequest `object`
  * channelArn **required**

### StopStreamResponse
* StopStreamResponse `object`

### Stream
* Stream `object`: Specifies a live video stream that has been ingested and distributed.
  * channelArn
  * health
  * playbackUrl
  * startTime
  * state
  * viewerCount

### StreamHealth
* StreamHealth `string` (values: HEALTHY, STARVING, UNKNOWN)

### StreamKey
* StreamKey `object`: Object specifying a stream key.
  * tags
  * arn
  * channelArn
  * value

### StreamKeyArn
* StreamKeyArn `string`

### StreamKeyArnList
* StreamKeyArnList `array`
  * items [StreamKeyArn](#streamkeyarn)

### StreamKeyList
* StreamKeyList `array`
  * items [StreamKeySummary](#streamkeysummary)

### StreamKeySummary
* StreamKeySummary `object`: Summary information about a stream key.
  * tags
  * arn
  * channelArn

### StreamKeyValue
* StreamKeyValue `string`

### StreamKeys
* StreamKeys `array`
  * items [StreamKey](#streamkey)

### StreamList
* StreamList `array`
  * items [StreamSummary](#streamsummary)

### StreamMetadata
* StreamMetadata `string`

### StreamStartTime
* StreamStartTime `string`

### StreamState
* StreamState `string` (values: LIVE, OFFLINE)

### StreamSummary
* StreamSummary `object`: Summary information about a stream.
  * channelArn
  * health
  * startTime
  * state
  * viewerCount

### StreamUnavailable


### StreamViewerCount
* StreamViewerCount `integer`

### String
* String `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### ThrottlingException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateChannelRequest
* UpdateChannelRequest `object`
  * arn **required**
  * authorized
  * latencyMode
  * name
  * type

### UpdateChannelResponse
* UpdateChannelResponse `object`
  * channel [Channel](#channel)

### ValidationException


### errorCode
* errorCode `string`

### errorMessage
* errorMessage `string`


