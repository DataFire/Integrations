# @datafire/google_transcoder

Client library for Transcoder API

## Installation and Usage
```bash
npm install --save @datafire/google_transcoder
```
```js
let google_transcoder = require('@datafire/google_transcoder').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This API converts video files into formats suitable for consumer distribution. 

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_transcoder.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_transcoder.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### transcoder.projects.locations.jobTemplates.delete
Deletes a job template.


```js
google_transcoder.transcoder.projects.locations.jobTemplates.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### transcoder.projects.locations.jobTemplates.get
Returns the job template data.


```js
google_transcoder.transcoder.projects.locations.jobTemplates.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [JobTemplate](#jobtemplate)

### transcoder.projects.locations.jobTemplates.list
Lists job templates in the specified region.


```js
google_transcoder.transcoder.projects.locations.jobTemplates.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The `next_page_token` value returned from a previous List request, if any.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListJobTemplatesResponse](#listjobtemplatesresponse)

### transcoder.projects.locations.jobTemplates.create
Creates a job template in the specified region.


```js
google_transcoder.transcoder.projects.locations.jobTemplates.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`
  * jobTemplateId `string`: Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`.
  * body [JobTemplate](#jobtemplate)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [JobTemplate](#jobtemplate)

### transcoder.projects.locations.jobs.list
Lists jobs in the specified region.


```js
google_transcoder.transcoder.projects.locations.jobs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Format: `projects/{project}/locations/{location}`
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The `next_page_token` value returned from a previous List request, if any.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListJobsResponse](#listjobsresponse)

### transcoder.projects.locations.jobs.create
Creates a job in the specified region.


```js
google_transcoder.transcoder.projects.locations.jobs.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`
  * body [Job](#job)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Job](#job)



## Definitions

### AdBreak
* AdBreak `object`: Ad break.
  * startTimeOffset `string`: Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`.

### Aes128Encryption
* Aes128Encryption `object`: Configuration for AES-128 encryption.
  * keyUri `string`: Required. URI of the key delivery service. This URI is inserted into the M3U8 header.

### Animation
* Animation `object`: Animation types.
  * animationEnd [AnimationEnd](#animationend)
  * animationFade [AnimationFade](#animationfade)
  * animationStatic [AnimationStatic](#animationstatic)

### AnimationEnd
* AnimationEnd `object`: End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
  * startTimeOffset `string`: The time to end overlay object, in seconds. Default: 0

### AnimationFade
* AnimationFade `object`: Display overlay object with fade animation.
  * endTimeOffset `string`: The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s
  * fadeType `string` (values: FADE_TYPE_UNSPECIFIED, FADE_IN, FADE_OUT): Required. Type of fade animation: `FADE_IN` or `FADE_OUT`.
  * startTimeOffset `string`: The time to start the fade animation, in seconds. Default: 0
  * xy [NormalizedCoordinate](#normalizedcoordinate)

### AnimationStatic
* AnimationStatic `object`: Display static overlay object.
  * startTimeOffset `string`: The time to start displaying the overlay object, in seconds. Default: 0
  * xy [NormalizedCoordinate](#normalizedcoordinate)

### Audio
* Audio `object`: Audio preprocessing configuration.
  * highBoost `boolean`: Enable boosting high frequency components. The default is `false`.
  * lowBoost `boolean`: Enable boosting low frequency components. The default is `false`.
  * lufs `number`: Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0, where -24 is the Advanced Television Systems Committee (ATSC A/85), -23 is the EU R128 broadcast standard, -19 is the prior standard for online mono audio, -18 is the ReplayGain standard, -16 is the prior standard for stereo audio, -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo, and 0 disables normalization. The default is 0.

### AudioAtom
* AudioAtom `object`: The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
  * channels `array`: List of `Channel`s for this audio stream. for in-depth explanation.
    * items [AudioChannel](#audiochannel)
  * key `string`: Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`.

### AudioChannel
* AudioChannel `object`: The audio channel.
  * inputs `array`: List of `Job.inputs` for this audio channel.
    * items [AudioChannelInput](#audiochannelinput)

### AudioChannelInput
* AudioChannelInput `object`: Identifies which input file, track, and channel should be used.
  * channel `integer`: Required. The zero-based index of the channel in the input file.
  * gainDb `number`: Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
  * key `string`: Required. The `Input.key` that identifies the input file.
  * track `integer`: Required. The zero-based index of the track in the input file.

### AudioStream
* AudioStream `object`: Audio stream resource.
  * bitrateBps `integer`: Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
  * channelCount `integer`: Number of audio channels. Must be between 1 and 6. The default is 2.
  * channelLayout `array`: A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - 'fl' - Front left channel - 'fr' - Front right channel - 'sl' - Side left channel - 'sr' - Side right channel - 'fc' - Front center channel - 'lfe' - Low frequency
    * items `string`
  * codec `string`: The codec for this audio stream. The default is `"aac"`. Supported audio codecs: - 'aac' - 'aac-he' - 'aac-he-v2' - 'mp3' - 'ac3' - 'eac3'
  * mapping `array`: The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
    * items [AudioAtom](#audioatom)
  * sampleRateHertz `integer`: The audio sample rate in Hertz. The default is 48000 Hertz.

### Color
* Color `object`: Color preprocessing configuration.
  * brightness `number`: Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.
  * contrast `number`: Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.
  * saturation `number`: Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.

### Crop
* Crop `object`: Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
  * bottomPixels `integer`: The number of pixels to crop from the bottom. The default is 0.
  * leftPixels `integer`: The number of pixels to crop from the left. The default is 0.
  * rightPixels `integer`: The number of pixels to crop from the right. The default is 0.
  * topPixels `integer`: The number of pixels to crop from the top. The default is 0.

### Deblock
* Deblock `object`: Deblock preprocessing configuration.
  * enabled `boolean`: Enable deblocker. The default is `false`.
  * strength `number`: Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.

### Denoise
* Denoise `object`: Denoise preprocessing configuration.
  * strength `number`: Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
  * tune `string`: Set the denoiser mode. The default is `"standard"`. Supported denoiser modes: - 'standard' - 'grain'

### EditAtom
* EditAtom `object`: Edit atom.
  * endTimeOffset `string`: End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom.
  * inputs `array`: List of `Input.key`s identifying files that should be used in this atom. The listed `inputs` must have the same timeline.
    * items `string`
  * key `string`: A unique key for this atom. Must be specified when using advanced mapping.
  * startTimeOffset `string`: Start time in seconds for the atom, relative to the input file timeline. The default is `0s`.

### ElementaryStream
* ElementaryStream `object`: Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
  * audioStream [AudioStream](#audiostream)
  * key `string`: A unique key for this elementary stream.
  * textStream [TextStream](#textstream)
  * videoStream [VideoStream](#videostream)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Encryption
* Encryption `object`: Encryption settings.
  * aes128 [Aes128Encryption](#aes128encryption)
  * iv `string`: Required. 128 bit Initialization Vector (IV) represented as lowercase hexadecimal digits.
  * key `string`: Required. 128 bit encryption key represented as lowercase hexadecimal digits.
  * mpegCenc [MpegCommonEncryption](#mpegcommonencryption)
  * sampleAes [SampleAesEncryption](#sampleaesencryption)

### FailureDetail
* FailureDetail `object`: Additional information about the reasons for the failure.
  * description `string`: A description of the failure.

### Image
* Image `object`: Overlaid jpeg image.
  * alpha `number`: Target image opacity. Valid values: `1` (solid, default), `0` (transparent).
  * resolution [NormalizedCoordinate](#normalizedcoordinate)
  * uri `string`: Required. URI of the image in Cloud Storage. For example, `gs://bucket/inputs/image.jpeg`.

### Input
* Input `object`: Input asset.
  * key `string`: A unique key for this input. Must be specified when using advanced mapping and edit lists.
  * preprocessingConfig [PreprocessingConfig](#preprocessingconfig)
  * uri `string`: URI of the media. It must be stored in Cloud Storage. Example `gs://bucket/inputs/file.mp4`. If empty the value will be populated from `Job.input_uri`.

### Job
* Job `object`: Transcoding job resource.
  * config [JobConfig](#jobconfig)
  * createTime `string`: Output only. The time the job was created.
  * endTime `string`: Output only. The time the transcoding finished.
  * failureDetails `array`: Output only. List of failure details. This property may contain additional information about the failure when `failure_reason` is present. *Note*: This feature is not yet available.
    * items [FailureDetail](#failuredetail)
  * failureReason `string`: Output only. A description of the reason for the failure. This property is always present when `state` is `FAILED`.
  * inputUri `string`: Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. It must be stored in Cloud Storage. For example, `gs://bucket/inputs/file.mp4`.
  * name `string`: The resource name of the job. Format: `projects/{project}/locations/{location}/jobs/{job}`
  * originUri [OriginUri](#originuri)
  * outputUri `string`: Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`.
  * priority `integer`: Specify the priority of the job. Enter a value between 0 and 100, where 0 is the lowest priority and 100 is the highest priority. The default is 0.
  * progress [Progress](#progress)
  * startTime `string`: Output only. The time the transcoding started.
  * state `string` (values: PROCESSING_STATE_UNSPECIFIED, PENDING, RUNNING, SUCCEEDED, FAILED): Output only. The current state of the job.
  * templateId `string`: Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`. Preset Transcoder templates: - `preset/{preset_id}` - User defined JobTemplate: `{job_template_id}`
  * ttlAfterCompletionDays `integer`: Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.

### JobConfig
* JobConfig `object`: Job configuration
  * adBreaks `array`: List of ad breaks. Specifies where to insert ad break tags in the output manifests.
    * items [AdBreak](#adbreak)
  * editList `array`: List of `Edit atom`s. Defines the ultimate timeline of the resulting file or manifest.
    * items [EditAtom](#editatom)
  * elementaryStreams `array`: List of elementary streams.
    * items [ElementaryStream](#elementarystream)
  * inputs `array`: List of input assets stored in Cloud Storage.
    * items [Input](#input)
  * manifests `array`: List of output manifests.
    * items [Manifest](#manifest)
  * muxStreams `array`: List of multiplexing settings for output streams.
    * items [MuxStream](#muxstream)
  * output [Output](#output)
  * overlays `array`: List of overlays on the output video, in descending Z-order.
    * items [Overlay](#overlay)
  * pubsubDestination [PubsubDestination](#pubsubdestination)
  * spriteSheets `array`: List of output sprite sheets.
    * items [SpriteSheet](#spritesheet)

### JobTemplate
* JobTemplate `object`: Transcoding job template resource.
  * config [JobConfig](#jobconfig)
  * name `string`: The resource name of the job template. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`

### ListJobTemplatesResponse
* ListJobTemplatesResponse `object`: Response message for `TranscoderService.ListJobTemplates`.
  * jobTemplates `array`: List of job templates in the specified region.
    * items [JobTemplate](#jobtemplate)
  * nextPageToken `string`: The pagination token.

### ListJobsResponse
* ListJobsResponse `object`: Response message for `TranscoderService.ListJobs`.
  * jobs `array`: List of jobs in the specified region.
    * items [Job](#job)
  * nextPageToken `string`: The pagination token.

### Manifest
* Manifest `object`: Manifest configuration.
  * fileName `string`: The name of the generated file. The default is `"manifest"` with the extension suffix corresponding to the `Manifest.type`.
  * muxStreams `array`: Required. List of user given `MuxStream.key`s that should appear in this manifest. When `Manifest.type` is `HLS`, a media manifest with name `MuxStream.key` and `.m3u8` extension is generated for each element of the `Manifest.mux_streams`.
    * items `string`
  * type `string` (values: MANIFEST_TYPE_UNSPECIFIED, HLS, DASH): Required. Type of the manifest, can be "HLS" or "DASH".

### MpegCommonEncryption
* MpegCommonEncryption `object`: Configuration for MPEG Common Encryption (MPEG-CENC).
  * keyId `string`: Required. 128 bit Key ID represented as lowercase hexadecimal digits for use with common encryption.
  * scheme `string`: Required. Specify the encryption scheme. Supported encryption schemes: - 'cenc' - 'cbcs'

### MuxStream
* MuxStream `object`: Multiplexing settings for output stream.
  * container `string`: The container format. The default is `"mp4"` Supported container formats: - 'ts' - 'fmp4'- the corresponding file extension is `".m4s"` - 'mp4' - 'vtt'
  * elementaryStreams `array`: List of `ElementaryStream.key`s multiplexed in this stream.
    * items `string`
  * encryption [Encryption](#encryption)
  * fileName `string`: The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"mux_stream0000000123.ts"`.
  * key `string`: A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `".m3u8"` extension suffix.
  * segmentSettings [SegmentSettings](#segmentsettings)

### NormalizedCoordinate
* NormalizedCoordinate `object`: 2D normalized coordinates. Default: `{0.0, 0.0}`
  * x `number`: Normalized x coordinate.
  * y `number`: Normalized y coordinate.

### OriginUri
* OriginUri `object`: The origin URI.
  * dash `string`: Dash manifest URI. If multiple Dash manifests are created, only the first one is listed.
  * hls `string`: HLS manifest URI per https://tools.ietf.org/html/rfc8216#section-4.3.4. If multiple HLS manifests are created, only the first one is listed.

### Output
* Output `object`: Location of output file(s) in a Cloud Storage bucket.
  * uri `string`: URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty the value is populated from `Job.output_uri`.

### Overlay
* Overlay `object`: Overlay configuration.
  * animations `array`: List of Animations. The list should be chronological, without any time overlap.
    * items [Animation](#animation)
  * image [Image](#image)

### PreprocessingConfig
* PreprocessingConfig `object`: Preprocessing configurations.
  * audio [Audio](#audio)
  * color [Color](#color)
  * crop [Crop](#crop)
  * deblock [Deblock](#deblock)
  * denoise [Denoise](#denoise)

### Progress
* Progress `object`: Estimated fractional progress for each step, from `0` to `1`.
  * analyzed `number`: Estimated fractional progress for `analyzing` step.
  * encoded `number`: Estimated fractional progress for `encoding` step.
  * notified `number`: Estimated fractional progress for `notifying` step.
  * uploaded `number`: Estimated fractional progress for `uploading` step.

### PubsubDestination
* PubsubDestination `object`: A Pub/Sub destination.
  * topic `string`: The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`.

### SampleAesEncryption
* SampleAesEncryption `object`: Configuration for SAMPLE-AES encryption.
  * keyUri `string`: Required. URI of the key delivery service. This URI is inserted into the M3U8 header.

### SegmentSettings
* SegmentSettings `object`: Segment settings for `"ts"`, `"fmp4"` and `"vtt"`.
  * individualSegments `boolean`: Required. Create an individual segment file. The default is `false`.
  * segmentDuration `string`: Duration of the segments in seconds. The default is `"6.0s"`.

### SpriteSheet
* SpriteSheet `object`: Sprite sheet configuration.
  * columnCount `integer`: The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.
  * endTimeOffset `string`: End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file.
  * filePrefix `string`: Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `"sprite_sheet0000000123.jpeg"`.
  * format `string`: Format type. The default is `"jpeg"`. Supported formats: - 'jpeg'
  * interval `string`: Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds.
  * rowCount `integer`: The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.
  * spriteHeightPixels `integer`: Required. The height of sprite in pixels. Must be an even integer.
  * spriteWidthPixels `integer`: Required. The width of sprite in pixels. Must be an even integer.
  * startTimeOffset `string`: Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`.
  * totalCount `integer`: Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.

### TextAtom
* TextAtom `object`: The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
  * inputs `array`: List of `Job.inputs` that should be embedded in this atom. Only one input is supported.
    * items [TextInput](#textinput)
  * key `string`: Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.

### TextInput
* TextInput `object`: Identifies which input file and track should be used.
  * key `string`: Required. The `Input.key` that identifies the input file.
  * track `integer`: Required. The zero-based index of the track in the input file.

### TextStream
* TextStream `object`: Encoding of a text stream. For example, closed captions or subtitles.
  * codec `string`: The codec for this text stream. The default is `"webvtt"`. Supported text codecs: - 'srt' - 'ttml' - 'cea608' - 'cea708' - 'webvtt'
  * languageCode `string`: Required. The BCP-47 language code, such as `"en-US"` or `"sr-Latn"`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
  * mapping `array`: The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
    * items [TextAtom](#textatom)

### VideoStream
* VideoStream `object`: Video stream resource.
  * allowOpenGop `boolean`: Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.
  * aqStrength `number`: Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
  * bFrameCount `integer`: The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.
  * bPyramid `boolean`: Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.
  * bitrateBps `integer`: Required. The video bitrate in bits per second. Must be between 1 and 1,000,000,000.
  * codec `string`: Codec type. The following codecs are supported: * `h264` (default) * `h265` * `vp9`
  * crfLevel `integer`: Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
  * enableTwoPass `boolean`: Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `"vbr"`. The default is `false`.
  * entropyCoder `string`: The entropy coder to use. The default is `"cabac"`. Supported entropy coders: - 'cavlc' - 'cabac'
  * frameRate `number`: Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. The following table shows the computed video FPS given the target FPS (in parenthesis) and input FPS (in the first column): | | (30) | (60) | (25) | (50) | |--------|--------|--------|------|------| | 240 | Fail | Fail | Fail | Fail | | 120 | 30 | 60 | 20 | 30 | | 100 | 25 | 50 | 20 | 30 | | 50 | 25 | 50 | 20 | 30 | | 60 | 30 | 60 | 20 | 30 | | 59.94 | 29.97 | 59.94 | 20 | 30 | | 48 | 24 | 48 | 20 | 30 | | 30 | 30 | 30 | 20 | 30 | | 25 | 25 | 25 | 20 | 30 | | 24 | 24 | 24 | 20 | 30 | | 23.976 | 23.976 | 23.976 | 20 | 30 | | 15 | 15 | 15 | 20 | 30 | | 12 | 12 | 12 | 20 | 30 | | 10 | 10 | 10 | 20 | 30 |
  * gopDuration `string`: Select the GOP size based on the specified duration. The default is `"3s"`.
  * gopFrameCount `integer`: Select the GOP size based on the specified frame count. Must be greater than zero.
  * heightPixels `integer`: The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
  * pixelFormat `string`: Pixel format to use. The default is `"yuv420p"`. Supported pixel formats: - 'yuv420p' pixel format. - 'yuv422p' pixel format. - 'yuv444p' pixel format. - 'yuv420p10' 10-bit HDR pixel format. - 'yuv422p10' 10-bit HDR pixel format. - 'yuv444p10' 10-bit HDR pixel format. - 'yuv420p12' 12-bit HDR pixel format. - 'yuv422p12' 12-bit HDR pixel format. - 'yuv444p12' 12-bit HDR pixel format.
  * preset `string`: Enforces the specified codec preset. The default is `veryfast`. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message.
  * profile `string`: Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message.
  * rateControlMode `string`: Specify the `rate_control_mode`. The default is `"vbr"`. Supported rate control modes: - 'vbr' - variable bitrate - 'crf' - constant rate factor
  * tune `string`: Enforces the specified codec tune. The available options are FFmpeg-compatible. Note that certain values for this field may cause the transcoder to override other fields you set in the `VideoStream` message.
  * vbvFullnessBits `integer`: Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.
  * vbvSizeBits `integer`: Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.
  * widthPixels `integer`: The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.


