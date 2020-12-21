# @datafire/synq_fm

Client library for SYNQ Video

## Installation and Usage
```bash
npm install --save @datafire/synq_fm
```
```js
let synq_fm = require('@datafire/synq_fm').create();

.then(data => {
  console.log(data);
});
```

## Description

* [Sign up for a developer API key!](https://www.synq.fm/register)
* [SYNQ API Guide](/)

## Actions

### create
Create a new video, optionally setting some metadata fields. You may optionally set some of the metadata associated with the video. Only fields inside the "userdata" field can be set.


```js
synq_fm.create({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * userdata `string`: Additional metadata that will be associated with the video

#### Output
* output [VideoObject](#videoobject)

### details
Return details about a video. You may optionally request that only some of the metadata fields are returned.


```js
synq_fm.details({
  "api_key": "",
  "video_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * video_id **required** `string`: ID of the video to retrieve the metadata from

#### Output
* output [VideoObject](#videoobject)

### query
Find videos matching any criteria, by running a JavaScript function over each video object. A detailed tutorial on how to use this functionality is available on the [documentation page](https://www.synq.fm/queries-video-api/).


```js
synq_fm.query({
  "api_key": "",
  "filter": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * filter **required** `string`: JavaScript code to be run over each video object, to determine what should be returend.

#### Output
* output `array`
  * items `object`

### stream
Returns a stream url that you can stream to from your broadcasting software, and a playback url people can use to watch the stream.


```js
synq_fm.stream({
  "api_key": "",
  "video_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * video_id **required** `string`: The ID of the video you want to stream to. The video needs to have been previously created.

#### Output
* output `object`
  * playback_url **required** `string`
  * stream_url **required** `string`

### update
Update a video's metadata through JavaScript code. Only fields inside the "userdata" object can be set.


```js
synq_fm.update({
  "api_key": "",
  "video_id": "",
  "source": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * video_id **required** `string`: The ID of the video whose metadata will be updated
  * source **required** `string`: JavaScript code to execute on the video object.

#### Output
* output [VideoObject](#videoobject)

### upload
Return parameters needed for uploading a video file to Amazon Simple Storage Service. See http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html as well as the language-specific code-examples.
#### *Example request*
```shell
curl -s https://api.synq.fm/v1/video/upload \
  -F api_key=${SYNQ_API_KEY} \
  -F video_id=2d81c30ce62f4dfdb501dbca96c7ae56
```

#### *Example response*
```json
{
  "action": "https://synqfm.s3.amazonaws.com/",
  "AWSAccessKeyId": "AKIAIP77Y7MMX3ITZMFA",
  "Content-Type": "video/mp4",
  "Policy": "eyJleHBpcmF0aW9uIiA6ICIyMDE2LTA0LTIyVDE5OjAyOjI2LjE3MloiLCAiY29uZGl0aW9ucyIgOiBbeyJidWNrZXQiIDogInN5bnFmbSJ9LCB7ImFjbCIgOiAicHVibGljLXJlYWQifSwgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgInByb2plY3RzLzZlLzYzLzZlNjNiNzUyYTE4NTRkZGU4ODViNWNjNDcyZWRmNTY5L3VwbG9hZHMvdmlkZW9zLzJkLzgxLzJkODFjMzBjZTYyZjRkZmRiNTAxZGJjYTk2YzdhZTU2Lm1wNCJdLCBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAidmlkZW8vbXA0Il0sIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAxMDk5NTExNjI3Nzc2XV19",
  "Signature": "ysqDemlKXKr6hKzVFP0hCGgf/cs=",
  "acl": "public-read",
  "key": "projects/6e/63/6e63b752a1854dde885b5cc472edf569/uploads/videos/2d/81/2d81c30ce62f4dfdb501dbca96c7ae56.mp4"
}
```

To upload the file, you can then make a multipart POST request to the URL in `action`, and for all the other parameters returned, set them as form parameters.

Given the parameters above, you would upload a file `test.mp4` using cURL like this:

```shell
curl -s https://synqfm.s3.amazonaws.com/ \
  -F AWSAccessKeyId="AKIAIP77Y7MMX3ITZMFA" \
  -F Content-Type="video/mp4" \
  -F Policy="eyJleHBpcmF0aW9uIiA6ICIyMDE2LTA0LTIyVDE5OjAyOjI2LjE3MloiLCAiY29uZGl0aW9ucyIgOiBbeyJidWNrZXQiIDogInN5bnFmbSJ9LCB7ImFjbCIgOiAicHVibGljLXJlYWQifSwgWyJzdGFydHMtd2l0aCIsICIka2V5IiwgInByb2plY3RzLzZlLzYzLzZlNjNiNzUyYTE4NTRkZGU4ODViNWNjNDcyZWRmNTY5L3VwbG9hZHMvdmlkZW9zLzJkLzgxLzJkODFjMzBjZTYyZjRkZmRiNTAxZGJjYTk2YzdhZTU2Lm1wNCJdLCBbInN0YXJ0cy13aXRoIiwgIiRDb250ZW50LVR5cGUiLCAidmlkZW8vbXA0Il0sIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAxMDk5NTExNjI3Nzc2XV19" \
  -F Signature="ysqDemlKXKr6hKzVFP0hCGgf/cs=" \
  -F acl="public-read" \
  -F key="projects/6e/63/6e63b752a1854dde885b5cc472edf569/uploads/videos/2d/81/2d81c30ce62f4dfdb501dbca96c7ae56.mp4" \
  -F file="@my_video_file.mp4"
```




```js
synq_fm.upload({
  "api_key": "",
  "video_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * video_id **required** `string`: The ID of the video you are going to upload into. The video needs to have been previously created.

#### Output
* output [UploadParameterObject](#uploadparameterobject)

### uploader
Returns an embeddable url, that contains an uploader widget that allows you to easily upload any mp4. Great way to simplify the uploading process for end users.


```js
synq_fm.uploader({
  "api_key": "",
  "video_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * video_id **required** `string`: The ID of the video you are going to upload into. The video needs to have been previously created.
  * timeout `string`: How long the uploader widget works for. Anything from '30 minutes' to '2 days'.

#### Output
* output `object`
  * uploader_url `string`



## Definitions

### ErrorObject
* ErrorObject `object`
  * details `object`
  * message **required** `string`
  * name **required** `string`
  * url **required** `string`

### StreamConfigurationObject
* StreamConfigurationObject `object`
  * rtmp_host `string`
  * rtmp_key `string`
  * rtmp_port `string`
  * rtmp_url `string`

### UploadParameterObject
* UploadParameterObject `object`
  * AWSAccessKeyId `string`
  * Content-Type `string`
  * Policy `string`
  * Signature `string`
  * acl `string`
  * action `string`
  * key `string`

### VideoObject
* VideoObject `object`
  * created_at **required** `string`
  * input `object`
  * outputs `object`
  * state **required** `string`
  * updated_at **required** `string`
  * userdata **required** `object`
  * video_id **required** `string`


