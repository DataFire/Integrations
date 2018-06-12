# @datafire/waterlinked

Client library for The Water Linked Underwater GPS

## Installation and Usage
```bash
npm install --save @datafire/waterlinked
```
```js
let waterlinked = require('@datafire/waterlinked').create();

waterlinked.api.get(null).then(data => {
  console.log(data);
});
```

## Description

API for the Water Linked Underwater GPS. For more details: http://www.waterlinked.com

Recommended approach for connecting to a Underwater GPS via the API is:
- If "GET /api/" times out, the Underwater GPS is not running (on this IP address)
- If "GET /api/" responds with 200 OK check that the api version returrned (eg "v1") is supported by the client (eg: also supports "v1").
- If the api version returned does not match what the client supports: give an error to the user and recommend upgrading. (Eg: response is "v2" while client only supports "v1")
- If "GET /api/" responds with 301 Moved permanently. "GET /api/v1/version" to check if the kit has a version earlier than 1.5.
- "GET /api/v1/version" will always respond with 200 OK on Underwater GPS earlier than 1.5 release.

Configuration API is is not considered stable and will potentially be changed

## Actions

### api.get
ApiVersion about


```js
waterlinked.api.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WupdaterApiversion](#wupdaterapiversion)

### api.v1.about.get
Get about information


```js
waterlinked.api.v1.about.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedAbout](#waterlinkedabout)

### api.v1.about.status.get
Get current IMU and GPS status


```js
waterlinked.api.v1.about.status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedStatus](#waterlinkedstatus)

### api.v1.about.temperature.get
Get board temperature


```js
waterlinked.api.v1.about.temperature.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedTemperature](#waterlinkedtemperature)

### api.v1.config.generic.get
Get generic configuration


```js
waterlinked.api.v1.config.generic.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedConfiguration](#waterlinkedconfiguration)

### api.v1.config.generic.put
Modify generic configuration


```js
waterlinked.api.v1.config.generic.put({
  "payload": {
    "carrier_frequency": 0,
    "range_min_x": 0,
    "range_max_x": 0,
    "range_min_y": 0,
    "range_max_y": 0,
    "range_max_z": 0,
    "use_external_depth": true,
    "gps": "",
    "compass": "",
    "static_lat": 0,
    "static_lon": 0,
    "static_orientation": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [ModifyConfigPayload](#modifyconfigpayload)

#### Output
*Output schema unknown*

### api.v1.config.receivers.get
(Re)Load current receiver settings and return them


```js
waterlinked.api.v1.config.receivers.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedReceiverCollection](#waterlinkedreceivercollection)

### api.v1.config.receivers.ID.get
Get receiver configuration by id


```js
waterlinked.api.v1.config.receivers.ID.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`: Identifier

#### Output
* output [WaterlinkedReceiver](#waterlinkedreceiver)

### api.v1.config.receivers.ID.put
Modify receiver configuration, does not apply the change until generic modify is called. Calling list will discard changes


```js
waterlinked.api.v1.config.receivers.ID.put({
  "ID": 0,
  "payload": {
    "id": 0,
    "x": 0,
    "y": 0,
    "z": 0
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`: Identifier
  * payload **required** [ModifyReceiverConfigPayload](#modifyreceiverconfigpayload)

#### Output
*Output schema unknown*

### api.v1.external.depth.put
Set depth from external source. If Locator A1 is used, this is required to get a position


```js
waterlinked.api.v1.external.depth.put({
  "payload": {
    "depth": 0,
    "temp": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [SetDepthExternalPayload](#setdepthexternalpayload)

#### Output
*Output schema unknown*

### api.v1.external.master.put
Set current global position of master electronics from external source. Values are only used if GPS mode is set to use external GPS


```js
waterlinked.api.v1.external.master.put({
  "payload": {
    "lat": 0,
    "lon": 0,
    "orientation": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [SetMasterExternalPayload](#setmasterexternalpayload)

#### Output
*Output schema unknown*

### api.v1.external.orientation.get
Get orientation of ROV/Locator set by external


```js
waterlinked.api.v1.external.orientation.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlExternalLocatorOrientation](#wlexternallocatororientation)

### api.v1.external.orientation.put
Set orientation/compass heading of ROV/Locator. This is used only for visualization in GUI


```js
waterlinked.api.v1.external.orientation.put({
  "payload": {
    "orientation": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [SetOrientationExternalPayload](#setorientationexternalpayload)

#### Output
*Output schema unknown*

### api.v1.position.acoustic.filtered.get
Get current Kalman filtered acoustic position relative to master acoustics. Expected update frequency: 4 Hz


```js
waterlinked.api.v1.position.acoustic.filtered.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedAccousticPosition](#waterlinkedaccousticposition)

### api.v1.position.acoustic.raw.get
Get current unfiltered acoustic position relative to master acoustics. Expected update frequency: 4 Hz


```js
waterlinked.api.v1.position.acoustic.raw.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedAccousticPosition](#waterlinkedaccousticposition)

### api.v1.position.global.get
Get current global position of locator. Locator position is calculated from the current acoustic position and the global position of the master electronics. Expected update frequency: 4 Hz


```js
waterlinked.api.v1.position.global.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlGlobalPosition](#wlglobalposition)

### api.v1.position.master.get
Get current global position of master electronics. Expected update frequency: 1 Hz


```js
waterlinked.api.v1.position.master.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlMasterPosition](#wlmasterposition)



## Definitions

### ModifyConfigPayload
* ModifyConfigPayload `object`: Configuration parameters
  * carrier_frequency **required** `number`: Carrier frequency (kHz)
  * compass **required** `string` (values: onboard, static, external): Compass provider setting
  * gps **required** `string` (values: onboard, static, external): GPS provider setting
  * range_max_x **required** `number`: Max range (meters)
  * range_max_y **required** `number`: Max range (meters)
  * range_max_z **required** `number`: Max range (meters)
  * range_min_x **required** `number`: Max range (meters)
  * range_min_y **required** `number`: Max range (meters)
  * static_lat **required** `number`: Latitude to use in static mode
  * static_lon **required** `number`: Longitude to use in static mode
  * static_orientation **required** `number`: Orientation/compass reading to use in static mode (degrees)
  * use_external_depth **required** `boolean`: Use external depth. Required to be true when using Locator-A1.

### ModifyReceiverConfigPayload
* ModifyReceiverConfigPayload `object`: A receiver configuration
  * id **required** `integer`: Unique receiver identifier
  * x **required** `number`: Configured X position relative to master electronics (meter)
  * y **required** `number`: Configured Y position relative to master electronics (meter)
  * z **required** `number`: Configured Z position relative to master electronics (meter)

### SetDepthExternalPayload
* SetDepthExternalPayload `object`: Current locator depth and temperature
  * depth **required** `number`: Curent depth (meter)
  * temp **required** `number`: Current water temperature (C)

### SetMasterExternalPayload
* SetMasterExternalPayload `object`: Global master position from external source
  * lat **required** `number`: Current Latitude
  * lon **required** `number`: Current Longitude
  * orientation **required** `number`: Current orientation/compass heading (degrees)

### SetOrientationExternalPayload
* SetOrientationExternalPayload `object`: Set current compass heading of ROV/locator
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no orientation set

### WaterlinkedAbout
* Mediatype identifier: application/vnd.waterlinked.about+json; view=default `object`: About information (default view)
  * chipid **required** `string`: Chip identifier
  * version **required** `string`: Web Server version string

### WaterlinkedAccousticPosition
* Mediatype identifier: application/vnd.waterlinked.accoustic.position+json; view=default `object`: Current relative Locator position (default view)
  * std **required** `number`: Current accoustic position accuracy (meter)
  * temp **required** `number`: Current accoustic temperature (C)
  * x **required** `number`: Current accoustic x position relative to master electronics (meter)
  * y **required** `number`: Current accoustic y position relative to master electronics (meter)
  * z **required** `number`: Current accoustic z position (depth) relative to master electronics (meter)

### WaterlinkedConfiguration
* Mediatype identifier: application/vnd.waterlinked.configuration+json; view=default `object`: Configuration parameters (default view)
  * carrier_frequency **required** `number`: Carrier frequency (kHz)
  * compass **required** `string` (values: onboard, static, external): Compass provider setting
  * gps **required** `string` (values: onboard, static, external): GPS provider setting
  * range_max_x **required** `number`: Max range (meters)
  * range_max_y **required** `number`: Max range (meters)
  * range_max_z **required** `number`: Max range (meters)
  * range_min_x **required** `number`: Max range (meters)
  * range_min_y **required** `number`: Max range (meters)
  * static_lat **required** `number`: Latitude to use in static mode
  * static_lon **required** `number`: Longitude to use in static mode
  * static_orientation **required** `number`: Orientation/compass reading to use in static mode (degrees)
  * use_external_depth **required** `boolean`: Use external depth. Required to be true when using Locator-A1.

### WaterlinkedReceiver
* Mediatype identifier: application/vnd.waterlinked.receiver+json; view=default `object`: A receiver configuration (default view)
  * id **required** `integer`: Unique receiver identifier
  * x **required** `number`: Configured X position relative to master electronics (meter)
  * y **required** `number`: Configured Y position relative to master electronics (meter)
  * z **required** `number`: Configured Z position relative to master electronics (meter)

### WaterlinkedReceiverCollection
* Mediatype identifier: application/vnd.waterlinked.receiver+json; type=collection; view=default `array`: WaterlinkedReceiverCollection is the media type for an array of WaterlinkedReceiver (default view)
  * items [WaterlinkedReceiver](#waterlinkedreceiver)

### WaterlinkedStatus
* Mediatype identifier: application/vnd.waterlinked.status+json; view=default `object`: Status information (default view)
  * gps **required** `integer`: GPS lock status
  * imu **required** `integer`: IMU calibration status

### WaterlinkedTemperature
* Mediatype identifier: application/vnd.waterlinked.temperature+json; view=default `object`: Temperature information (default view)
  * board **required** `number`: Board temperature (C)

### WlExternalLocatorOrientation
* Mediatype identifier: application/vnd.wl.external.locator.orientation+json; view=default `object`: Set current compass heading of ROV/locator (default view)
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no orientation set

### WlGlobalPosition
* Mediatype identifier: application/vnd.wl.global.position+json; view=default `object`: Global locator position (default view)
  * lat **required** `number`: Current Latitude
  * lon **required** `number`: Current Longitude

### WlMasterPosition
* Mediatype identifier: application/vnd.wl.master.position+json; view=default `object`: GPS and IMU position (default view)
  * cog **required** `number`: Course over ground (degrees). -1 means no data.
  * hdop **required** `number`: Horizontal dilution of precision. -1 means no data.
  * lat **required** `number`: Current Latitude
  * lon **required** `number`: Current Longitude
  * numsats **required** `number`: Number of satellites. -1 means no data.
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no data.
  * sog **required** `number`: Speed over ground (km/h). -1 means no data.

### WupdaterApiversion
* Mediatype identifier: application/vnd.wupdater.apiversion; view=default `object`: Returns supported api versions (default view)
  * versions **required** `array`: Supported api versions
    * items `string`


