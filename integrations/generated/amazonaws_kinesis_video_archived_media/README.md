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

.then(data => {
  console.log(data);
});
```

## Description

<p/>

## Actions

### GetClip



```js
amazonaws_kinesis_video_archived_media.GetClip({
  "ClipFragmentSelector": {}
}, context)
```

#### Input
* input `object`
  * ClipFragmentSelector **required** `object`: <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp **required**
      * StartTimestamp **required**
  * StreamARN `string`: <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
  * StreamName `string`: <p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>

#### Output
* output [GetClipOutput](#getclipoutput)

### GetDASHStreamingSessionURL



```js
amazonaws_kinesis_video_archived_media.GetDASHStreamingSessionURL({}, context)
```

#### Input
* input `object`
  * DASHFragmentSelector `object`: Contains the range of timestamps for the requested media, and the source of the timestamps. 
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp
      * StartTimestamp
  * DisplayFragmentNumber `string` (values: ALWAYS, NEVER): <p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p>
  * DisplayFragmentTimestamp `string` (values: ALWAYS, NEVER): <p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>
  * Expires `integer`: <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
  * MaxManifestFragmentResults `integer`: <p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>
  * PlaybackMode `string` (values: LIVE, LIVE_REPLAY, ON_DEMAND): <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>
  * StreamARN `string`: <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
  * StreamName `string`: <p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>

#### Output
* output [GetDASHStreamingSessionURLOutput](#getdashstreamingsessionurloutput)

### GetHLSStreamingSessionURL



```js
amazonaws_kinesis_video_archived_media.GetHLSStreamingSessionURL({}, context)
```

#### Input
* input `object`
  * ContainerFormat `string` (values: FRAGMENTED_MP4, MPEG_TS): <p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p>
  * DiscontinuityMode `string` (values: ALWAYS, NEVER, ON_DISCONTINUITY): <p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTIUNITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p>
  * DisplayFragmentTimestamp `string` (values: ALWAYS, NEVER): <p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>
  * Expires `integer`: <p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>
  * HLSFragmentSelector `object`: Contains the range of timestamps for the requested media, and the source of the timestamps.
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp
      * StartTimestamp
  * MaxMediaPlaylistFragmentResults `integer`: <p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>
  * PlaybackMode `string` (values: LIVE, LIVE_REPLAY, ON_DEMAND): <p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>
  * StreamARN `string`: <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>
  * StreamName `string`: <p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>

#### Output
* output [GetHLSStreamingSessionURLOutput](#gethlsstreamingsessionurloutput)

### GetMediaForFragmentList



```js
amazonaws_kinesis_video_archived_media.GetMediaForFragmentList({
  "StreamName": "",
  "Fragments": []
}, context)
```

#### Input
* input `object`
  * Fragments **required** `array`: A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.
    * items [FragmentNumberString](#fragmentnumberstring)
  * StreamName **required** `string`: The name of the stream from which to retrieve fragment media.

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
  * MaxResults `string`
  * NextToken `string`
  * FragmentSelector `object`: <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp **required**
      * StartTimestamp **required**
  * MaxResults `integer`: The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.
  * NextToken `string`: A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.
  * StreamName **required** `string`: The name of the stream from which to retrieve a fragment list.

#### Output
* output [ListFragmentsOutput](#listfragmentsoutput)



## Definitions

### ClientLimitExceededException


### ClipFragmentSelector
* ClipFragmentSelector `object`: <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
  * FragmentSelectorType **required**
  * TimestampRange **required**
    * EndTimestamp **required**
    * StartTimestamp **required**

### ClipFragmentSelectorType
* ClipFragmentSelectorType `string` (values: PRODUCER_TIMESTAMP, SERVER_TIMESTAMP)

### ClipTimestampRange
* ClipTimestampRange `object`: <p>The range of timestamps for which to return fragments.</p> <p>The values in the ClipTimestampRange are <code>inclusive</code>. Fragments that begin before the start time but continue past it, or fragments that begin before the end time but continue past it, are included in the session. </p>
  * EndTimestamp **required**
  * StartTimestamp **required**

### ContainerFormat
* ContainerFormat `string` (values: FRAGMENTED_MP4, MPEG_TS)

### ContentType
* ContentType `string`

### DASHDisplayFragmentNumber
* DASHDisplayFragmentNumber `string` (values: ALWAYS, NEVER)

### DASHDisplayFragmentTimestamp
* DASHDisplayFragmentTimestamp `string` (values: ALWAYS, NEVER)

### DASHFragmentSelector
* DASHFragmentSelector `object`: Contains the range of timestamps for the requested media, and the source of the timestamps. 
  * FragmentSelectorType
  * TimestampRange
    * EndTimestamp
    * StartTimestamp

### DASHFragmentSelectorType
* DASHFragmentSelectorType `string` (values: PRODUCER_TIMESTAMP, SERVER_TIMESTAMP)

### DASHPlaybackMode
* DASHPlaybackMode `string` (values: LIVE, LIVE_REPLAY, ON_DEMAND)

### DASHStreamingSessionURL
* DASHStreamingSessionURL `string`

### DASHTimestampRange
* DASHTimestampRange `object`: <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <note> <p>The values in the <code>DASHimestampRange</code> are inclusive. Fragments that begin before the start time but continue past it, or fragments that begin before the end time but continue past it, are included in the session.</p> </note>
  * EndTimestamp
  * StartTimestamp

### Expires
* Expires `integer`

### Fragment
* Fragment `object`: Represents a segment of video or other time-delimited data.
  * FragmentLengthInMilliseconds
  * FragmentNumber
  * FragmentSizeInBytes
  * ProducerTimestamp
  * ServerTimestamp

### FragmentList
* FragmentList `array`
  * items [Fragment](#fragment)

### FragmentNumberList
* FragmentNumberList `array`
  * items [FragmentNumberString](#fragmentnumberstring)

### FragmentNumberString
* FragmentNumberString `string`

### FragmentSelector
* FragmentSelector `object`: <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>
  * FragmentSelectorType **required**
  * TimestampRange **required**
    * EndTimestamp **required**
    * StartTimestamp **required**

### FragmentSelectorType
* FragmentSelectorType `string` (values: PRODUCER_TIMESTAMP, SERVER_TIMESTAMP)

### GetClipInput
* GetClipInput `object`
  * ClipFragmentSelector **required**
    * FragmentSelectorType **required**
    * TimestampRange **required**
      * EndTimestamp **required**
      * StartTimestamp **required**
  * StreamARN
  * StreamName

### GetClipOutput
* GetClipOutput `object`
  * Payload

### GetDASHStreamingSessionURLInput
* GetDASHStreamingSessionURLInput `object`
  * DASHFragmentSelector
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp
      * StartTimestamp
  * DisplayFragmentNumber
  * DisplayFragmentTimestamp
  * Expires
  * MaxManifestFragmentResults
  * PlaybackMode
  * StreamARN
  * StreamName

### GetDASHStreamingSessionURLOutput
* GetDASHStreamingSessionURLOutput `object`
  * DASHStreamingSessionURL

### GetHLSStreamingSessionURLInput
* GetHLSStreamingSessionURLInput `object`
  * ContainerFormat
  * DiscontinuityMode
  * DisplayFragmentTimestamp
  * Expires
  * HLSFragmentSelector
    * FragmentSelectorType
    * TimestampRange
      * EndTimestamp
      * StartTimestamp
  * MaxMediaPlaylistFragmentResults
  * PlaybackMode
  * StreamARN
  * StreamName

### GetHLSStreamingSessionURLOutput
* GetHLSStreamingSessionURLOutput `object`
  * HLSStreamingSessionURL

### GetMediaForFragmentListInput
* GetMediaForFragmentListInput `object`
  * Fragments **required**
    * items [FragmentNumberString](#fragmentnumberstring)
  * StreamName **required**

### GetMediaForFragmentListOutput
* GetMediaForFragmentListOutput `object`
  * Payload

### HLSDiscontinuityMode
* HLSDiscontinuityMode `string` (values: ALWAYS, NEVER, ON_DISCONTINUITY)

### HLSDisplayFragmentTimestamp
* HLSDisplayFragmentTimestamp `string` (values: ALWAYS, NEVER)

### HLSFragmentSelector
* HLSFragmentSelector `object`: Contains the range of timestamps for the requested media, and the source of the timestamps.
  * FragmentSelectorType
  * TimestampRange
    * EndTimestamp
    * StartTimestamp

### HLSFragmentSelectorType
* HLSFragmentSelectorType `string` (values: PRODUCER_TIMESTAMP, SERVER_TIMESTAMP)

### HLSPlaybackMode
* HLSPlaybackMode `string` (values: LIVE, LIVE_REPLAY, ON_DEMAND)

### HLSStreamingSessionURL
* HLSStreamingSessionURL `string`

### HLSTimestampRange
* HLSTimestampRange `object`: <p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <note> <p>The values in the <code>HLSTimestampRange</code> are inclusive. Fragments that begin before the start time but continue past it, or fragments that begin before the end time but continue past it, are included in the session.</p> </note>
  * EndTimestamp
  * StartTimestamp

### InvalidArgumentException


### InvalidCodecPrivateDataException


### InvalidMediaFrameException


### ListFragmentsInput
* ListFragmentsInput `object`
  * FragmentSelector
    * FragmentSelectorType **required**
    * TimestampRange **required**
      * EndTimestamp **required**
      * StartTimestamp **required**
  * MaxResults
  * NextToken
  * StreamName **required**

### ListFragmentsOutput
* ListFragmentsOutput `object`
  * Fragments
    * items [Fragment](#fragment)
  * NextToken

### Long
* Long `integer`

### MissingCodecPrivateDataException


### NextToken
* NextToken `string`

### NoDataRetentionException


### NotAuthorizedException


### PageLimit
* PageLimit `integer`

### Payload
* Payload `string`

### ResourceARN
* ResourceARN `string`

### ResourceNotFoundException


### StreamName
* StreamName `string`

### Timestamp
* Timestamp `string`

### TimestampRange
* TimestampRange `object`: The range of timestamps for which to return fragments.
  * EndTimestamp **required**
  * StartTimestamp **required**

### UnsupportedStreamMediaTypeException



