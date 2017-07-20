# @datafire/zappiti

Client library for Zappiti Player

## Installation and Usage
```bash
npm install --save datafire @datafire/zappiti
```

```js
let datafire = require('datafire');
let zappiti = require('@datafire/zappiti').actions;
let context = new datafire.Context();

zappiti.CheckZappitiService.post({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* body (object) **required**

### InstallZappitiService.post
Open a popup that allow the user to install Zappiti Service, if not already installed


```js
zappiti.InstallZappitiService.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### IsAlive.post
Get server status


```js
zappiti.IsAlive.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### LastMedia.post
Get informations about last media playback


```js
zappiti.LastMedia.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### StartVideo.post
Start the playback of the speficied video.



```js
zappiti.StartVideo.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### StartZappitiService.post
Start Zappiti Service if not started yet


```js
zappiti.StartZappitiService.post({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

