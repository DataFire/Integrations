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

amazonaws_kinesis_video_media.GetMedia({
  "StartSelector": {
    "StartSelectorType": ""
  }
}).then(data => {
  console.log(data);
});
```

## Description

<p/>

## Actions

### GetMedia



```js
amazonaws_kinesis_video_media.GetMedia({
  "StartSelector": {
    "StartSelectorType": ""
  }
}, context)
```

#### Input
* input `object`
  * StartSelector **required** [StartSelector](#startselector)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

#### Output
* output [GetMediaOutput](#getmediaoutput)



## Definitions

### ClientLimitExceededException
* ClientLimitExceededException `object`: Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
  * Message [ErrorMessage](#errormessage)

### ConnectionLimitExceededException
* ConnectionLimitExceededException `object`: Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client connections.
  * Message [ErrorMessage](#errormessage)

### ContentType
* ContentType `string`

### ContinuationToken
* ContinuationToken `string`

### ErrorMessage
* ErrorMessage `string`

### FragmentNumberString
* FragmentNumberString `string`

### GetMediaInput
* GetMediaInput `object`
  * StartSelector **required** [StartSelector](#startselector)
  * StreamARN [ResourceARN](#resourcearn)
  * StreamName [StreamName](#streamname)

### GetMediaOutput
* GetMediaOutput `object`
  * Payload [Payload](#payload)

### InvalidArgumentException
* InvalidArgumentException `object`: The value for this input parameter is invalid.
  * Message [ErrorMessage](#errormessage)

### InvalidEndpointException
* InvalidEndpointException `object`:  Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving such an exception, the user must call <code>GetDataEndpoint</code> with <code>AccessMode</code> set to "READ" and use the endpoint Kinesis Video returns in the next <code>GetMedia</code> call. 
  * Message [ErrorMessage](#errormessage)

### NotAuthorizedException
* NotAuthorizedException `object`: Status Code: 403, The caller is not authorized to perform an operation on the given stream, or the token has expired.
  * Message [ErrorMessage](#errormessage)

### Payload
* Payload `string`

### ResourceARN
* ResourceARN `string`

### ResourceNotFoundException
* ResourceNotFoundException `object`: Status Code: 404, The stream with the given name does not exist.
  * Message [ErrorMessage](#errormessage)

### StartSelector
* StartSelector `object`: <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or time stamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
  * AfterFragmentNumber [FragmentNumberString](#fragmentnumberstring)
  * ContinuationToken [ContinuationToken](#continuationtoken)
  * StartSelectorType **required** [StartSelectorType](#startselectortype)
  * StartTimestamp [Timestamp](#timestamp)

### StartSelectorType
* StartSelectorType `string` (values: FRAGMENT_NUMBER, SERVER_TIMESTAMP, PRODUCER_TIMESTAMP, NOW, EARLIEST, CONTINUATION_TOKEN)

### StreamName
* StreamName `string`

### Timestamp
* Timestamp `string`


