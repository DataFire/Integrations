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

amazonaws_kinesisvideo.CreateStream({}).then(data => {
  console.log(data);
})
```

## Description

<p/>

## Actions

### CreateStream



```js
amazonaws_kinesisvideo.CreateStream({
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * DataRetentionInHours [DataRetentionInHours](#dataretentioninhours)
  * DeviceName [DeviceName](#devicename)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * MediaType [MediaType](#mediatype)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [CreateStreamOutput](#createstreamoutput)

### DeleteStream



```js
amazonaws_kinesisvideo.DeleteStream({
  "StreamARN": ""
}, context)
```

#### Input
* input `object`
  * CurrentVersion [Version](#version)
  * StreamARN **required** [ResourceARN](#resourcearn)

#### Output
* output [DeleteStreamOutput](#deletestreamoutput)

### DescribeStream



```js
amazonaws_kinesisvideo.DescribeStream({}, context)
```

#### Input
* input `object`
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

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
  * APIName **required** [APIName](#apiname)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

#### Output
* output [GetDataEndpointOutput](#getdataendpointoutput)

### ListStreams



```js
amazonaws_kinesisvideo.ListStreams({}, context)
```

#### Input
* input `object`
  * MaxResults [ListStreamsInputLimit](#liststreamsinputlimit)
  * NextToken [NextToken](#nexttoken)
  * StreamNameCondition [StreamNameCondition](#streamnamecondition)

#### Output
* output [ListStreamsOutput](#liststreamsoutput)

### ListTagsForStream



```js
amazonaws_kinesisvideo.ListTagsForStream({}, context)
```

#### Input
* input `object`
  * NextToken [NextToken](#nexttoken)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

#### Output
* output [ListTagsForStreamOutput](#listtagsforstreamoutput)

### TagStream



```js
amazonaws_kinesisvideo.TagStream({
  "Tags": []
}, context)
```

#### Input
* input `object`
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)
  * Tags **required** [ResourceTags](#resourcetags)

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
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

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
  * CurrentVersion **required** [Version](#version)
  * DataRetentionChangeInHours **required** [DataRetentionChangeInHours](#dataretentionchangeinhours)
  * Operation **required** [UpdateDataRetentionOperation](#updatedataretentionoperation)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

#### Output
* output [UpdateDataRetentionOutput](#updatedataretentionoutput)

### UpdateStream



```js
amazonaws_kinesisvideo.UpdateStream({
  "CurrentVersion": ""
}, context)
```

#### Input
* input `object`
  * CurrentVersion **required** [Version](#version)
  * DeviceName [DeviceName](#devicename)
  * MediaType [MediaType](#mediatype)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

#### Output
* output [UpdateStreamOutput](#updatestreamoutput)



## Definitions

### APIName
* APIName `string` (values: PUT_MEDIA, GET_MEDIA, LIST_FRAGMENTS, GET_MEDIA_FOR_FRAGMENT_LIST)

### AccountStreamLimitExceededException
* AccountStreamLimitExceededException `object`: The number of streams created for the account is too high.
  * Message [ErrorMessage](#errormessage)

### ClientLimitExceededException
* ClientLimitExceededException `object`: Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
  * Message [ErrorMessage](#errormessage)

### ComparisonOperator
* ComparisonOperator `string` (values: BEGINS_WITH)

### CreateStreamInput
* CreateStreamInput `object`
  * DataRetentionInHours [DataRetentionInHours](#dataretentioninhours)
  * DeviceName [DeviceName](#devicename)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * MediaType [MediaType](#mediatype)
  * StreamName **required** [StreamName](#streamname)

### CreateStreamOutput
* CreateStreamOutput `object`
  * StreamARN [ResourceARN](#resourcearn)

### DataEndpoint
* DataEndpoint `string`

### DataRetentionChangeInHours
* DataRetentionChangeInHours `integer`

### DataRetentionInHours
* DataRetentionInHours `integer`

### DeleteStreamInput
* DeleteStreamInput `object`
  * CurrentVersion [Version](#version)
  * StreamARN **required** [ResourceARN](#resourcearn)

### DeleteStreamOutput
* DeleteStreamOutput `object`

### DescribeStreamInput
* DescribeStreamInput `object`
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### DescribeStreamOutput
* DescribeStreamOutput `object`
  * StreamInfo [StreamInfo](#streaminfo)

### DeviceName
* DeviceName `string`

### DeviceStreamLimitExceededException
* DeviceStreamLimitExceededException `object`: Not implemented. 
  * Message [ErrorMessage](#errormessage)

### ErrorMessage
* ErrorMessage `string`

### GetDataEndpointInput
* GetDataEndpointInput `object`
  * APIName **required** [APIName](#apiname)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### GetDataEndpointOutput
* GetDataEndpointOutput `object`
  * DataEndpoint [DataEndpoint](#dataendpoint)

### InvalidArgumentException
* InvalidArgumentException `object`: The value for this input parameter is invalid.
  * Message [ErrorMessage](#errormessage)

### InvalidDeviceException
* InvalidDeviceException `object`: Not implemented.
  * Message [ErrorMessage](#errormessage)

### InvalidResourceFormatException
* InvalidResourceFormatException `object`: The format of the <code>StreamARN</code> is invalid.
  * Message [ErrorMessage](#errormessage)

### KmsKeyId
* KmsKeyId `string`

### ListStreamsInput
* ListStreamsInput `object`
  * MaxResults [ListStreamsInputLimit](#liststreamsinputlimit)
  * NextToken [NextToken](#nexttoken)
  * StreamNameCondition [StreamNameCondition](#streamnamecondition)

### ListStreamsInputLimit
* ListStreamsInputLimit `integer`

### ListStreamsOutput
* ListStreamsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * StreamInfoList [StreamInfoList](#streaminfolist)

### ListTagsForStreamInput
* ListTagsForStreamInput `object`
  * NextToken [NextToken](#nexttoken)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### ListTagsForStreamOutput
* ListTagsForStreamOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [ResourceTags](#resourcetags)

### MediaType
* MediaType `string`

### NextToken
* NextToken `string`

### NotAuthorizedException
* NotAuthorizedException `object`: The caller is not authorized to perform this operation.
  * Message [ErrorMessage](#errormessage)

### ResourceARN
* ResourceARN `string`

### ResourceInUseException
* ResourceInUseException `object`: The stream is currently not available for this operation.
  * Message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: Amazon Kinesis Video Streams can't find the stream that you specified.
  * Message [ErrorMessage](#errormessage)

### ResourceTags
* ResourceTags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### Status
* Status `string` (values: CREATING, ACTIVE, UPDATING, DELETING)

### StreamInfo
* StreamInfo `object`: An object describing a Kinesis video stream.
  * CreationTime [Timestamp](#timestamp)
  * DataRetentionInHours [DataRetentionInHours](#dataretentioninhours)
  * DeviceName [DeviceName](#devicename)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * MediaType [MediaType](#mediatype)
  * Status [Status](#status)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)
  * Version [Version](#version)

### StreamInfoList
* StreamInfoList `array`
  * items [StreamInfo](#streaminfo)

### StreamName
* StreamName `string`

### StreamNameCondition
* StreamNameCondition `object`: Specifies the condition that streams must satisfy to be returned when you list streams (see the <code>ListStreams</code> API). A condition has a comparison operation and a value. Currently, you can specify only the <code>BEGINS_WITH</code> operator, which finds streams whose names start with a given prefix. 
  * ComparisonOperator [ComparisonOperator](#comparisonoperator)
  * ComparisonValue [StreamName](#streamname)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagStreamInput
* TagStreamInput `object`
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)
  * Tags **required** [ResourceTags](#resourcetags)

### TagStreamOutput
* TagStreamOutput `object`

### TagValue
* TagValue `string`

### TagsPerResourceExceededLimitException
* TagsPerResourceExceededLimitException `object`: You have exceeded the limit of tags that you can associate with the resource. Kinesis video streams support up to 50 tags. 
  * Message [ErrorMessage](#errormessage)

### Timestamp
* Timestamp `string`

### UntagStreamInput
* UntagStreamInput `object`
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)
  * TagKeyList **required** [TagKeyList](#tagkeylist)

### UntagStreamOutput
* UntagStreamOutput `object`

### UpdateDataRetentionInput
* UpdateDataRetentionInput `object`
  * CurrentVersion **required** [Version](#version)
  * DataRetentionChangeInHours **required** [DataRetentionChangeInHours](#dataretentionchangeinhours)
  * Operation **required** [UpdateDataRetentionOperation](#updatedataretentionoperation)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### UpdateDataRetentionOperation
* UpdateDataRetentionOperation `string` (values: INCREASE_DATA_RETENTION, DECREASE_DATA_RETENTION)

### UpdateDataRetentionOutput
* UpdateDataRetentionOutput `object`

### UpdateStreamInput
* UpdateStreamInput `object`
  * CurrentVersion **required** [Version](#version)
  * DeviceName [DeviceName](#devicename)
  * MediaType [MediaType](#mediatype)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### UpdateStreamOutput
* UpdateStreamOutput `object`

### Version
* Version `string`

### VersionMismatchException
* VersionMismatchException `object`: The stream version that you specified is not the latest version. To get the latest version, use the <a href="http://docs.aws.amazon.com/kinesisvideo/latest/dg/API_DescribeStream.html">DescribeStream</a> API.
  * Message [ErrorMessage](#errormessage)


