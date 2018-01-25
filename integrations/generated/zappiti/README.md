# @datafire/zappiti

Client library for Zappiti Player

## Installation and Usage
```bash
npm install --save @datafire/zappiti
```
```js
let zappiti = require('@datafire/zappiti').create();

zappiti.CheckZappitiService.post({
  "body": {}
}).then(data => {
  console.log(data);
});
```

## Description

Move your app forward with the Zappiti Player API. Use http://your-player-ip:8990/ as base URL for your requests.

## Actions

### CheckZappitiService.post
ErrorCode.NotInstalled
ErrorCode.NotRunning
ErrorCode.Running



```js
zappiti.CheckZappitiService.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CheckZappitiServiceRequest](#checkzappitiservicerequest)

#### Output
* output [CheckZappitiServiceResult](#checkzappitiserviceresult)

### ConnectionDetails.post
Get user's login details


```js
zappiti.ConnectionDetails.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ConnectionDetailsRequest](#connectiondetailsrequest)

#### Output
* output [ConnectionDetailsResult](#connectiondetailsresult)

### InstallZappitiService.post
Open a popup that allow the user to install Zappiti Service, if not already installed


```js
zappiti.InstallZappitiService.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [InstallZappitiServiceRequest](#installzappitiservicerequest)

#### Output
* output [InstallZappitiServiceResult](#installzappitiserviceresult)

### IsAlive.post
Get server status


```js
zappiti.IsAlive.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [IsAliveRequest](#isaliverequest)

#### Output
* output [IsAliveResult](#isaliveresult)

### LastMedia.post
Get informations about last media playback


```js
zappiti.LastMedia.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [LastMediaRequest](#lastmediarequest)

#### Output
* output [LastMediaResult](#lastmediaresult)

### StartVideo.post
Start the playback of the speficied video.



```js
zappiti.StartVideo.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [StartVideoRequest](#startvideorequest)

#### Output
* output [StartVideoResult](#startvideoresult)

### StartZappitiService.post
Start Zappiti Service if not started yet


```js
zappiti.StartZappitiService.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [StartZappitiServiceRequest](#startzappitiservicerequest)

#### Output
* output [StartZappitiServiceResult](#startzappitiserviceresult)



## Definitions

### CheckZappitiServiceRequest
* CheckZappitiServiceRequest `object`
  * ApiKey `string`: Client API Key

### CheckZappitiServiceResult
* CheckZappitiServiceResult `object`
  * ErrorCode [ErrorCode](#errorcode)

### ConnectionDetailsRequest
* ConnectionDetailsRequest `object`
  * ApiKey `string`: Client API Key

### ConnectionDetailsResult
* ConnectionDetailsResult `object`
  * AuthKey `string`: User's Authentification key
  * Collection `string`: User's collection id
  * Email `string`: User's email used for the collection
  * ErrorCode [ErrorCode](#errorcode)
  * ServerIp `string`: Server's IP
  * ServerPort `integer`: Port used by the server

### ErrorCode
* ErrorCode `string` (values: None, Failed, Exist, NotInstalled, NotRunning, Running, FailToStart, BadApiKey)

### InstallZappitiServiceRequest
* InstallZappitiServiceRequest `object`
  * ApiKey `string`: Client API Key

### InstallZappitiServiceResult
* InstallZappitiServiceResult `object`
  * ErrorCode [ErrorCode](#errorcode)

### IsAliveRequest
* IsAliveRequest `object`
  * ApiKey `string`: Client API Key

### IsAliveResult
* IsAliveResult `object`
  * ErrorCode [ErrorCode](#errorcode)

### LastMediaRequest
* LastMediaRequest `object`
  * ApiKey `string`: Client API Key

### LastMediaResult
* LastMediaResult `object`
  * Actors `array`
    * items `string`
  * BackgroundUrl `string`
  * Directors `array`
    * items `string`
  * Episode `integer`
  * ErrorCode [ErrorCode](#errorcode)
  * PosterUrl `string`
  * Runtime `integer`
  * Season `integer`
  * Synopsis `string`
  * Title `string`
  * TvShowName `string`

### StartVideoRequest
* StartVideoRequest `object`
  * ApiKey `string`: Client API Key
  * AuthKey `string`: User auth key
  * Collection `string`: Collection id
  * Ip `string`: Server Ip
  * MediaId `string`: Id of the video to start
  * Port `integer`: Server Port

### StartVideoResult
* StartVideoResult `object`
  * ErrorCode [ErrorCode](#errorcode)

### StartZappitiServiceRequest
* StartZappitiServiceRequest `object`
  * ApiKey `string`: Client API Key

### StartZappitiServiceResult
* StartZappitiServiceResult `object`
  * ErrorCode [ErrorCode](#errorcode)


