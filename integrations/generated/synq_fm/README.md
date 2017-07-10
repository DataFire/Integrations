# @datafire/synq_fm
* [Sign up for a developer API key!](https://www.synq.fm/register)
* [SYNQ API Guide](/)

## Operation: create
Create a new video, optionally setting some metadata fields. You may optionally set some of the metadata associated with the video. Only fields inside the "userdata" field can be set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "userdata": {
      "type": "string",
      "description": "Additional metadata that will be associated with the video"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VideoObject"
}
```
## Operation: details
Return details about a video. You may optionally request that only some of the metadata fields are returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "video_id": {
      "type": "string",
      "description": "ID of the video to retrieve the metadata from"
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "video_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VideoObject"
}
```
## Operation: query
Find videos matching any criteria, by running a JavaScript function over each video object. A detailed tutorial on how to use this functionality is available on the [documentation page](https://www.synq.fm/queries-video-api/).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "filter": {
      "type": "string",
      "description": "JavaScript code to be run over each video object, to determine what should be returend."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "filter"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "type": "object"
  },
  "type": "array"
}
```
## Operation: stream
Returns a stream url that you can stream to from your broadcasting software, and a playback url people can use to watch the stream.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "video_id": {
      "type": "string",
      "description": "The ID of the video you want to stream to. The video needs to have been previously created."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "video_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "playback_url": {
      "example": "http://stmr1.synq.fm:8081/abr/58a6657b73039192a1000006/playlist.m3u8",
      "type": "string"
    },
    "stream_url": {
      "example": "rtmp://stmr1.synq.fm:1935/live/58a6657b73039192a1000006?publishsign=aWQ9NTc4N2I5MDI5MzRjY2RlMjcwMDAwMDA4JnNpZ249VTJCTU84bTRPS0R6OW9NanRUdkVLUT09JmlwPTg5LjE5MS4yNi41Nw==",
      "type": "string"
    }
  },
  "required": [
    "stream_url",
    "playback_url"
  ],
  "title": "StreamInformationObject",
  "type": "object"
}
```
## Operation: update
Update a video's metadata through JavaScript code. Only fields inside the "userdata" object can be set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "video_id": {
      "type": "string",
      "description": "The ID of the video whose metadata will be updated"
    },
    "source": {
      "type": "string",
      "description": "JavaScript code to execute on the video object."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "video_id",
    "source"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VideoObject"
}
```
## Operation: upload
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



### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "video_id": {
      "type": "string",
      "description": "The ID of the video you are going to upload into. The video needs to have been previously created."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "video_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UploadParameterObject"
}
```
## Operation: uploader
Returns an embeddable url, that contains an uploader widget that allows you to easily upload any mp4. Great way to simplify the uploading process for end users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "api_key": {
      "type": "string"
    },
    "video_id": {
      "type": "string",
      "description": "The ID of the video you are going to upload into. The video needs to have been previously created."
    },
    "timeout": {
      "type": "string",
      "description": "How long the uploader widget works for. Anything from '30 minutes' to '2 days'."
    }
  },
  "additionalProperties": false,
  "required": [
    "api_key",
    "video_id"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "uploader_url": {
      "example": "https://uploader.synq.fm/uploader/5920d3dfe2dc4b36bd83df6f37ae9bc1?token=18d3bfa5aa4046df9202e6b5ac74760a",
      "type": "string"
    }
  },
  "title": "UploaderInformationObject",
  "type": "object"
}
```
