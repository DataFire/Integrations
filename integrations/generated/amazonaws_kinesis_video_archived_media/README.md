# @datafire/amazonaws_kinesis_video_archived_media

Client library for Amazon Kinesis Video Streams Archived Media

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesis_video_archived_media
```
```js
let amazonaws_kinesis_video_archived_media = require('@datafire/amazonaws_kinesis_video_archived_media').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_kinesis_video_archived_media.GetMediaForFragmentList({
  "StreamName": "",
  "Fragments": []
}).then(data => {
  console.log(data);
});
```

## Description

<p/>

## Actions

### GetMediaForFragmentList



```js
amazonaws_kinesis_video_archived_media.GetMediaForFragmentList({
  "StreamName": "",
  "Fragments": []
}, context)
```

#### Input
* input `object`
  * Fragments **required** [FragmentNumberList](#fragmentnumberlist)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [GetMediaForFragmentListOutput](#getmediaforfragmentlistoutput)

### ListFragments



```js
amazonaws_kinesis_video_archived_media.ListFragments({
  "StreamName": ""
}, context)
```

#### Input
* input `object`
  * FragmentSelector [FragmentSelector](#fragmentselector)
  * MaxResults [PageLimit](#pagelimit)
  * NextToken [String](#string)
  * StreamName **required** [StreamName](#streamname)

#### Output
* output [ListFragmentsOutput](#listfragmentsoutput)



## Definitions

### ClientLimitExceededException
* ClientLimitExceededException `object`: Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
  * Message [ErrorMessage](#errormessage)

### ContentType
* ContentType `string`

### ErrorMessage
* ErrorMessage `string`

### Fragment
* Fragment `object`: Represents a segment of video or other time-delimited data.
  * FragmentLengthInMilliseconds [Long](#long)
  * FragmentNumber [String](#string)
  * FragmentSizeInBytes [Long](#long)
  * ProducerTimestamp [Timestamp](#timestamp)
  * ServerTimestamp [Timestamp](#timestamp)

### FragmentList
* FragmentList `array`
  * items [Fragment](#fragment)

### FragmentNumberList
* FragmentNumberList `array`
  * items [FragmentNumberString](#fragmentnumberstring)

### FragmentNumberString
* FragmentNumberString `string`

### FragmentSelector
* FragmentSelector `object`: Describes the time stamp range and time stamp origin of a range of fragments.
  * FragmentSelectorType **required** [FragmentSelectorType](#fragmentselectortype)
  * TimestampRange **required** [TimestampRange](#timestamprange)

### FragmentSelectorType
* FragmentSelectorType `string` (values: PRODUCER_TIMESTAMP, SERVER_TIMESTAMP)

### GetMediaForFragmentListInput
* GetMediaForFragmentListInput `object`
  * Fragments **required** [FragmentNumberList](#fragmentnumberlist)
  * StreamName **required** [StreamName](#streamname)

### GetMediaForFragmentListOutput
* GetMediaForFragmentListOutput `object`
  * Payload [Payload](#payload)

### InvalidArgumentException
* InvalidArgumentException `object`: A specified parameter exceeds its restrictions, is not supported, or can't be used.
  * Message [ErrorMessage](#errormessage)

### ListFragmentsInput
* ListFragmentsInput `object`
  * FragmentSelector [FragmentSelector](#fragmentselector)
  * MaxResults [PageLimit](#pagelimit)
  * NextToken [String](#string)
  * StreamName **required** [StreamName](#streamname)

### ListFragmentsOutput
* ListFragmentsOutput `object`
  * Fragments [FragmentList](#fragmentlist)
  * NextToken [String](#string)

### Long
* Long `integer`

### NotAuthorizedException
* NotAuthorizedException `object`: Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.
  * Message [ErrorMessage](#errormessage)

### PageLimit
* PageLimit `integer`

### Payload
* Payload `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: Kinesis Video Streams can't find the stream that you specified.
  * Message [ErrorMessage](#errormessage)

### StreamName
* StreamName `string`

### String
* String `string`

### Timestamp
* Timestamp `string`

### TimestampRange
* TimestampRange `object`: The range of time stamps for which to return fragments.
  * EndTimestamp **required** [Timestamp](#timestamp)
  * StartTimestamp **required** [Timestamp](#timestamp)


