# @datafire/zappiti
Move your app forward with the Zappiti Player API. Use http://your-player-ip:8990/ as base URL for your requests.

## Operation: CheckZappitiService.post
ErrorCode.NotInstalled
ErrorCode.NotRunning
ErrorCode.Running


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/CheckZappitiServiceRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CheckZappitiServiceResult"
}
```
## Operation: InstallZappitiService.post
Open a popup that allow the user to install Zappiti Service, if not already installed

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/InstallZappitiServiceRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InstallZappitiServiceResult"
}
```
## Operation: IsAlive.post
Get server status

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/IsAliveRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IsAliveResult"
}
```
## Operation: LastMedia.post
Get informations about last media playback

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/LastMediaRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LastMediaResult"
}
```
## Operation: StartVideo.post
Start the playback of the speficied video.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/StartVideoRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StartVideoResult"
}
```
## Operation: StartZappitiService.post
Start Zappiti Service if not started yet

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/StartZappitiServiceRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StartZappitiServiceResult"
}
```
