# @datafire/wowza

Client library for Wowza Streaming Cloud REST API Reference Documentation

## Installation and Usage
```bash
npm install --save @datafire/wowza
```
```js
let wowza = require('@datafire/wowza').create({
  "wsc-access-key": "",
  "wsc-api-key": ""
});

wowza.usageTimeTranscodersIndex({}).then(data => {
  console.log(data);
});
```

## Description


# About the REST API

The Wowza Streaming Cloud<sup>TM</sup> REST API (application programming interface) offers complete programmatic control over live streams, transcoders, stream sources, and stream targets. Anything you can do in the Wowza Streaming Cloud UI can also be achieved by making HTTP-based requests to cloud-based servers through the REST API.

The Wowza Streaming Cloud REST API features *cross-origin resource sharing*, or CORS.
CORS is a [W3C specification](https://www.w3.org/TR/cors/) that provides headers in HTTP requests to enable a web server to safely make a network request to another domain.

In order to protect shared resources, the Wowza Streaming Cloud REST API is subject to limits. For details, see [Wowza Streaming Cloud REST API limits](https://www.wowza.com/docs/wowza-streaming-cloud-rest-api-limits).
# About this documentation
This reference documentation is based on the open-source [Swagger framework](http://swagger.io/specification/).
It allows you to view the operations, parameters, and request and reponse schemas for every resource. Request samples are presented in cURL (Shell) and JavaScript; some samples also include just the JSON object. Response samples are all JSON.

For more information and examples on using the Wowza Streaming Cloud REST API, see our [library of Wowza Streaming Cloud REST API technical articles](https://www.wowza.com/docs/wowza-streaming-cloud-rest-api).

# Query requirements
The Wowza Streaming Cloud REST API uses HTTP requests to retrieve data from cloud-based servers. Requests must contain proper JSON, two authentication keys, and the correct version number in the base path.

## JSON
The Wowza Streaming Cloud REST API uses the [JSON API specification](http://jsonapi.org/format/) to request and return data. This means requests must include the header `Content-Type: application/json` and must include a single resource object in JSON format as primary data.

Responses include HTTP status codes that indicate whether the query was successful. If there was an error, a description explains the problem so that you can fix it and try again.

## Authentication
Requests to the Wowza Streaming Cloud REST API must be authenticated with two keys: an API key and an access key. Each key is a 64-character alphanumeric string that you can find on the **API Access** page in Wowza Streaming Cloud.

Use the `wsc-api-key` and `wsc-access-key` headers to authenticate requests, like this (in cURL):

```bash
curl -H 'wsc-api-key: [64-character-api-key-goes-here]' -H 'wsc-access-key: [64-character-access-key-goes-here]'
```

<!-- ReDoc-Inject: <security-definitions> -->

## Version
The Wowza Streaming Cloud API is currently at version 1.0.0. Use `v1` in your base path in every request, like this path to the live_streams endpoint:
```
https://api.cloud.wowza.com/api/v1/live_streams
```
## Example query
Here is a complete example POST request, in cURL, with proper JSON syntax, headers, authentication, and version information:
```bash
curl -H 'wsc-api-key: [64-character-api-key-goes-here]' -H 'wsc-access-key: [64-character-access-key-goes-here]'
  -H 'Content-Type: application/json' -X POST -d '{
    "live_stream": {
      "name": "My live Stream",
      "...": "..."
    }
  }' https://api.cloud.wowza.com/api/v1/live_streams
```


## Actions

### specs
This operation shows the details of the Swagger specification.



```js
wowza.specs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Spec](#spec)

### listLiveStreams
This operation shows the details of all of your live streams.


```js
wowza.listLiveStreams({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [live_streams](#live_streams)

### createLiveStream
This operation creates a live stream.


```js
wowza.createLiveStream({
  "live_stream": {
    "live_stream": {
      "name": "",
      "transcoder_type": "",
      "billing_mode": "",
      "broadcast_location": "",
      "encoder": "",
      "aspect_ratio_width": 0,
      "aspect_ratio_height": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * live_stream **required** [live_stream_create_input](#live_stream_create_input)

#### Output
* output `object`
  * live_stream **required** [live_stream](#live_stream)

### deleteLiveStream
This operation deletes a live stream, including all assigned outputs and targets.


```js
wowza.deleteLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
*Output schema unknown*

### showLiveStream
This operation shows the details of a specific live stream.


```js
wowza.showLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** [live_stream](#live_stream)

### updateLiveStream
This operation updates a live stream.


```js
wowza.updateLiveStream({
  "id": "",
  "live_stream": {
    "live_stream": {
      "name": "",
      "encoder": "",
      "aspect_ratio_width": 0,
      "aspect_ratio_height": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.
  * live_stream **required** [live_stream_update_input](#live_stream_update_input)

#### Output
* output `object`
  * live_stream **required** [live_stream](#live_stream)

### regenerateConnectionCodeLiveStream
This operation regenerates the connection code of a live stream.


```js
wowza.regenerateConnectionCodeLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * connection_code `string`: A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created.

### resetLiveStream
This operation resets a live stream.


```js
wowza.resetLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * state `string` (values: started, stopped, starting, stopping, resetting): The state of the live stream.

### startLiveStream
This operation starts a live stream.


```js
wowza.startLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * state `string` (values: started, stopped, starting, stopping, resetting): The state of the live stream.

### showLiveStreamState
This operation shows the current state of a live stream.


```js
wowza.showLiveStreamState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * state `string` (values: started, stopped, starting, stopping, resetting): The state of the live stream.

### showLiveStreamStats
This operation returns a hash of metrics keys, each of which identifies a status, text description, unit, and value.


```js
wowza.showLiveStreamStats({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** [shm_metrics](#shm_metrics)

### stopLiveStream
This operation stops a live stream.


```js
wowza.stopLiveStream({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * state `string` (values: started, stopped, starting, stopping, resetting): The state of the live stream.

### showLiveStreamThumbnailUrl
This operation shows the thumbnail URL of a started live stream.


```js
wowza.showLiveStreamThumbnailUrl({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the live stream.

#### Output
* output `object`
  * live_stream **required** `object`
    * thumbnail_url `string`: The URL to receive the preview thumbnail.

### listPlayers
This operation shows the details of all of your players.


```js
wowza.listPlayers({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [players](#players)

### showPlayer
This operation shows details of a specific player.


```js
wowza.showPlayer({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the player.

#### Output
* output `object`
  * player **required** [player](#player)

### updatePlayer
This operation updates a player.


```js
wowza.updatePlayer({
  "id": "",
  "player": {
    "player": {}
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the player.
  * player **required** [player_update_input](#player_update_input)

#### Output
* output `object`
  * player **required** [player](#player)

### requestPlayerRebuild
This operation rebuilds the player with the current configuration.


```js
wowza.requestPlayerRebuild({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the player.

#### Output
* output `object`
  * player **required** `object`
    * state `string` (values: requested, already_requested, activated, archived): The state of the player.

### showPlayerState
This operation shows the current state of a player.


```js
wowza.showPlayerState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the player.

#### Output
* output `object`
  * player **required** `object`
    * state `string` (values: requested, already_requested, activated, archived): The state of the player.

### listPlayerUrls
This operation shows the details of all player URLs.


```js
wowza.listPlayerUrls({
  "player_id": ""
}, context)
```

#### Input
* input `object`
  * player_id **required** `string`: The unique alphanumeric string that identifies the player.

#### Output
* output [urls](#urls)

### createPlayerUrl
This operation creates a new player URL.


```js
wowza.createPlayerUrl({
  "player_id": "",
  "url": null
}, context)
```

#### Input
* input `object`
  * player_id **required** `string`: The unique alphanumeric string that identifies the player.
  * url **required** [url_create_input](#url_create_input)

#### Output
* output `object`
  * url **required** [url](#url)

### deletePlayerUrl
This operation deletes a player URL. 


```js
wowza.deletePlayerUrl({
  "player_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * player_id **required** `string`: The unique alphanumeric string that identifies the player.
  * id **required** `string`: The unique alphanumeric string that identifies the player URL.

#### Output
*Output schema unknown*

### showPlayerUrl
This operation shows the details of a player URL.


```js
wowza.showPlayerUrl({
  "player_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * player_id **required** `string`: The unique alphanumeric string that identifies the player.
  * id **required** `string`: The unique alphanumeric string that identifies the player URL.

#### Output
* output `object`
  * url **required** [url](#url)

### updatePlayerUrl
This operation updates a player URL.


```js
wowza.updatePlayerUrl({
  "player_id": "",
  "id": "",
  "url": null
}, context)
```

#### Input
* input `object`
  * player_id **required** `string`: The unique alphanumeric string that identifies the player.
  * id **required** `string`: The unique alphanumeric string that identifies the player URL.
  * url **required** [url_update_input](#url_update_input)

#### Output
* output `object`
  * url **required** [url](#url)

### listRecordings
This operation shows the details of all of your recordings.


```js
wowza.listRecordings({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [recordings](#recordings)

### deleteRecording
This operation deletes a recording.


```js
wowza.deleteRecording({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the recording.

#### Output
*Output schema unknown*

### showRecording
This operation shows the details of a specific recording.


```js
wowza.showRecording({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the recording.

#### Output
* output `object`
  * recording **required** [recording](#recording)

### showRecordingState
This operation shows the current state of a recording.


```js
wowza.showRecordingState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the recording.

#### Output
* output `object`
  * recording **required** `object`
    * state `string` (values: uploading, converting, removing, completed, failed): The state of the recording.

### listSchedules
This operation shows the details of all of your schedules.


```js
wowza.listSchedules({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [schedules](#schedules)

### createSchedule
This operation creates a schedule.


```js
wowza.createSchedule({
  "schedule": {
    "schedule": {
      "name": "",
      "transcoder_id": "",
      "action_type": "",
      "recurrence_type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * schedule **required** [schedule_create_input](#schedule_create_input)

#### Output
* output `object`
  * schedule **required** [schedule](#schedule)

### deleteSchedule
This operation deletes a schedule.


```js
wowza.deleteSchedule({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.

#### Output
*Output schema unknown*

### showSchedule
This operation shows the details of a specific schedule.


```js
wowza.showSchedule({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.

#### Output
* output `object`
  * schedule **required** [schedule](#schedule)

### updateSchedule
This operation updates a schedule.


```js
wowza.updateSchedule({
  "id": "",
  "schedule": {
    "schedule": {
      "name": "",
      "action_type": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.
  * schedule **required** [schedule_update_input](#schedule_update_input)

#### Output
* output `object`
  * schedule **required** [schedule](#schedule)

### disableSchedule
This operation disables a schedule.


```js
wowza.disableSchedule({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.

#### Output
* output `object`
  * schedule **required** `object`
    * state `string` (values: enabled, disabled, expired): A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run.

### enableSchedule
This operation enables a schedule.


```js
wowza.enableSchedule({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.

#### Output
* output `object`
  * schedule **required** `object`
    * state `string` (values: enabled, disabled, expired): A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run.

### showScheduleState
This operation shows the current state of a schedule.


```js
wowza.showScheduleState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the schedule.

#### Output
* output `object`
  * schedule **required** `object`
    * state `string` (values: enabled, disabled, expired): A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run.

### listStreamSources
This operation shows the details of all of your stream sources.


```js
wowza.listStreamSources({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [stream_sources](#stream_sources)

### createStreamSource
This operation adds a stream source.


```js
wowza.createStreamSource({
  "stream_source": {
    "stream_source": {
      "name": "",
      "location_method": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * stream_source **required** [stream_source_create_input](#stream_source_create_input)

#### Output
* output `object`
  * stream_source **required** [stream_source](#stream_source)

### addStreamSource
POST /stream_sources/add/ is deprecated. To add a stream source, use POST /stream_sources instead.


```js
wowza.addStreamSource({
  "stream_source": {
    "stream_source": {
      "name": "",
      "location_method": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * stream_source **required** [stream_source_create_input](#stream_source_create_input)

#### Output
* output `object`
  * stream_source **required** [stream_source](#stream_source)

### deleteStreamSource
This operation deletes a stream source.


```js
wowza.deleteStreamSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream source.

#### Output
*Output schema unknown*

### showStreamSource
This operation shows details of a specific stream source.


```js
wowza.showStreamSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream source.

#### Output
* output `object`
  * stream_source **required** [stream_source](#stream_source)

### updateStreamSource
This operation updates a stream source.


```js
wowza.updateStreamSource({
  "id": "",
  "stream_source": {
    "stream_source": {
      "name": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream source.
  * stream_source **required** [stream_source_update_input](#stream_source_update_input)

#### Output
* output `object`
  * stream_source **required** [stream_source](#stream_source)

### listStreamTargets
This operation lists the details of all of your stream targets.


```js
wowza.listStreamTargets({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [stream_targets](#stream_targets)

### createStreamTarget
This operation creates a stream target. There are three types of targets that you can create: <strong>CustomStreamTarget</strong> for an an external, third-party destination; <strong>WowzaStreamTarget</strong> for a Wowza CDN target; or <strong>UltraLowLatencyStreamTarget</strong> for an ultra low latency Wowza CDN target. The availability of many parameters depends on the type of target you create.


```js
wowza.createStreamTarget({
  "stream_target": null
}, context)
```

#### Input
* input `object`
  * stream_target **required** [stream_target_create_input](#stream_target_create_input)

#### Output
* output `object`
  * stream_target **required** [stream_target](#stream_target)

### addStreamTarget
POST /stream_targets/add/ is deprecated. To add a stream target, use POST /stream_targets instead.


```js
wowza.addStreamTarget({
  "stream_target": {
    "stream_target": {
      "name": "",
      "location": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * stream_target **required** [wowza_stream_target_input](#wowza_stream_target_input)

#### Output
* output `object`
  * stream_target **required** [stream_target](#stream_target)

### deleteStreamTarget
This operation deletes a stream target.


```js
wowza.deleteStreamTarget({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
*Output schema unknown*

### showStreamTarget
This operation shows details of a specific stream target.


```js
wowza.showStreamTarget({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * stream_target **required** [stream_target](#stream_target)

### updateStreamTarget
This operation updates a stream target.


```js
wowza.updateStreamTarget({
  "id": "",
  "stream_target": {
    "stream_target": {}
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * stream_target **required** [stream_target_update_input](#stream_target_update_input)

#### Output
* output `object`
  * stream_target **required** [stream_target](#stream_target)

### showStreamTargetMetricsCurrent
This operation returns a snapshot of the current connection and throughput details for an active target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The interval for current metrics is 30 seconds from the moment of the query.


```js
wowza.showStreamTargetMetricsCurrent({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * id `string`: The unique alphanumeric string that identifies the stream target.
  * metrics [stream_target_metrics](#stream_target_metrics)

### showStreamTargetMetricsHistoric
This operation shows historic connection and throughput details for target whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>.


```js
wowza.showStreamTargetMetricsHistoric({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * from `string`: The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * to `string`: The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * interval `string` (values: second, minute, hour, day, month, #s, #m, #h, #d): The length of time for a block of metrics. The default is **10m** (10 minutes).

#### Output
* output `object`
  * id `string`: The unique alphanumeric string that identifies the stream target.
  * interval `string`: The length of time for a block of metrics. The default is **10m** (10 minutes).
  * metrics `array`
    * items [stream_target_metrics](#stream_target_metrics)

### regenerateConnectionCodeStreamTarget
This operation regenerates the connection code of a stream target.


```js
wowza.regenerateConnectionCodeStreamTarget({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * stream_target **required** `object`
    * connection_code `string`: A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created.

### showStreamTargetGeoblock
This operation shows the details of geo-blocking applied to a specific stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.


```js
wowza.showStreamTargetGeoblock({
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * geoblock **required** [geoblock](#geoblock)

### updateStreamTargetGeoblock
This operation updates the geo-blocking applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked.


```js
wowza.updateStreamTargetGeoblock({
  "stream_target_id": "",
  "geoblock": null
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * geoblock **required** [geoblock_update_input](#geoblock_update_input)

#### Output
* output `object`
  * geoblock **required** [geoblock](#geoblock)

### createStreamTargetGeoblock
This operation allows you to block or whitelist viewing of a stream target by geographic location. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can be geo-blocked. For more information see the technical article [How to geo-block stream targets by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-geo-block-stream-targets-by-using-the-wowza-streaming-cloud-rest-api).


```js
wowza.createStreamTargetGeoblock({
  "stream_target_id": "",
  "geoblock": null
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * geoblock **required** [geoblock_create_input](#geoblock_create_input)

#### Output
* output `object`
  * geoblock **required** [geoblock](#geoblock)

### listStreamTargetProperties
This operation shows the details of all of the properties assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.


```js
wowza.listStreamTargetProperties({
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output [stream_target_properties](#stream_target_properties)

### createStreamTargetProperty
This operation creates a property for a stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).


```js
wowza.createStreamTargetProperty({
  "stream_target_id": "",
  "property": {
    "property": {
      "section": "",
      "key": "",
      "value": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * property **required** [stream_target_property_create_input](#stream_target_property_create_input)

#### Output
* output `object`
  * property **required** [stream_target_property](#stream_target_property)

### deleteStreamTargetProperty
This operation removes a property from a stream target.


```js
wowza.deleteStreamTargetProperty({
  "stream_target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * id **required** `string`: The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

#### Output
*Output schema unknown*

### showStreamTargetProperty
This operation shows the details of a specific property assigned to a specific stream target. Properties can be applied to a <strong>CustomStreamTarget</strong> or <strong>WowzaStreamTarget</strong> whose <em>provider</em> is <strong>akamai_cupertino</strong>.


```js
wowza.showStreamTargetProperty({
  "stream_target_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * id **required** `string`: The unique string that identifies the stream target property. The string contains the <em>section</em> and the <em>key</em>, connected by a dash. For example, <strong>hls-chunkSize</strong>.

#### Output
* output `object`
  * property **required** [stream_target_property](#stream_target_property)

### showStreamTargetTokenAuth
This operation shows the details of the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.


```js
wowza.showStreamTargetTokenAuth({
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * token_auth **required** [token_auth](#token_auth)

### updateStreamTargetTokenAuth
This operation updates the token authorization applied to a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization.


```js
wowza.updateStreamTargetTokenAuth({
  "stream_target_id": "",
  "token_auth": {
    "token_auth": {}
  }
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * token_auth **required** [token_auth_update_input](#token_auth_update_input)

#### Output
* output `object`
  * token_auth **required** [token_auth](#token_auth)

### createStreamTargetTokenAuth
This operation creates token authorization for a stream target. Only stream targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> can use token authorization. For more information see the technical article [How to protect stream targets with token authorization by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-protect-streams-with-token-authorization-by-using-the-wowza-streaming-cloud-rest-api).


```js
wowza.createStreamTargetTokenAuth({
  "stream_target_id": "",
  "token_auth": {
    "token_auth": {
      "enabled": true,
      "trusted_shared_secret": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * token_auth **required** [token_auth_create_input](#token_auth_create_input)

#### Output
* output `object`
  * token_auth **required** [token_auth](#token_auth)

### listTranscoders
This operation shows the details of all of your transcoders.


```js
wowza.listTranscoders({}, context)
```

#### Input
* input `object`
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [transcoders](#transcoders)

### createTranscoder
This operation creates a transcoder.


```js
wowza.createTranscoder({
  "transcoder": {
    "transcoder": {
      "name": "",
      "transcoder_type": "",
      "billing_mode": "",
      "broadcast_location": "",
      "protocol": "",
      "delivery_method": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * transcoder **required** [transcoder_create_input](#transcoder_create_input)

#### Output
* output `object`
  * transcoder **required** [transcoder](#transcoder)

### deleteTranscoder
This operation deletes a transcoder, including all of its assigned output renditions and stream targets.


```js
wowza.deleteTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
*Output schema unknown*

### showTranscoder
This operation shows the details of a specific transcoder.


```js
wowza.showTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** [transcoder](#transcoder)

### updateTranscoder
This operation updates a transcoder.


```js
wowza.updateTranscoder({
  "id": "",
  "transcoder": {
    "transcoder": {
      "name": "",
      "protocol": "",
      "delivery_method": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * transcoder **required** [transcoder_update_input](#transcoder_update_input)

#### Output
* output `object`
  * transcoder **required** [transcoder](#transcoder)

### disableAllStreamTargetsTranscoder
This operation disables all of the stream targets assigned to a specific transcoder.


```js
wowza.disableAllStreamTargetsTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * stream_targets **required** `object`
      * state `string` (values: enabled, disabled): The state of the transcoder's stream targets.

### enableAllStreamTargetsTranscoder
This operation enables all of the stream targets assigned to a specific transcoder.


```js
wowza.enableAllStreamTargetsTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * stream_targets **required** `object`
      * state `string` (values: enabled, disabled): The state of the transcoder's stream targets.

### listTranscoderRecordings
This operation shows the details of all of the recordings for a specific transcoder.


```js
wowza.listTranscoderRecordings({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * recordings `array`: Array of recordings of this transcoder. See /recordings for more details.
      * items [recording](#recording)

### resetTranscoder
This operation resets a transcoder.


```js
wowza.resetTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * state `string` (values: starting, stopping, started, stopped, resetting): The state of the transcoder.

### listTranscoderSchedules
This operation shows the details of all of the schedules for a specific transcoder.


```js
wowza.listTranscoderSchedules({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * schedules `array`: Array of schedules of this transcoder. See /schedules for more details.
      * items [schedule](#schedule)

### startTranscoder
This operation starts a transcoder.


```js
wowza.startTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * state `string` (values: starting, stopping, started, stopped, resetting): The state of the transcoder.
    * transcoding_uptime_id `string`: <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder.

### showTranscoderState
This operation shows the current state and uptime ID of a transcoder.


```js
wowza.showTranscoderState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * state `string` (values: starting, stopping, started, stopped, resetting): The state of the transcoder.
    * transcoding_uptime_id `string`: <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder.
    * uptime_id `string`: The unique identifier associated with a specific uptime period of a transcoder.

### showTranscoderStats
This operation responds with a hash of metrics (keys) for a currently running transcoder. Each key has a <strong>status</strong>, <strong>text</strong> (description), <strong>units</strong>, and <strong>value</strong>.


```js
wowza.showTranscoderStats({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** [shm_metrics](#shm_metrics)

### stopTranscoder
This operation stops a transcoder.


```js
wowza.stopTranscoder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * state `string` (values: starting, stopping, started, stopped, resetting): The state of the transcoder.
    * transcoding_uptime_id `string`: <strong>The <em>transcoding_uptime_id</em> parameter is deprecated and is replaced by <em>uptime_id</em>.</strong> The unique identifier associated with a specific uptime period of a transcoder.

### showTranscoderThumbnailUrl
This operation shows the thumbnail URL of a started transcoder.


```js
wowza.showTranscoderThumbnailUrl({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output `object`
  * transcoder **required** `object`
    * thumbnail_url `string`: The URL to receive the preview thumbnail.

### listTranscoderOutputs
This operation shows the details of all of the output renditions of a specific transcoder.


```js
wowza.listTranscoderOutputs({
  "transcoder_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output [outputs](#outputs)

### createTranscoderOutput
This operation creates an output rendition for a specific transcoder.


```js
wowza.createTranscoderOutput({
  "transcoder_id": "",
  "output": null
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output **required** [output_create_input](#output_create_input)

#### Output
* output `object`
  * output **required** [output](#output)

### deleteTranscoderOutput
This operation deletes an output, including all of its assigned targets.


```js
wowza.deleteTranscoderOutput({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the output rendition.

#### Output
*Output schema unknown*

### showTranscoderOutput
This operation shows the details of a specific output rendition for a specific transcoder.


```js
wowza.showTranscoderOutput({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the output rendition.

#### Output
* output `object`
  * output **required** [output](#output)

### updateTranscoderOutput
This operation updates an output rendition.


```js
wowza.updateTranscoderOutput({
  "transcoder_id": "",
  "id": "",
  "output": null
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * output **required** [output_update_input](#output_update_input)

#### Output
* output `object`
  * output **required** [output](#output)

### addStreamTargetToTranscoderOutput
The operation POST /transcoders/{transcoder_id}/outputs/{id}/add_stream_target is deprecated. Use POST /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets to add an existing stream target to an output.


```js
wowza.addStreamTargetToTranscoderOutput({
  "transcoder_id": "",
  "id": "",
  "output_stream_target": {
    "output_stream_target": {
      "stream_target_id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * output_stream_target **required** [output_add_stream_target_input](#output_add_stream_target_input)

#### Output
* output `object`
  * output_stream_target **required** [output_stream_target](#output_stream_target)

### removeStreamTargetToTranscoderOutput
The operation DELETE /transcoders/{transcoder_id}/outputs/{id}/remove_stream_target is deprecated. Use DELETE /transcoders/{transcoder_id}/outputs/{output_id}/output_stream_targets/{id} to remove a stream target from an output.


```js
wowza.removeStreamTargetToTranscoderOutput({
  "transcoder_id": "",
  "id": "",
  "output_stream_target": {
    "output_stream_target": {
      "stream_target_id": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * output_stream_target **required** [output_remove_stream_target_input](#output_remove_stream_target_input)

#### Output
*Output schema unknown*

### listTranscoderOutputOutputStreamTargets
This operation shows the details of all of the output stream targets of an output of a transcoder.


```js
wowza.listTranscoderOutputOutputStreamTargets({
  "transcoder_id": "",
  "output_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.

#### Output
* output [output_stream_target](#output_stream_target)

### createTranscoderOutputOutputStreamTarget
This operation creates an output stream target. Targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> can't be added to output renditions.


```js
wowza.createTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "output_stream_target": null
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * output_stream_target **required** [output_stream_target_create_input](#output_stream_target_create_input)

#### Output
* output `object`
  * output_stream_target **required** [output_stream_target](#output_stream_target)

### deleteTranscoderOutputOutputStreamTarget
This operation deletes an output stream target, including all of its assigned targets.


```js
wowza.deleteTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
*Output schema unknown*

### showTranscoderOutputOutputStreamTarget
This operation shows the details of an output stream target.


```js
wowza.showTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * output_stream_target **required** [output_stream_target](#output_stream_target)

### updateTranscoderOutputOutputStreamTarget
This operation updates an output stream target.


```js
wowza.updateTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": "",
  "output_stream_target": null
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * output_stream_target **required** [output_stream_target_update_input](#output_stream_target_update_input)

#### Output
* output `object`
  * output_stream_target **required** [output_stream_target](#output_stream_target)

### disableTranscoderOutputOutputStreamTarget
This operation disables an output stream target.


```js
wowza.disableTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * stream_target **required** `object`
    * state `string` (values: enabled, disabled, restarted): The state of the output stream target.

### enableTranscoderOutputOutputStreamTarget
This operation enables an output stream target.


```js
wowza.enableTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * stream_target **required** `object`
    * state `string` (values: enabled, disabled, restarted): The state of the output stream target.

### restartTranscoderOutputOutputStreamTarget
This operation restarts an output stream target.


```js
wowza.restartTranscoderOutputOutputStreamTarget({
  "transcoder_id": "",
  "output_id": "",
  "stream_target_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * output_id **required** `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

#### Output
* output `object`
  * stream_target **required** `object`
    * state `string` (values: enabled, disabled, restarted): The state of the output stream target.

### listTranscoderProperties
This operation shows all of the properties of a specific transcoder.


```js
wowza.listTranscoderProperties({
  "transcoder_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.

#### Output
* output [transcoder_properties](#transcoder_properties)

### createTranscoderProperty
This operation creates a property for a transcoder. For more information see the technical article [How to set advanced properties by using the Wowza Streaming Cloud REST API](https://www.wowza.com/docs/how-to-set-advanced-properties-by-using-the-wowza-streaming-cloud-rest-api).


```js
wowza.createTranscoderProperty({
  "transcoder_id": "",
  "property": {
    "property": {
      "section": "",
      "key": "",
      "value": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * property **required** [transcoder_property_create_input](#transcoder_property_create_input)

#### Output
* output `object`
  * property **required** [transcoder_property](#transcoder_property)

### deleteTranscoderProperty
This operation deletes a specific property from a specific transcoder.


```js
wowza.deleteTranscoderProperty({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

#### Output
*Output schema unknown*

### showTranscoderProperty
This operation shows the details of a specific property for a specific transcoder.


```js
wowza.showTranscoderProperty({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique string that identifies the transcoder property. The string contains the section and the key, connected by a dash. For example, cupertino-cupertinoProgramDateTimeOffset.

#### Output
* output `object`
  * property **required** [transcoder_property](#transcoder_property)

### indexUptimes
This operation shows all of the uptime records for a specific transcoder. An <em>uptime record</em> identifies a specific transcoding session.


```js
wowza.indexUptimes({
  "transcoder_id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * page `integer`: Returns a paginated view of results from the HTTP request. Specify a positive integer to indicate which page of the results should be displayed first. <strong>Next</strong> and <strong>Previous</strong> links allow you to navigate multiple pages of results. Omit the <em>page</em> parameter or specify an integer that's less than or equal to <strong>0</strong> to view all (unpaginated) results.
  * per_page `integer`: For use with the <em>page</em> parameter. Indicates how many records should be included on each page of results. A valid value is any positive integer. The default is <strong>10</strong>.

#### Output
* output [uptimes](#uptimes)

### showUptime
This operation shows the details of a specific uptime record for a specific transcoder. An <em>uptime record</em> identifies a transcoding session.


```js
wowza.showUptime({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the uptime record.

#### Output
* output [uptime](#uptime)

### showUptimeMetricsCurrent
This operation returns a snapshot of the current source connection and processing details of an active (running) transcoder.


```js
wowza.showUptimeMetricsCurrent({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the uptime record.
  * fields `string`: A comma-separated list of fields to return.

#### Output
* output `object`
  * current **required** [shm_metrics](#shm_metrics)
  * limits **required** `object`
    * fields **required** `string`: A comma-separated list of fields that were returned in the request.

### showUptimeMetricsHistoric
This operation shows the historic source connection and processing details for a transcoding session (uptime record). The transcoder can be running or stopped. Metrics are recorded every 20 seconds.


```js
wowza.showUptimeMetricsHistoric({
  "transcoder_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder.
  * id **required** `string`: The unique alphanumeric string that identifies the uptime record.
  * fields `string`: A comma-separated list of fields to return.
  * from `string`: The start of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * to `string`: The end of the range of time used to aggregate the metrics. Express the value by using the ISO 8601 standard of <strong>YYYY-MM-DDTHH:MM:SSZ</strong> where <strong>HH</strong> is a 24-hour clock in UTC.

#### Output
* output `object`
  * historic **required** `array`
    * items [shm_historic_metrics](#shm_historic_metrics)
  * limits **required** `object`
    * fields **required** `string`: A comma-separated list of fields that were returned in the request.
    * from **required** `string`: The start of range of time when the metrics were aggregated for the query.
    * to **required** `string`: The end of the range of time when the metrics were aggregated for the query.

### usageNetworkStreamSourcesIndex
This operation shows the amount of network usage for all stream sources in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.usageNetworkStreamSourcesIndex({}, context)
```

#### Input
* input `object`
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

#### Output
* output [usage_network_stream_sources](#usage_network_stream_sources)

### usageNetworkStreamTargetsIndex
This operation shows the amount of network usage for all stream targets in the account cumulatively and individually. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.usageNetworkStreamTargetsIndex({}, context)
```

#### Input
* input `object`
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

#### Output
* output [usage_network_stream_targets](#usage_network_stream_targets)

### usageNetworkTranscodersIndex
This operation shows the amount of network usage (egress) for all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.usageNetworkTranscodersIndex({}, context)
```

#### Input
* input `object`
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
  * transcoder_type `string` (values: transcoded, passthrough): The type of transcoder. The default is <strong>transcoded</strong>.
  * billing_mode `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.

#### Output
* output [usage_network_transcoders](#usage_network_transcoders)

### usageStoragePeakRecordingIndex
This operation shows the amount of peak recording storage used for the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.usageStoragePeakRecordingIndex({}, context)
```

#### Input
* input `object`
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

#### Output
* output [usage_storage_peak_recording](#usage_storage_peak_recording)

### usageTimeTranscodersIndex
This operation shows the amount of stream processing time used by all transcoders in the account. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.usageTimeTranscodersIndex({}, context)
```

#### Input
* input `object`
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.
  * transcoder_type `string` (values: transcoded, passthrough): The type of transcoder. The default is <strong>transcoded</strong>.
  * billing_mode `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.

#### Output
* output [usage_time_transcoders](#usage_time_transcoders)

### showViewerDataStreamTarget
This operation shows viewer data for a specific stream target. The default time frame is <em>from</em> the last billing date <em>to</em> the end of the current day.


```js
wowza.showViewerDataStreamTarget({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique alphanumeric string that identifies the stream target.
  * from `string`: The start of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>from</em> default is the last billing date.
  * to `string`: The end of the range of time you want to view. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC. The <em>to</em> default is the end of the current day.

#### Output
* output [usage_viewer_data_stream_target](#usage_viewer_data_stream_target)



## Definitions

### Error401
* Error401 `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Error403
* Error403 `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Error404
* Error404 `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Error410
* Error410 `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Error422
* Error422 `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Error422InvalidTimeFormat
* Error422InvalidTimeFormat `object`
  * meta **required** `object`
    * code `string`
    * description `string`
    * links `array`
      * items `string`
    * message `string`
    * status `integer`
    * title `string`

### Spec
* Spec `object`
  * basePath `string`: The base path on which the API is served, relative to the **host**.
  * consumes `array`: A list of MIME types that the API can consume.
    * items `string`
  * definitions `object`: The data types produced and consumed by operations.
  * externalDocs `object`: Links to and descriptions of related external documentation.
  * host `string`: The host (domain name or IP address) serving the API.
  * info `object`: Metadata about the API.
  * paths `object`: The paths and operations available to the API.
  * produces `array`: A list of MIME types that the API can produce.
    * items `string`
  * schemes `array`: The transfer protocol being used by the API.
    * items `string`
  * security `array`: A list of the security schemes being used by the API.
    * items `object`
  * securityDefinitions `object`: The security scheme definitions being used by the API.
    * items `object`
  * swagger `string`: The version of the Swagger specification that's being used.
  * tags `array`: A list of tags used by the specification, with metadata.
    * items `object`
  * x-tagGroups `array`: A list of the groups and tags used in the left column of the Swagger page.
    * items `object`

### audio_codec_metric
* audio_codec_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### bits_in_rate_metric
* bits_in_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `number`: The value of the associated key.

### bits_out_rate_metric
* bits_out_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `number`: The value of the associated key.

### bytes_in_rate_metric
* bytes_in_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `number`: The value of the associated key.

### bytes_out_rate_metric
* bytes_out_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `number`: The value of the associated key.

### configured_bytes_out_rate_metric
* configured_bytes_out_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### connected_metric
* connected_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### cpu_idle_metric
* cpu_idle_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### cpu_metric
* cpu_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### custom_stream_target_input
* custom_stream_target_input `object`
  * stream_target **required** `object`
    * backup_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/).
    * hds_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams.
    * hls_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams.
    * name **required** `string`: A descriptive name for the stream target. Maximum 255 characters.
    * password `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication.
    * primary_url **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
    * provider **required** `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
    * stream_name **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
    * type `string`: <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
    * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### frame_rate_metric
* frame_rate_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### frame_size_metric
* frame_size_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### geoblock
* geoblock `object`
  * countries `array`: Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia.
    * items `string`
  * created_at `string`: The date and time that the geo-blocking rendition was created.
  * state `string` (values: requested, activated, update_requested, delete_requested, failed): The state of the geo-blocking.
  * stream_target_id `string`: The unique alphanumeric string that identifies the stream target.
  * type `string` (values: disabled, allow, deny): The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
  * updated_at `string`: The date and time that the geo-blocking rendition was updated.
  * whitelist `array`: Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming.
    * items `string`

### geoblock_create_input
* geoblock_create_input
  * geoblock **required** `object`
    * countries `array`: Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia.
      * items `string`
    * type **required** `string` (values: disabled, allow, deny): The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
    * whitelist `array`: Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming.
      * items `string`

### geoblock_input
* geoblock_input `object`
  * geoblock **required** `object`
    * countries `array`: Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia.
      * items `string`
    * type **required** `string` (values: disabled, allow, deny): The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
    * whitelist `array`: Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming.
      * items `string`

### geoblock_update_input
* geoblock_update_input
  * geoblock **required** `object`
    * countries `array`: Required when <em>type</em> is <strong>allow</strong> or <strong>deny</strong>. The locations affected by the geo-blocking. Enter a comma-separated list (an array) of two-letter ISO 3166-1 country codes. For a list, see <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1</a> on wikipedia.
      * items `string`
    * type **required** `string` (values: disabled, allow, deny): The type of geo-blocking to apply. The value <strong>allow</strong> permits viewing only in the locations specified by the <em>countries</em> parameter. The value <strong>deny</strong> prohibits viewing in the locations specified by the <em>countries</em> parameter. The value <strong>disabled</strong> (the default) permits viewing everywhere.
    * whitelist `array`: Whitelisted addresses can be viewed even if they're within a geo-blocked location. Enter a comma-separated list (an array) of IP addresses that always allow streaming.
      * items `string`

### gpu_decoder_usage_metric
* gpu_decoder_usage_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### gpu_driver_version_metric
* gpu_driver_version_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### gpu_encoder_usage_metric
* gpu_encoder_usage_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### gpu_memory_usage_metric
* gpu_memory_usage_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### gpu_usage_metric
* gpu_usage_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### height_metric
* height_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### index_stream_target
* index_stream_target `object`
  * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
  * connection_code `string`: A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created.
  * connection_code_expires_at `string`: The date and time that the <em>connection_code</em> expires.
  * created_at `string`: The date and time that the stream target was created.
  * hds_playback_url `string`: The web address that the target uses to play Adobe HDS streams.
  * hls_playback_url `string`: Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams.
  * id `string`: The unique alphanumeric string that identifies the stream target.
  * location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
  * name `string`: A descriptive name for the stream target. Maximum 255 characters.
  * primary_url `string`: The primary ingest URL of the target.
  * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
  * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
  * stream_name `string`: The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**.
  * type `string` (values: WowzaStreamTarget, UltraLowLatencyStreamTarget, CustomStreamTarget): <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
  * updated_at `string`: The date and time that the stream target was updated.
  * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### keyframe_interval_metric
* keyframe_interval_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### live_stream
* live_stream `object`
  * aspect_ratio_height `integer`: The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
  * aspect_ratio_width `integer`: The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
  * billing_mode `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the stream. The default is <strong>pay_as_you_go</strong>.
  * broadcast_location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): The location of your stream. Choose a location as close as possible to your video source.
  * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
  * connection_code `string`: A six-character, alphanumeric string that allows certain encoders, including Wowza Streaming Engine and the Wowza GoCoder app, to connect with Wowza Streaming Cloud. The code can be used once and expires 24 hours after it's created.
  * connection_code_expires_at `string`: The date and time that the <em>connection_code</em> expires.
  * created_at `string`: The date and time that the live stream was created.
  * delivery_method `string` (values: pull, cdn, push): The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
  * delivery_protocol `string` (values: hls-https, hls-hds): <strong>The <em>delivery_protocol</em> parameter is deprecated. To set the delivery protocol of a transcoder's target, use <em>target_delivery_protocol</em>.</strong>
  * delivery_protocols `array`: An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled.
    * items `string`
  * delivery_type `string` (values: single-bitrate, multi-bitrate): For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud.
  * direct_playback_urls `array`: An array of direct playback URLs for the live stream's delivery protocols. Each protocol has a URL for the source and a URL for each output rendition.
    * items `object`
      * name `string`: The name of the playback URL: <strong>source</strong>, <strong>default</strong>, <strong>passthrough</strong>, or the output rendition's resolution.
      * output_id `string`: Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition.
      * url `string`: The playback URL for the source or output rendition.
  * encoder `string` (values: wowza_streaming_engine, wowza_gocoder, media_ds, axis, epiphan, hauppauge, jvc, live_u, matrox, newtek_tricaster, osprey, sony, telestream_wirecast, teradek_cube, vmix, x_split, ipcamera, other_rtmp, other_rtsp): The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
  * hosted_page `boolean`: A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page.
  * hosted_page_description `string`: A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags.
  * hosted_page_logo_image_url `string`: The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller.
  * hosted_page_sharing_icons `boolean`: Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons.
  * hosted_page_title `string`: A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags.
  * hosted_page_url `string`: The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream.
  * id `string`: The unique alphanumeric string that identifies the live stream.
  * low_latency `boolean`: For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets.
  * name `string`: A descriptive name for the live stream. Maximum 200 characters.
  * player_countdown `boolean`: A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>.
  * player_countdown_at `string`: The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC.
  * player_embed_code `string`: The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player.
  * player_hds_playback_url `string`: The address that can be used to configure playback of the stream using the Adobe HDS protocol.
  * player_hls_playback_url `string`: The address that can be used to configure playback of the stream using the Apple HLS protocol.
  * player_id `string`: The unique alphanumeric string that identifies the player.
  * player_logo_image_url `string`: The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller.
  * player_logo_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>.
  * player_responsive `boolean`: A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>.
  * player_type `string`: The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>.
  * player_video_poster_image_url `string`: The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller.
  * player_width `integer`: The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
  * recording `boolean`: If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>.
  * source_connection_information `object`: Details that you can use to manually configure and connect a video source to the live stream.
  * stream_source_id `string`: The unique alphanumeric string that identifies the stream source, if a stream source is used.
  * stream_targets `array`: An array of unique alphanumeric strings that identify the stream targets used by the live stream.
    * items `object`
      * id `string`: The unique alphanumeric string that identifies the stream target.
  * target_delivery_protocol `string` (values: hls-https, hls-hds): The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>.
  * transcoder_type `string` (values: transcoded, passthrough): The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
  * updated_at `string`: The date and time that the live stream was updated.
  * use_stream_source `boolean`: If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud.
  * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets.

### live_stream_create_input
* live_stream_create_input `object`
  * live_stream **required** `object`
    * aspect_ratio_height **required** `integer`: The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
    * aspect_ratio_width **required** `integer`: The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
    * billing_mode **required** `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the stream. The default is <strong>pay_as_you_go</strong>.
    * broadcast_location **required** `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): The location of your stream. Choose a location as close as possible to your video source.
    * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
    * delivery_method `string` (values: pull, cdn, push): The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
    * delivery_protocols `array`: An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled.
      * items `string`
    * delivery_type `string` (values: single-bitrate, multi-bitrate): For streams whose <em>encoder</em> is <strong>wowza_streaming_engine</strong>. The default is <strong>multi-bitrate</strong>, which means you're sending one or more bitrate renditions from Wowza Streaming Engine directly to a Wowza CDN target without transcoding in Wowza Streaming Cloud. The value <strong>single-bitrate</strong> means you're sending a single source stream to Wowza Streaming Cloud for transcoding and/or to deliver the source stream to multiple stream targets in Wowza Streaming Cloud.
    * disable_authentication `boolean`: Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source.
    * encoder **required** `string` (values: wowza_streaming_engine, wowza_gocoder, media_ds, axis, epiphan, hauppauge, jvc, live_u, matrox, newtek_tricaster, osprey, sony, telestream_wirecast, teradek_cube, vmix, x_split, ipcamera, other_rtmp, other_rtsp): The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
    * hosted_page `boolean`: A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page.
    * hosted_page_description `string`: A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags.
    * hosted_page_logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller.
    * hosted_page_sharing_icons `boolean`: Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons.
    * hosted_page_title `string`: A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags.
    * low_latency `boolean`: For streams whose <em>target_delivery_protocol</em> is <strong>hls-https</strong>. If <strong>true</strong>, turns off incoming and sort packet buffers and delivers smaller video packets to the player, which can reduce latency as long as networks can handle the increased overhead. The default is <strong>false</strong>. <br /><br />This parameter only affects streams played over a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> and whose <em>provider</em> is <strong>akamai_cupertino</strong>. It does <em>not</em> reduce latency in streams played over a hosted page and is unrelated to Wowza ultra low latency stream targets.
    * name **required** `string`: A descriptive name for the live stream. Maximum 200 characters.
    * password `string`: A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * player_countdown `boolean`: A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>.
    * player_countdown_at `string`: The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC.
    * player_logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller.
    * player_logo_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>.
    * player_responsive `boolean`: A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>.
    * player_type `string`: The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>.
    * player_video_poster_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller.
    * player_width `integer`: The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
    * recording `boolean`: If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>.
    * remove_hosted_page_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>.
    * remove_player_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>.
    * remove_player_video_poster_image `boolean`: If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>.
    * source_url `string`: The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax.
    * target_delivery_protocol `string` (values: hls-https, hls-hds): The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>.
    * transcoder_type **required** `string` (values: transcoded, passthrough): The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
    * use_stream_source `boolean`: If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud.
    * username `string`: A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets.

### live_stream_update_input
* live_stream_update_input `object`
  * live_stream **required** `object`
    * aspect_ratio_height **required** `integer`: The height, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
    * aspect_ratio_width **required** `integer`: The width, in pixels, of the video source. Should correspond to a widescreen (16:9) or standard (4:3) aspect ratio and be divisible by 8.
    * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
    * delivery_method `string` (values: pull, cdn, push): The type of connection between the video source and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
    * delivery_protocols `array`: An array of direct delivery protocols enabled for this live stream. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are enabled.
      * items `string`
    * disable_authentication `boolean`: Authentication is required by default for RTMP and RTSP push connections from a video source to Wowza Streaming Cloud. Specify <strong>true</strong> to disable authentication with the video source.
    * encoder **required** `string` (values: wowza_streaming_engine, wowza_gocoder, media_ds, axis, epiphan, hauppauge, jvc, live_u, matrox, newtek_tricaster, osprey, sony, telestream_wirecast, teradek_cube, vmix, x_split, ipcamera, other_rtmp, other_rtsp): The video source for the live stream. Choose the type of camera or encoder you're using to connect to the Wowza Streaming Cloud transcoder. If your specific device isn't listed, choose <strong>ipcamera</strong>, <strong>other_rtmp</strong>, or <strong>other_rtsp</strong>.
    * hosted_page_description `string`: A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags.
    * hosted_page_logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller.
    * hosted_page_sharing_icons `boolean`: Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons.
    * hosted_page_title `string`: A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags.
    * name **required** `string`: A descriptive name for the live stream. Maximum 200 characters.
    * password `string`: A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * player_countdown `boolean`: A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>.
    * player_countdown_at `string`: The date and time that the event starts, used by the countdown clock. Specify <strong>YYYY-MM-DD HH:MM:SS</strong>, where <strong>HH</strong> is a 24-hour clock in UTC.
    * player_logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller.
    * player_logo_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>.
    * player_responsive `boolean`: A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <em>player_width</em>.
    * player_type `string`: The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <strong>target_delivery_protocol</strong> be <strong>hls-https</strong> and <strong>closed_caption_type</strong> be <strong>none</strong>. The default is <strong>original_html5</strong>.
    * player_video_poster_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller.
    * player_width `integer`: The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.
    * recording `boolean`: If <strong>true</strong>, creates a recording of the live stream. The default is <strong>false</strong>.
    * remove_hosted_page_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the hosted page. The default is <strong>false</strong>.
    * remove_player_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the player. The default is <strong>false</strong>.
    * remove_player_video_poster_image `boolean`: If <strong>true</strong>, removes the poster image. The default is <strong>false</strong>.
    * source_url `string`: The URL of an IP camera or video encoder using an RTMP and RTSP pull connection to Wowza Streaming Cloud. Consult the camera or encoder documentation for the URL syntax.
    * target_delivery_protocol `string` (values: hls-https, hls-hds): The type of stream being delivered from Wowza Streaming Cloud. The default is <strong>hls-https</strong>.
    * use_stream_source `boolean`: If <strong>true</strong>, uses a stream source to deliver the stream to Wowza Streaming Cloud. The default, <strong>false</strong>, pushes directly to Wowza Streaming Cloud.
    * username `string`: A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with HLS stream targets.

### live_streams
* live_streams `object`
  * live_streams **required** `array`
    * items [live_stream](#live_stream)

### output
* output `object`
  * aspect_ratio_height `integer`: The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
  * aspect_ratio_width `integer`: The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
  * bitrate_audio `integer`: The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
  * bitrate_video `integer`: The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
  * created_at `string`: The date and time that the output rendition was created.
  * framerate_reduction `string` (values: 0, 1/2, 1/4, 1/25, 1/30, 1/50, 1/60): Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction.
  * h264_profile `string` (values: main, baseline, high): The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>.
  * id `string`: The unique alphanumeric string that identifies the output rendition.
  * keyframes `string` (values: follow_source, 25, 30, 50, 60, 100, 120): The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video.
  * name `string`: A descriptive name for the output (generated, not writable).
  * output_stream_targets `array`
    * items [output_stream_target](#output_stream_target)
  * passthrough_audio `boolean`: If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>.
  * passthrough_video `boolean`: If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>.
  * stream_format `string` (values: audiovideo, videoonly, audioonly): The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder.
  * updated_at `string`: The date and time that the output rendition was updated.

### output_add_stream_target_input
* output_add_stream_target_input `object`
  * output_stream_target **required** `object`
    * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
    * use_stream_target_backup_url `boolean`: Use the target's backup URL. Not available for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The default is <strong>false</strong>.

### output_create_input
* output_create_input
  * output **required** `object`
    * aspect_ratio_height `integer`: The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
    * aspect_ratio_width `integer`: The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
    * bitrate_audio `integer`: The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
    * bitrate_video `integer`: The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
    * framerate_reduction `string` (values: 0, 1/2, 1/4, 1/25, 1/30, 1/50, 1/60): Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction.
    * h264_profile `string` (values: main, baseline, high): The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>.
    * keyframes `string` (values: follow_source, 25, 30, 50, 60, 100, 120): The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video.
    * passthrough_audio `boolean`: If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>.
    * passthrough_video `boolean`: If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>.
    * stream_format **required** `string` (values: audiovideo, videoonly, audioonly): The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).

### output_input
* output_input `object`
  * output **required** `object`
    * aspect_ratio_height `integer`: The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
    * aspect_ratio_width `integer`: The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
    * bitrate_audio `integer`: The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
    * bitrate_video `integer`: The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
    * framerate_reduction `string` (values: 0, 1/2, 1/4, 1/25, 1/30, 1/50, 1/60): Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction.
    * h264_profile `string` (values: main, baseline, high): The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>.
    * keyframes `string` (values: follow_source, 25, 30, 50, 60, 100, 120): The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video.
    * passthrough_audio `boolean`: If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>.
    * passthrough_video `boolean`: If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>.
    * stream_format **required** `string` (values: audiovideo, videoonly, audioonly): The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).

### output_remove_stream_target_input
* output_remove_stream_target_input `object`
  * output_stream_target **required** `object`
    * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.

### output_stream_target
* output_stream_target `object`
  * created_at `string`: The date and time that the output stream target was created.
  * id `string`: The unique alphanumeric string that identifies the output stream target.
  * output_id `string`: The unique alphanumeric string that identifies the output rendition.
  * stream_target [stream_target](#stream_target)
  * stream_target_id `string`: The unique alphanumeric string that identifies the stream target.
  * updated_at `string`: The date and time that the output stream target was updated.
  * use_stream_target_backup_url `boolean`: Specifies whether to use the stream target's primary or backup URL.

### output_stream_target_create_input
* output_stream_target_create_input
  * output_stream_target **required** `object`
    * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
    * use_stream_target_backup_url `boolean`: Specifies whether to use the stream target's primary or backup URL.

### output_stream_target_input
* output_stream_target_input `object`
  * output_stream_target **required** `object`
    * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
    * use_stream_target_backup_url `boolean`: Specifies whether to use the stream target's primary or backup URL.

### output_stream_target_update_input
* output_stream_target_update_input
  * output_stream_target **required** `object`
    * stream_target_id **required** `string`: The unique alphanumeric string that identifies the stream target.
    * use_stream_target_backup_url `boolean`: Specifies whether to use the stream target's primary or backup URL.

### output_stream_targets
* output_stream_targets `object`
  * output_stream_targets **required** `array`
    * items [output_stream_target](#output_stream_target)

### output_update_input
* output_update_input
  * output **required** `object`
    * aspect_ratio_height `integer`: The height, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1080</strong>.
    * aspect_ratio_width `integer`: The width, in pixels, of the output rendition. Should correspond to a widescreen or standard aspect ratio and be divisible by 8. The default is <strong>1980</strong>.
    * bitrate_audio `integer`: The audio bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough audio) and <strong>1000</strong>. The default is <strong>128</strong>.
    * bitrate_video `integer`: The video bitrate, in kilobits per second (Kbps). Must be between <strong>0</strong> (for passthrough video) and <strong>10240</strong>. The default is <strong>4000</strong>.
    * framerate_reduction `string` (values: 0, 1/2, 1/4, 1/25, 1/30, 1/50, 1/60): Reduce the frame rate of the transcoded output rendition. The default, <strong>0</strong>, uses the encoded stream's frame rate without reduction.
    * h264_profile `string` (values: main, baseline, high): The encoding method. Specify <strong>main</strong> for desktop streaming, <strong>baseline</strong> for playback on mobile devices, or <strong>high</strong> for HD playback. The default is <strong>high</strong>.
    * keyframes `string` (values: follow_source, 25, 30, 50, 60, 100, 120): The interval used to define the compression applied to a group of frames. The default, <strong>follow_source</strong>, uses the keyframe interval of the source video.
    * passthrough_audio `boolean`: If <strong>true</strong>, sends the audio track to the target without transcoding. The default is <strong>false</strong>.
    * passthrough_video `boolean`: If <strong>true</strong>, sends the video track to the target without transcoding. The default is <strong>false</strong>.
    * stream_format **required** `string` (values: audiovideo, videoonly, audioonly): The contents of the stream. The default is both audio and video (<strong>audiovideo</strong>).

### outputs
* outputs `object`
  * outputs **required** `array`
    * items [output](#output)

### player
* player `object`
  * countdown `boolean`: A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>.
  * countdown_at `string`: The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * created_at `string`: The date and time that the player was created.
  * embed_code `string`: The HTML code that can be used in an external webpage to host the Wowza Streaming Cloud player.
  * hds_playback_url `string`: The address that can be used to configure playback of the stream using the Adobe HDS protocol.
  * hls_playback_url `string`: The address that can be used to configure playback of the stream using the Apple HLS protocol.
  * hosted_page `boolean`: A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page.
  * hosted_page_description `string`: A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags.
  * hosted_page_logo_image_url `string`: The path to a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller.
  * hosted_page_sharing_icons `string`: Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons.
  * hosted_page_title `string`: A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags.
  * hosted_page_url `string`: The URL of the Wowza Streaming Cloud-hosted webpage that viewers can visit to watch the stream.
  * id `string`: The unique alphanumeric string that identifies the player.
  * logo_image_url `string`: The path to a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller.
  * logo_position `string`: The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>.
  * responsive `boolean`: A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>.
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder.
  * type `string`: The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>.
  * updated_at `string`: The date and time that the player was updated.
  * video_poster_image_url `string`: The path to a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller.
  * width `integer`: The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.

### player_update_input
* player_update_input `object`
  * player **required** `object`
    * countdown `boolean`: A clock that appears in the player before the event and counts down to the start of the stream. Specify <strong>true</strong> to display the countdown clock. The default is <strong>false</strong>.
    * countdown_at `string`: The date and time that the event starts, used by the countdown clock. Enter <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
    * hosted_page `boolean`: A web page hosted by Wowza Streaming Cloud that includes a player for the live stream. The default, <strong>true</strong>, creates a hosted page. Specify <strong>false</strong> to not create a hosted web page.
    * hosted_page_description `string`: A description that appears on the hosted page below the player. Can't include custom HTML, JavaScript, or other tags.
    * hosted_page_logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears in the upper-left corner of the hosted page. Logo file must be 2.5 MB or smaller.
    * hosted_page_sharing_icons `boolean`: Icons that let viewers share the stream on Facebook, Google+, Twitter, and by email. The default, <strong>true</strong>, includes sharing icons on the hosted page. Specify <strong>false</strong> to omit sharing icons.
    * hosted_page_title `string`: A title for the page that appears above the player. Can't include custom HTML, JavaScript, or other tags.
    * logo_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG logo file that appears partially transparent in a corner of the player throughout playback. Logo file must be 2.5 MB or smaller.
    * logo_position `string`: The corner of the player in which you want the player logo to appear. The default is <strong>top-left</strong>.
    * remove_hosted_page_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>.
    * remove_logo_image `boolean`: If <strong>true</strong>, removes the logo file from the output. The default is <strong>false</strong>.
    * remove_video_poster_image `boolean`: If <strong>true</strong>, removes the poster image from the output. The default is <strong>false</strong>.
    * responsive `boolean`: A player whose size adjusts according to the device on which it's being viewed. If <strong>true</strong>, creates a responsive player. If <strong>false</strong>, specify a <strong>width</strong>.
    * type `string`: The player you want to use. Valid values are <strong>original_html5</strong>, which provides HTML5 playback and falls back to Flash on older browsers, and <strong>wowza_player</strong>, which provides HTML5 playback over Apple HLS. <strong>wowza_player</strong> requires that <em>target_delivery_protocol</em> be <strong>hls-https</strong> and <em>closed_caption_type</em> be <strong>none</strong>. The default is <strong>original_html5</strong>.
    * video_poster_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG poster image that appears in the player before the stream begins. Poster image files must be 2.5 MB or smaller.
    * width `integer`: The width, in pixels, of a fixed-size player. The default is <strong>640</strong>.

### players
* players `object`
  * players **required** `array`
    * items [player](#player)

### recording
* recording `object`
  * created_at `string`: The date and time that the recording was created.
  * download_url `string`: The URL that can be used to download the recording.
  * duration `integer`: The length of the recording, in hours, minutes, and seconds.
  * file_name `string`: The file name of the recording.
  * file_size `integer`: The file size of the recording.
  * id `string`: The unique alphanumeric string that identifies the recording.
  * reason `string`: The reason that a recording has the state <strong>failed</strong>.
  * starts_at `string`: The date and time that the recording started.
  * state `string` (values: uploading, converting, removing, completed, failed): The state of the recording.
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder that was recorded.
  * transcoder_name `string`: The descriptive name of the transcoder that was recorded.
  * transcoding_uptime_id `string`: The unique identifier associated with the transcoding uptime for this recording.
  * updated_at `string`: The date and time that the recording was updated.

### recordings
* recordings `object`
  * recordings **required** `array`
    * items [recording](#recording)

### schedule
* schedule `object`
  * action_type `string` (values: start, stop, start_stop): The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
  * created_at `string`: The date and time that the schedule was created.
  * end_repeat `string`: The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
  * id `string`: The unique alphanumeric string that identifies the schedule.
  * name `string`: A descriptive name for the schedule. Maximum 255 characters.
  * recurrence_data `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day or days of the week that a recurring schedule should run.
  * recurrence_type `string` (values: once, recur): A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>.
  * start_repeat `string`: The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
  * start_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * state `string` (values: enabled, disabled, expired): A schedule must be <strong>enabled</strong> to run. Specify <strong>enabled</strong> to run the schedule or <strong>disabled</strong> to turn off the schedule so that it doesn't run.
  * stop_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder being scheduled.
  * transcoder_name `string`: The name of the transcoder being scheduled.
  * updated_at `string`: The date and time that the schedule was updated.

### schedule_create_input
* schedule_create_input `object`
  * schedule **required** `object`
    * action_type **required** `string` (values: start, stop, start_stop): The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
    * end_repeat `string`: The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
    * name **required** `string`: A descriptive name for the schedule. Maximum 255 characters.
    * recurrence_data `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day or days of the week that a recurring schedule should run.
    * recurrence_type **required** `string` (values: once, recur): A schedule can run one time only (<strong>once</strong>) or repeat (<strong>recur</strong>) until a specified <em>end_repeat</em> date. The default is <strong>once</strong>.
    * start_repeat `string`: The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
    * start_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
    * stop_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
    * transcoder_id **required** `string`: The unique alphanumeric string that identifies the transcoder being scheduled.

### schedule_update_input
* schedule_update_input `object`
  * schedule **required** `object`
    * action_type **required** `string` (values: start, stop, start_stop): The type of action that the schedule should trigger on the transcoder. The default is <strong>start</strong>.
    * end_repeat `string`: The month, day, and year that a recurring schedule should stop running. Specify <strong>YYYY-MM-DD</strong>.
    * name **required** `string`: A descriptive name for the schedule. Maximum 255 characters.
    * recurrence_data `string` (values: sunday, monday, tuesday, wednesday, thursday, friday, saturday): The day or days of the week that a recurring schedule should run.
    * start_repeat `string`: The month, day, and year that the recurring schedule should go into effect. Specify <strong>YYYY-MM-DD</strong>.
    * start_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>start</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.
    * stop_transcoder `string`: The month, day, year, and time of day that the <em>action_type</em> <strong>stop</strong> should occur. Specify <strong>YYYY-MM-DD HH:MM:SS</strong> where <strong>HH</strong> is a 24-hour clock in UTC.

### schedules
* schedules `object`
  * schedules **required** `array`
    * items [schedule](#schedule)

### shm_historic_metrics
* shm_historic_metrics `object`
  * audio_codec [audio_codec_metric](#audio_codec_metric)
  * bits_in_rate [bits_in_rate_metric](#bits_in_rate_metric)
  * bits_out_rate [bits_out_rate_metric](#bits_out_rate_metric)
  * cpu_idle [cpu_idle_metric](#cpu_idle_metric)
  * created_at `string`: The date and time that the stream health record was created.
  * frame_rate [frame_rate_metric](#frame_rate_metric)
  * height [height_metric](#height_metric)
  * keyframe_interval [keyframe_interval_metric](#keyframe_interval_metric)
  * video_codec [video_codec_metric](#video_codec_metric)
  * width [width_metric](#width_metric)

### shm_metrics
* shm_metrics `object`
  * audio_codec [audio_codec_metric](#audio_codec_metric)
  * bits_in_rate [bits_in_rate_metric](#bits_in_rate_metric)
  * bits_out_rate [bits_out_rate_metric](#bits_out_rate_metric)
  * bytes_in_rate [bytes_in_rate_metric](#bytes_in_rate_metric)
  * bytes_out_rate [bytes_out_rate_metric](#bytes_out_rate_metric)
  * configured_bytes_out_rate [configured_bytes_out_rate_metric](#configured_bytes_out_rate_metric)
  * connected [connected_metric](#connected_metric)
  * cpu [cpu_metric](#cpu_metric)
  * frame_rate [frame_rate_metric](#frame_rate_metric)
  * frame_size [frame_size_metric](#frame_size_metric)
  * gpu_decoder_usage [gpu_decoder_usage_metric](#gpu_decoder_usage_metric)
  * gpu_driver_version [gpu_driver_version_metric](#gpu_driver_version_metric)
  * gpu_encoder_usage [gpu_encoder_usage_metric](#gpu_encoder_usage_metric)
  * gpu_memory_usage [gpu_memory_usage_metric](#gpu_memory_usage_metric)
  * gpu_usage [gpu_usage_metric](#gpu_usage_metric)
  * height [height_metric](#height_metric)
  * keyframe_interval [keyframe_interval_metric](#keyframe_interval_metric)
  * stream_target_status_OUTPUTIDX_STREAMTARGETIDX [stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metric](#stream_target_status_outputidx_streamtargetidx_metric)
  * unique_views [unique_views_metric](#unique_views_metric)
  * video_codec [video_codec_metric](#video_codec_metric)
  * width [width_metric](#width_metric)

### stream_source
* stream_source `object`
  * backup_ip_address `string`: If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder.
  * backup_url `string`: The backup RTMP playback URL of the transcoded stream.
  * created_at `string`: The date and time that the stream source was created.
  * id `string`: The unique alphanumeric string that identifies the stream source.
  * ip_address `string`: If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder.
  * location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder.
  * location_method `string` (values: region, ip_address): The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>.
  * name `string`: A descriptive name for the stream source. Maximum 255 characters.
  * password `string`: The password that you can use to configure the source encoder to authenticate to the stream source.
  * playback_url `string`: The full RTMP playback URL.
  * primary_url `string`: The primary RTMP playback URL of the transcoded stream.
  * provider `string`: The provider of the Wowza Streaming Cloud stream source.
  * stream_name `string`: The name of the stream that you can use to configure the source encoder to connect to the stream source.
  * updated_at `string`: The date and time that the stream source was updated.
  * username `string`: The username that you can use to configure the source encoder to authenticate to the stream source.

### stream_source_create_input
* stream_source_create_input `object`
  * stream_source **required** `object`
    * backup_ip_address `string`: If <em>location_method</em> is <strong>ip_address</strong>, specify the backup IP address of the source encoder.
    * ip_address `string`: If <em>location_method</em> is <strong>ip_address</strong>, specify the primary IP address of the source encoder.
    * location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): If <em>location_method</em> is <strong>region</strong>, specify a location as close as possible to the source encoder.
    * location_method **required** `string` (values: region, ip_address): The method used to determine the location of the stream source, either by <strong>region</strong> or based on the source encoder's <strong>ip_address</strong>.
    * name **required** `string`: A descriptive name for the stream source. Maximum 255 characters.

### stream_source_update_input
* stream_source_update_input `object`
  * stream_source **required** `object`
    * name **required** `string`: A descriptive name for the stream source. Maximum 255 characters.

### stream_sources
* stream_sources `object`
  * stream_sources **required** `array`
    * items [stream_source](#stream_source)

### stream_target
* stream_target `object`
  * backup_url `string`: The backup ingest URL for a target whose <em>type</em> is <strong>WowzaStreamTarget</strong> or <strong>CustomStreamTarget</strong>.
  * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
  * connection_code `string`: A six-character, alphanumeric string that allows Wowza Streaming Engine to send a transcoded stream to a <strong>WowzaStreamTarget</strong> or for the Wowza GoCoder app to send an encoded stream to a <strong>UltraLowLatencyStreamTarget</strong>. The code can be used once and expires 24 hours after it's created.
  * connection_code_expires_at `string`: The date and time that the <em>connection_code</em> expires.
  * created_at `string`: The date and time that the stream target was created.
  * enable_hls `boolean`: Returned only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. Indicates whether Apple HLS playback is enabled for the stream target.
  * enabled `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server.
  * hds_playback_url `string`: The web address that the target uses to play Adobe HDS streams.
  * hls_playback_url `string`: Only for targets whose <em>provider</em> is <strong>akamai_cupertino</strong>. The web address that the target uses to play Apple HLS streams.
  * id `string`: The unique alphanumeric string that identifies the stream target.
  * ingest_ip_whitelist `array`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server.
    * items `string`
  * location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
  * name `string`: A descriptive name for the stream target. Maximum 255 characters.
  * password `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication.
  * playback_urls `object`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. A hash of **hls**, **wowz**, and **ws** URLs that can be used by the player.
    * hls `string`: The web address that the ultra low latency target can use to play the Apple HLS stream.
    * wowz `string`: The **wowz** and **wowzs** web addresses that the ultra low latency target can use to play WOWZ streams.
    * ws `string`: The **ws** and **wss** web addresses that the ultra low latency target can use to play the WebSocket stream.
  * primary_url `string`: The primary ingest URL of the target.
  * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
  * region_override `string` (values: azure-westus, azure-eastus2, azure-northeurope, null): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server.
  * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
  * secure_ingest_query_param `string`: Only for targets whose <em>use_secure_ingest</em> is <strong>true</strong>. The query parameter needed for secure stream delivery between the transcoder and the target.
  * source_delivery_method `string` (values: push, pull): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
  * source_url `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
  * stream_name `string`: The name of the stream being ingested into the target. Returned for all targets except those whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and whose <em>source_delivery_method</em> is **pull**.
  * type `string` (values: WowzaStreamTarget, UltraLowLatencyStreamTarget, CustomStreamTarget): <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
  * updated_at `string`: The date and time that the stream target was updated.
  * use_cors `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system.
  * use_https `boolean`: <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong>
  * use_secure_ingest `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider.
  * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### stream_target_create_input
* stream_target_create_input
  * stream_target **required** `object`
    * backup_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/).
    * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
    * enable_hls `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>.
    * enabled `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server.
    * hds_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams.
    * hls_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams.
    * ingest_ip_whitelist `array`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server.
      * items `string`
    * location **required** `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
    * name **required** `string`: A descriptive name for the stream target. Maximum 255 characters.
    * password `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication.
    * primary_url **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
    * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * region_override `string` (values: azure-westus, azure-eastus2, azure-northeurope): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server.
    * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
    * source_delivery_method **required** `string` (values: push, pull): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
    * source_url **required** `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
    * stream_name **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
    * type `string` (values: WowzaStreamTarget, UltraLowLatencyStreamTarget, CustomStreamTarget): <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
    * use_cors `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system.
    * use_https `boolean`: <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong>
    * use_secure_ingest `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider.
    * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### stream_target_input
* stream_target_input `object`
  * stream_target **required** `object`
    * backup_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/).
    * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
    * enable_hls `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>.
    * enabled `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server.
    * hds_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams.
    * hls_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams.
    * ingest_ip_whitelist `array`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server.
      * items `string`
    * location **required** `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
    * name **required** `string`: A descriptive name for the stream target. Maximum 255 characters.
    * password `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication.
    * primary_url **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
    * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * region_override `string` (values: azure-westus, azure-eastus2, azure-northeurope): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server.
    * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
    * source_delivery_method **required** `string` (values: push, pull): Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
    * source_url **required** `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
    * stream_name **required** `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
    * type `string` (values: WowzaStreamTarget, UltraLowLatencyStreamTarget, CustomStreamTarget): <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
    * use_cors `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system.
    * use_https `boolean`: <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong>
    * use_secure_ingest `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider.
    * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### stream_target_metrics
* stream_target_metrics `object`
  * average_bytes_in `number`: The average number of bytes transfered to the origin server by the source.
  * average_total_connections `number`: The total number of current connections.
  * created_at `string`: The date and time, in UTC, that the metrics were recorded.
  * dropped_connections `integer`: The total number of dropped connections since the last interval.
  * maximum_total_connections `integer`: The maximum number of connections during the interval.
  * minimum_total_connections `integer`: The minimum number of connections during the interval.
  * new_connections `integer`: The total number of new connections since the last interval.

### stream_target_properties
* stream_target_properties `object`
  * properties **required** `array`
    * items [stream_target_property](#stream_target_property)

### stream_target_property
* stream_target_property `object`
  * key `string` (values: chunkSize, playSSL, relativePlaylists, sendSSL): <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS).
  * section `string` (values: hls, playlist): The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>.
  * stream_target_id `string`: The unique alphanumeric string that identifies the stream target.
  * value `string` (values: 2, 4, 6, 8, 10, true, false): For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>.

### stream_target_property_create_input
* stream_target_property_create_input `object`
  * property **required** `object`
    * key **required** `string` (values: chunkSize, playSSL, relativePlaylists, sendSSL): <strong>chunkSize</strong> defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. <strong>playSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). <strong>relativePlaylists</strong> allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. <strong>sendSSL</strong> determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS).
    * section **required** `string` (values: hls, playlist): The section of the stream target configuration table that contains the property. For <strong>chunkSize</strong> and <strong>sendSSL</strong>, use <strong>hls</strong>. For <strong>playSSL</strong> and <strong>relativePlaylists</strong>, use <strong>playlist</strong>.
    * value **required** `string` (values: 2, 4, 6, 8, 10, true, false): For <strong>chunkSize</strong> use <strong>2</strong>, <strong>4</strong>, <strong>6</strong>, <strong>8</strong>, or <strong>10</strong>. For <strong>playSSL</strong>, <strong>relativePlaylists</strong>, and <strong>sendSSL</strong> use <strong>true</strong> or <strong>false</strong>.

### stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metric
* stream_target_status_OUTPUTIDX_STREAMTARGETIDX_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### stream_target_update_input
* stream_target_update_input `object`
  * stream_target **required** `object`
    * backup_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The backup RTMP ingest URL of the target, without the preceding protocol and without the trailing slash (/).
    * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
    * enabled `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server.
    * hds_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. The web address that the target uses to play Adobe HDS streams.
    * hls_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play Apple HLS streams.
    * ingest_ip_whitelist `array`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server.
      * items `string`
    * name `string`: A descriptive name for the stream target. Maximum 255 characters.
    * password `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. A <em>username</em> must also be present. The password associated with the target username for RTMP authentication.
    * primary_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The primary RTMP ingest URL, without the preceding protocol and without the trailing slash (/).
    * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * rtmp_playback_url `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The web address that the target uses to play RTMP streams.
    * source_url `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
    * stream_name `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. The name of the stream as defined in the target's ingestion settings.
    * username `string`: Only for targets whose <em>type</em> is <strong>CustomStreamTarget</strong> and <em>provider</em> is <em>not</em> **akamai_cupertino**. The username or ID that the target uses for RTMP authentication.

### stream_targets
* stream_targets `object`
  * stream_targets **required** `array`
    * items [index_stream_target](#index_stream_target)

### token_auth
* token_auth `object`
  * created_at `string`: The date and time that the token authorization was created.
  * enabled `boolean`: Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable.
  * stream_target_id `string`: The unique alphanumeric string that identifies the stream target.
  * trusted_shared_secret `string`: The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32.
  * updated_at `string`: The date and time that the token authorization was updated.

### token_auth_create_input
* token_auth_create_input `object`
  * token_auth **required** `object`
    * enabled **required** `boolean`: Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable.
    * trusted_shared_secret **required** `string`: The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32.

### token_auth_update_input
* token_auth_update_input `object`
  * token_auth **required** `object`
    * enabled `boolean`: Specify <strong>true</strong> to enable token authorization or <strong>false</strong> to disable.
    * trusted_shared_secret `string`: The trusted shared secret of the token authorization. Must contain only hexadecimal characters and be an even number of total characters not exceeding 32.

### transcoder
* transcoder `object`
  * application_name `string`: The application name from the pull stream source URL.
  * billing_mode `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
  * broadcast_location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source.
  * buffer_size `integer` (values: 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000): The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds).
  * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
  * created_at `string`: The date and time that the transcoder was created.
  * delivery_method `string` (values: pull, cdn, push): The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
  * delivery_protocols `array`: An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned.
    * items `string`
  * description `string`: An optional description of the transcoder.
  * direct_playback_urls `array`: An array of direct playback URLs the transcoder's delivery protocols. Each protocol has a URL for the source and a URL for each output rendition.
    * items `object`
      * name `string`: The name of the playback URL: <strong>source</strong>, <strong>passthrough</strong>, or the output rendition's resolution.
      * output_id `string`: Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition.
      * url `string`: The playback URL for the source or output rendition.
  * disable_authentication `boolean`: Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source.
  * domain_name `string`: The domain name from the pull stream source URL.
  * id `string`: The unique alphanumeric string that identifies the transcoder.
  * idle_timeout `integer`: The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
  * low_latency `boolean`: If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>.
  * name `string`: A descriptive name for the transcoder. Maximum 200 characters.
  * outputs `array`: Output renditions associated with the transcoder.
    * items [output](#output)
  * password `string`: A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
  * play_maximum_connections `integer` (values: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The number of users who are allowed to connect directly to the transcoder.
  * protocol `string` (values: rtmp, rtsp): The transport protocol for the source video. The default is <strong>rtmp</strong>.
  * recording `boolean`: If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>.
  * source_port `integer`: The port used for RTMP pull connections to Wowza Streaming Cloud.
  * source_url `string`: For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/).
  * stream_extension `string`: For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension.
  * stream_name `string`: The stream name from the pull stream source URL.
  * stream_smoother `boolean`: A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>.
  * stream_source_id `string`: For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder.
  * suppress_stream_target_start `boolean`: If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts.
  * transcoder_type `string` (values: transcoded, passthrough): The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
  * updated_at `string`: The date and time that the transcoder was updated.
  * username `string`: A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
  * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>.
  * watermark `boolean`: Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image.
  * watermark_height `integer`: The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
  * watermark_image_url `string`: The path to a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller.
  * watermark_opacity `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque.
  * watermark_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>.
  * watermark_width `integer`: The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.

### transcoder_create_input
* transcoder_create_input `object`
  * transcoder **required** `object`
    * billing_mode **required** `string` (values: pay_as_you_go, twentyfour_seven): The billing mode for the transcoder. The default is <strong>pay_as_you_go</strong>.
    * broadcast_location **required** `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source.
    * buffer_size `integer` (values: 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000): The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds).
    * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
    * delivery_method **required** `string` (values: pull, cdn, push): The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
    * delivery_protocols `array`: An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned.
      * items `string`
    * description `string`: An optional description of the transcoder.
    * disable_authentication `boolean`: Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source.
    * idle_timeout `integer`: The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
    * low_latency `boolean`: If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>.
    * name **required** `string`: A descriptive name for the transcoder. Maximum 200 characters.
    * password `string`: A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * play_maximum_connections `integer` (values: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The number of users who are allowed to connect directly to the transcoder.
    * protocol **required** `string` (values: rtmp, rtsp): The transport protocol for the source video. The default is <strong>rtmp</strong>.
    * recording `boolean`: If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>.
    * source_url `string`: For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/).
    * stream_extension `string`: For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension.
    * stream_smoother `boolean`: A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>.
    * stream_source_id `string`: For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder.
    * suppress_stream_target_start `boolean`: If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts.
    * transcoder_type **required** `string` (values: transcoded, passthrough): The type of transcoder, either <strong>transcoded</strong> for streams that are transcoded into adaptive bitrate renditions or <strong>passthrough</strong> for streams that aren't processed by the transcoder. The default is <strong>transcoded</strong>.
    * username `string`: A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>.
    * watermark `boolean`: Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image.
    * watermark_height `integer`: The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
    * watermark_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller.
    * watermark_opacity `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque.
    * watermark_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>.
    * watermark_width `integer`: The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.

### transcoder_properties
* transcoder_properties `object`
  * properties **required** `array`
    * items [transcoder_property](#transcoder_property)

### transcoder_property
* transcoder_property `object`
  * key `string`: The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>.
  * section `string`: The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>.
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder.
  * value `string`: The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms).

### transcoder_property_create_input
* transcoder_property_create_input `object`
  * property **required** `object`
    * key **required** `string`: The key of the property. For <strong>rtsp</strong>, valid values are <strong>debugRtspSession</strong>, <strong>maxRtcpWaitTime</strong>, <strong>avSyncMethod</strong>, <strong>rtspValidationFrequency</strong>, <strong>rtpTransportMode</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, and <strong>rtpIgnoreProfileLevelId</strong>. For <strong>cupertino</strong>, valid values are <strong>cupertinoEnableProgramDateTime</strong>, <strong>cupertinoEnableId3ProgramDateTime</strong>, and <strong>cupertinoProgramDateTimeOffset</strong>.
    * section **required** `string`: The section of the transcoder configuration table that contains the property. Valid values are <strong>rtsp</strong> and <strong>cupertino</strong>.
    * value **required** `string`: The value of the property. For <strong>debugRtspSession</strong>, <strong>avSyncMethod</strong>, <strong>rtspFilterUnknownTracks</strong>, <strong>rtpIgnoreSpropParameterSets</strong>, <strong>rtpIgnoreProfileLevelId</strong>, <strong>cupertinoEnableProgramDateTime</strong>, and <strong>cupertinoEnableId3ProgramDateTime</strong>, valid values are <strong>true</strong> or <strong>false</strong>. <strong>maxRtcpWaitTime</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>2000</strong>. Valid values for <strong>rtpTransportMode</strong> are <strong>udp</strong> or <strong>interleave</strong> (the default). <strong>rtspValidationFrequency</strong> must be <strong>0</strong> (ms, off) or greater. The default is <strong>15000</strong>. <strong>cupertinoProgramDateTimeOffset</strong> must be an integer, positive or negative. The default is <strong>0</strong> (ms).

### transcoder_update_input
* transcoder_update_input `object`
  * transcoder **required** `object`
    * broadcast_location `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): The location where Wowza Streaming Cloud transcodes your stream. Choose a location as close as possible to your video source.
    * buffer_size `integer` (values: 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000): The size, in milliseconds, of the incoming buffer. <strong>0</strong> means no buffer. The default is <strong>4000</strong> (4 seconds).
    * closed_caption_type `string` (values: none, cea, on_text, both): The type of closed caption data being passed from the source. The default, <strong>none</strong>, indicates that no data is being provided. <strong>cea</strong> indicates that a CEA closed captioning data stream is being provided. <strong>on_text</strong> indicates that an onTextData closed captioning data stream is being provided. <strong>both</strong> indicates that both CEA and onTextData closed captioing data streams are being provided.
    * delivery_method **required** `string` (values: pull, cdn, push): The type of connection between the source encoder and the transcoder. The default, <strong>pull</strong>, instructs the transcoder to pull the video from the source. <strong>push</strong> instructs the source to push the stream to the transcoder. <strong>cdn</strong> uses a stream source to deliver the stream to the transcoder.
    * delivery_protocols `array`: An array of playback protocols enabled for this transcoder. By default, <strong>rtmp</strong>, <strong>rtsp</strong>, and <strong>wowz</strong> are returned.
      * items `string`
    * description `string`: An optional description of the transcoder.
    * disable_authentication `boolean`: Authentication is required by default for RTMP and RTSP push connections from a video source to the transcoder. Specify <strong>true</strong> to disable authentication with the video source.
    * idle_timeout `integer`: The amount of idle time, in seconds, before the transcoder automatically shuts down. Valid values are the integers <strong>0</strong> (never shuts down) to <strong>172800</strong> (48 hours). The default is <strong>1200</strong> (20 minutes).
    * low_latency `boolean`: If <strong>true</strong>, turns off the sort packet buffer and speeds the time it takes to decode and deliver video data to the player. The default is <strong>false</strong>.
    * name **required** `string`: A descriptive name for the transcoder. Maximum 200 characters.
    * password `string`: A password for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * play_maximum_connections `integer` (values: 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The number of users who are allowed to connect directly to the transcoder.
    * protocol **required** `string` (values: rtmp, rtsp): The transport protocol for the source video. The default is <strong>rtmp</strong>.
    * recording `boolean`: If <strong>true</strong>, creates a recording of the transcoded output. The default is <strong>false</strong>.
    * remove_watermark_image `boolean`: If <strong>true</strong>, removes the watermark from the output. The default is <strong>false</strong>.
    * source_url `string`: For the <em>delivery_method</em> <strong>pull</strong>. Enter the source's web address without the preceding protocol or the trailing slash (/).
    * stream_extension `string`: For the <em>delivery_method</em> <strong>push</strong>. Some encoders append an extension to their stream names. If the device you're using does this, enter the extension.
    * stream_smoother `boolean`: A dynamic buffer that helps stabilize streams in rough network conditions, but adds latency. Specify <strong>true</strong> to enable stream smoothing. The default is <strong>false</strong>.
    * stream_source_id `string`: For the <em>delivery_method</em> <strong>cdn</strong>. The alphanumeric string that identifies the stream source that you want to use to deliver the stream to the transcoder.
    * suppress_stream_target_start `boolean`: If <strong>true</strong>, disables stream targets when the transcoder starts. If <strong>false</strong> (the default), the targets start when the transcoder starts.
    * username `string`: A username for authenticating an RTMP or RTSP push connection. Can contain only uppercase and lowercase letters; numbers; and the period (.), underscore (_), and hyphen (-) characters. No other special characters can be used.
    * video_fallback `boolean`: If <strong>true</strong>, black video plays if the video source disconnects from the transcoder. If <strong>false</strong> (the default), a stream-not-available message appears. Works only with stream targets whose <em>provider</em> is <strong>akamai_cupertino</strong>.
    * watermark `boolean`: Embeds an image into the transcoded stream for copyright protection. Specify <strong>true</strong> to embed a watermark image.
    * watermark_height `integer`: The height, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image height.
    * watermark_image `string`: A Base64-encoded string representation of a GIF, JPEG, or PNG image that is embedded in all bitrate renditions of the stream. Watermark image files must be 2.5 MB or smaller.
    * watermark_opacity `integer` (values: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100): The opacity, or percentage of transparency, of the watermark. <strong>0</strong> is fully transparent; <strong>100</strong> is fully opaque.
    * watermark_position `string` (values: top-left, top-right, bottom-left, bottom-right): The corner of the video frame in which you want the watermark to appear. The default is <strong>top-left</strong>.
    * watermark_width `integer`: The width, in pixels, of the watermark image. If blank, Wowza Streaming Cloud uses the original image width.

### transcoders
* transcoders `object`
  * transcoders **required** `array`
    * items [transcoder](#transcoder)

### ull_stream_target_input
* ull_stream_target_input `object`
  * stream_target **required** `object`
    * enable_hls `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong>, creates an Apple HLS URL for playback on iOS devices (<em>hls_playback_url</em>). The default is <strong>false</strong>.
    * enabled `boolean`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. If <strong>true</strong> (the default), the source stream is ready to be ingested. If **false**, the source stream won't be ingested by the target's origin server.
    * ingest_ip_whitelist `array`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **push**. A list of IP addresses that can be used to connect to the target's origin server.
      * items `string`
    * name **required** `string`: A descriptive name for the stream target. Maximum 255 characters.
    * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * region_override `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The location of the stream target's origin server. If unspecified, Wowza Streaming Cloud determines the optimal region for the origin server.
    * source_delivery_method **required** `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong>. The type of connection between the stream source and the stream target. **push** instructs the source to push the stream to the stream target. **pull** instructs the stream target to pull the stream from the source.
    * source_url **required** `string`: Only for targets whose <em>type</em> is <strong>UltraLowLatencyStreamTarget</strong> and <em>source_delivery_method</em> is **pull**. The URL of a source IP camera or encoder connecting to the stream target.
    * type `string`: <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->

### unique_views_metric
* unique_views_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### uptime
* uptime `object`
  * billed `boolean`: A Boolean value that indicates if the usage generated by this uptime has been sent for billing processing.
  * created_at `string`: The date and time that the uptime record was created.
  * ended_at `string`: The date and time that the transcoder was stopped for this uptime. If this value is not present, it indicates that the transcoder is currently running.
  * id `string`: The unique alphanumeric string that identifies the uptime record.
  * running `boolean`: A Boolean value that indicates if the transcoder is still running for this uptime.
  * started_at `string`: The date and time that the transcoder started for this uptime.
  * transcoder_id `string`: The unique alphanumeric string that identifies the transcoder.
  * updated_at `string`: The date and time that the uptime record was updated.

### uptimes
* uptimes `object`
  * uptimes **required** `array`
    * items [uptime](#uptime)

### url
* url `object`
  * bitrate `integer`: The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
  * created_at `string`: The date and time that the player URL was created.
  * height `integer`: The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
  * id `string`: The unique alphanumeric string that identifies the player URL.
  * label `string`: A descriptive name for the player URL. Maximum 255 characters.
  * player_id `string`: The unique alphanumeric string that identifies the player.
  * updated_at `string`: The date and time that the player URL was updated.
  * url `string`: The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback.
  * width `integer`: The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.

### url_create_input
* url_create_input
  * url **required** `object`
    * bitrate `integer`: The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * height `integer`: The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * label `string`: A descriptive name for the player URL. Maximum 255 characters.
    * url `string`: The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback.
    * width `integer`: The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.

### url_input
* url_input `object`
  * url **required** `object`
    * bitrate `integer`: The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * height `integer`: The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * label `string`: A descriptive name for the player URL. Maximum 255 characters.
    * url `string`: The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback.
    * width `integer`: The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.

### url_update_input
* url_update_input
  * url **required** `object`
    * bitrate `integer`: The video bitrate, in kilobits per second (Kbps), of the output rendition that will be played at the URL. May correspond to the bitrate of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * height `integer`: The height, in pixels, of the output rendition that will be played at the URL. May correspond to the height of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.
    * label `string`: A descriptive name for the player URL. Maximum 255 characters.
    * url `string`: The URL of the player. If using a Wowza CDN target, the URL format is `http://[wowzasubdomain]-f.akamaihd.net/z/[stream_name]_[angle]@[stream_id]/manifest.f4m` for Adobe HDS playback or `http://[wowzasubdomain]-f.akamaihd.net/i/[stream_name]_[angle]@[stream_id]/master.m3u8` for Apple HLS playback.
    * width `integer`: The width, in pixels, of the output rendition that will be played at the URL. May correspond to the width of an output rendition being used by the live stream or transcoder. Must be greater than <strong>0</strong>.

### urls
* urls `object`
  * urls **required** `array`
    * items [url](#url)

### usage_network_stream_source
* usage_network_stream_source `object`
  * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream source during the selected time frame.
  * bytes_used `integer`: The amount of content, in bytes, that went through the stream source during the selected time frame.
  * deleted `boolean`: A value of <strong>true</strong> indicates that the stream source has been removed from Wowza Streaming Cloud.
  * id `string`: The unique alphanumeric string that identifies the stream source.
  * name `string`: A descriptive name for the stream source.

### usage_network_stream_sources
* usage_network_stream_sources `object`
  * stream_sources `array`
    * items [usage_network_stream_source](#usage_network_stream_source)

### usage_network_stream_target
* usage_network_stream_target `object`
  * stream_targets `object`: An array of stream targets and their usage by protocol and zone.
    * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
    * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.
    * deleted `boolean`: A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud.
    * id `string`: The unique alphanumeric string that identifies the stream target.
    * name `string`: A descriptive name for the stream target.
    * protocols `object`: A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage.
      * zones `object`: A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated.
        * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
        * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.
  * total `object`: A hash of total usage, including overall total billed and used for all targets, and totals by zone for each protocol.
    * bytes_billed `integer`: The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
    * bytes_used `integer`: The amount of content, in bytes, that went through all stream targets during the selected time frame.
    * protocols `object`: A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage.
      * zones `object`: A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated.
        * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
        * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.

### usage_network_stream_targets
* usage_network_stream_targets `object`
  * stream_targets `object`: An array of stream targets and their usage by protocol and zone.
    * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
    * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.
    * deleted `boolean`: A value of <strong>true</strong> indicates that the stream target has been removed from Wowza Streaming Cloud.
    * id `string`: The unique alphanumeric string that identifies the stream target.
    * name `string`: A descriptive name for the stream target.
    * protocols `object`: A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage.
      * zones `object`: A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated.
        * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
        * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.
  * total `object`: A hash of total usage, including overall total billed and used for all targets, and totals by zone for each protocol.
    * bytes_billed `integer`: The amount of usage, in bytes, that was billed for all stream targets during the selected time frame.
    * bytes_used `integer`: The amount of content, in bytes, that went through all stream targets during the selected time frame.
    * protocols `object`: A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage.
      * zones `object`: A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated.
        * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the stream target during the selected time frame.
        * bytes_used `integer`: The amount of content, in bytes, that went through the stream target during the selected time frame.

### usage_network_transcoder
* usage_network_transcoder `object`
  * bytes_billed `integer`: The amount of usage, in bytes, that was billed for the live stream or transcoder during the selected time frame.
  * bytes_used `integer`: The amount of content, in bytes, that went through the live stream or transcoder during the selected time frame.
  * deleted `boolean`: A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud.
  * id `integer`: The unique alphanumeric string that identifies the live stream or transcoder.
  * name `string`: A descriptive name for the live stream or transcoder.

### usage_network_transcoders
* usage_network_transcoders `object`
  * transcoders `array`
    * items [usage_network_transcoder](#usage_network_transcoder)

### usage_storage_peak_recording
* usage_storage_peak_recording `object`
  * peak_recording `object`
    * bytes_total `integer`: The amount, in bytes, used to store recordings during the selected time frame. If the time frame is in the past, <em>bytes_total</em> is the amount of storage that was used and billed. If the time frame includes the current billing period, <em>bytes_total</em> is the greatest amount of content stored in Wowza Streaming Cloud at any point to date in the billing period.

### usage_time_transcoder
* usage_time_transcoder `object`
  * deleted `boolean`: A value of <strong>true</strong> indicates that the live stream or transcoder has been removed from Wowza Streaming Cloud.
  * id `integer`: The unique alphanumeric string that identifies the live stream or transcoder.
  * name `string`: A descriptive name for the live stream or transcoder.
  * seconds_billed `integer`: The amount of stream processing time, in seconds, that was billed for the live stream or transcoder.
  * seconds_used `integer`: The amount of time, in seconds, that it took for the live stream or transcoder to be processed.

### usage_time_transcoders
* usage_time_transcoders `object`
  * transcoders `array`
    * items [usage_time_transcoder](#usage_time_transcoder)

### usage_viewer_data_countries
* usage_viewer_data_countries `array`
  * items `object`
    * country_code `object`
      * name `string`: The name of the country.
      * percentage_viewers `integer`: Total percentage of viewers (<strong>100</strong>).
      * percentage_viewing_time `integer`: The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
      * protocols [usage_viewer_data_protocols](#usage_viewer_data_protocols)
      * seconds_avg_viewing_time `integer`: The average length of time, in seconds, that viewers played the stream at the target.
      * seconds_total_viewing_time `integer`: The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
      * total_unique_viewers `integer`: The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.

### usage_viewer_data_protocols
* usage_viewer_data_protocols `array`
  * items `object`
    * protocol_name `object`
      * name `string`: The name of the protocol.
      * percentage_viewers `integer`: Total percentage of viewers (<strong>100</strong>).
      * percentage_viewing_time `integer`: The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
      * seconds_avg_viewing_time `integer`: The average length of time, in seconds, that viewers played the stream at the target.
      * seconds_total_viewing_time `integer`: The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
      * total_unique_viewers `integer`: The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.

### usage_viewer_data_renditions
* usage_viewer_data_renditions `array`
  * items `object`
    * rendition_name `object`
      * countries [usage_viewer_data_countries](#usage_viewer_data_countries)
      * name `string`: The name of the rendition.
      * percentage_viewers `integer`: Total percentage of viewers (<strong>100</strong>).
      * percentage_viewing_time `integer`: The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
      * protocols [usage_viewer_data_protocols](#usage_viewer_data_protocols)
      * seconds_avg_viewing_time `integer`: The average length of time, in seconds, that viewers played the stream at the target.
      * seconds_total_viewing_time `integer`: The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
      * total_unique_viewers `integer`: The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.

### usage_viewer_data_stream_target
* usage_viewer_data_stream_target `object`
  * stream_target `object`
    * countries [usage_viewer_data_countries](#usage_viewer_data_countries)
    * country_list `array`: A comma-separated list of all viewed country codes shown as strings, for quick reference.
      * items `string`
    * percentage_viewers `integer`: Total percentage of viewers (<strong>100</strong>).
    * percentage_viewing_time `integer`: The percentage of total viewing time that the protocol or rendition was viewed. Always <strong>100</strong> for <em>stream_target</em>.
    * protocols [usage_viewer_data_protocols](#usage_viewer_data_protocols)
    * rendition_list `array`: A comma-separated list of all viewed renditions shown as numbers, for quick reference.
      * items `string`
    * renditions [usage_viewer_data_renditions](#usage_viewer_data_renditions)
    * seconds_avg_viewing_time `integer`: The average length of time, in seconds, that viewers played the stream at the target.
    * seconds_total_viewing_time `integer`: The total length of time, in seconds, that all viewers played the stream at the target. <em>seconds_total_viewing_time</em> may be longer than the duration of the stream.
    * total_unique_viewers `integer`: The total number of unique viewers that downloaded at least one chunk of the stream at the target (for HTTP streams) or connected to and viewed the stream (for ultra low latency streams). A unique viewer is a single IP address; multiple users that share the same IP address are counted once.

### video_codec_metric
* video_codec_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `string`: The value of the associated key.

### width_metric
* width_metric `object`
  * status `string`: The status of the current key. Possible values are <strong>normal</strong> (everything is fine), <strong>warning</strong> (something may be misconfigured), and <strong>no_data</strong> (no data was returned, perhaps because the instance isn't running).
  * text `string`: A message related to the value and status of the current key. Usually blank unless there's a warning status.
  * units `string`: The unit of the returned value, such as <strong>Kbps</strong>, <strong>bps</strong>, <strong>%</strong>, <strong>FPS</strong>, or <strong>GOP</strong>.
  * value `integer`: The value of the associated key.

### wowza_stream_target_input
* wowza_stream_target_input `object`
  * stream_target **required** `object`
    * chunk_size `string` (values: 2, 4, 6, 8, 10): <strong>The <em>chunk_size</em> parameter is deprecated. To set the chunk size of a stream target, use the POST /stream_targets/[stream_target_id]/properties endpoint.</strong> Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. The segment duration for HLS encoding. The default is <strong>10</strong>.
    * location **required** `string` (values: asia_pacific_australia, asia_pacific_japan, asia_pacific_singapore, asia_pacific_taiwan, eu_belgium, eu_germany, eu_ireland, south_america_brazil, us_central_iowa, us_east_s_carolina, us_east_virginia, us_west_california, us_west_oregon): Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <em>not</em> <strong>akamai_cupertino</strong>. Choose a location as close as possible to your video source.
    * name **required** `string`: A descriptive name for the stream target. Maximum 255 characters.
    * provider `string`: The CDN for the target. <br /><br />Required for targets whose <em>type</em> is <strong>CustomStreamTarget</strong>. Valid values for <strong>CustomStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong>, <strong>akamai_rtmp</strong>, <strong>limelight</strong>, <strong>rtmp</strong>, and <strong>ustream</strong>. Values can be appended with **_mock** to use in the sandbox environment. <br /><br />Valid values for <strong>WowzaStreamTarget</strong> are <strong>akamai</strong>, <strong>akamai_cupertino</strong> (default), <strong>akamai_legacy_rtmp</strong>, and <strong>wowza</strong>. <br /><br /><strong>UltraLowLatencyStreamTarget</strong> defaults to and must be <strong>wowza</strong>.
    * type `string`: <strong>WowzaStreamTarget</strong> is a Wowza CDN target. <strong>UltraLowLatencyStreamTarget</strong> is an ultra low latency Wowza stream target. <strong>CustomStreamTarget</strong> (the default) is an external, third-party destination. <!--and <strong>FacebookStreamTarget</strong> (a Facebook Live target).-->
    * use_cors `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. CORS, or cross-origin resource sharing, allows streams to be sent to providers such as Peer5, Viblast, and Streamroot, which implement a peer-to-peer grid delivery system.
    * use_https `boolean`: <strong>The <em>use_https</em> parameter is deprecated. Use the POST /stream_targets/[<em>stream_target_id</em>]/properties endpoint and the <em>relative_playlists</em> parameter instead.</strong>
    * use_secure_ingest `boolean`: Only for targets whose <em>type</em> is <strong>WowzaStreamTarget</strong> and <em>provider</em> is <strong>akamai_cupertino</strong>. If <strong>true</strong>, generates a <em>secure_ingest_query_param</em> to securely deliver the stream from the transcoder to the provider.


