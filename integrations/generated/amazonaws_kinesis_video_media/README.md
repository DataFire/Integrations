# @datafire/amazonaws_kinesis_video_media

Client library for Amazon Kinesis Video Streams Media

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kinesis_video_media
```
```js
let amazonaws_kinesis_video_media = require('@datafire/amazonaws_kinesis_video_media').create({
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

### GetMedia



```js
amazonaws_kinesis_video_media.GetMedia({
  "StartSelector": {}
}, context)
```

#### Input
* input `object`
  * StartSelector **required** `object`: <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
    * AfterFragmentNumber
    * ContinuationToken
    * StartSelectorType
    * StartTimestamp
  * StreamARN `string`: The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.
  * StreamName `string`: The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.

#### Output
* output [GetMediaOutput](#getmediaoutput)



## Definitions

### ClientLimitExceededException


### ConnectionLimitExceededException


### ContentType
* ContentType `string`

### ContinuationToken
* ContinuationToken `string`

### FragmentNumberString
* FragmentNumberString `string`

### GetMediaInput
* GetMediaInput `object`
  * StartSelector **required**
    * AfterFragmentNumber
    * ContinuationToken
    * StartSelectorType **required**
    * StartTimestamp
  * StreamARN
  * StreamName

### GetMediaOutput
* GetMediaOutput `object`
  * Payload

### InvalidArgumentException


### InvalidEndpointException


### NotAuthorizedException


### Payload
* Payload `string`

### ResourceARN
* ResourceARN `string`

### ResourceNotFoundException


### StartSelector
* StartSelector `object`: <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
  * AfterFragmentNumber
  * ContinuationToken
  * StartSelectorType **required**
  * StartTimestamp

### StartSelectorType
* StartSelectorType `string` (values: FRAGMENT_NUMBER, SERVER_TIMESTAMP, PRODUCER_TIMESTAMP, NOW, EARLIEST, CONTINUATION_TOKEN)

### StreamName
* StreamName `string`

### Timestamp
* Timestamp `string`


