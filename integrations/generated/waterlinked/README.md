# @datafire/waterlinked

Client library for The Water Linked Underwater GPS API

## Installation and Usage
```bash
npm install --save @datafire/waterlinked
```
```js
let waterlinked = require('@datafire/waterlinked').create();

.then(data => {
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

### api.v1.about.factoryreset.post
Reset all settings on master electronics


```js
waterlinked.api.v1.about.factoryreset.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

### api.v1.about.led.get
Flash LED1 on master electronics


```js
waterlinked.api.v1.about.led.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

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

### api.v1.config.antenna.get
Get Antenna configuration


```js
waterlinked.api.v1.config.antenna.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedAntenna_config](#waterlinkedantenna_config)

### api.v1.config.antenna.put
Modify Antenna configuration


```js
waterlinked.api.v1.config.antenna.put({
  "payload": {
    "x": 0,
    "y": 0,
    "depth": 0,
    "antenna_rotation": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [ModifyAntennaConfigConfigPayload](#modifyantennaconfigconfigpayload)

#### Output
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

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
    "channel": 0,
    "locator_type": "",
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
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

### api.v1.config.ip.get
Get IP configuration


```js
waterlinked.api.v1.config.ip.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedIp_config](#waterlinkedip_config)

### api.v1.config.ip.put
Modify IP configuration


```js
waterlinked.api.v1.config.ip.put({
  "payload": {
    "address": "",
    "gateway": "",
    "prefix": 0,
    "dns": "",
    "dhcp": true
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [ModifyIPConfigPayload](#modifyipconfigpayload)

#### Output
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

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

### api.v1.config.wifi.get
Get WIFI configuration


```js
waterlinked.api.v1.config.wifi.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedWifi_config](#waterlinkedwifi_config)

### api.v1.config.wifi.put
Modify WIFI configuration


```js
waterlinked.api.v1.config.wifi.put({
  "payload": {
    "ssid": "",
    "password": "",
    "mode": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [ModifyWIFIConfigPayload](#modifywificonfigpayload)

#### Output
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

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
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

### api.v1.external.imu.get
Get rotation and acceleration of vehicle Locator is mounted on which was previously set


```js
waterlinked.api.v1.external.imu.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlExternalVehicleImu](#wlexternalvehicleimu)

### api.v1.external.imu.put
Set rotation and acceleration of vehicle Locator is mounted on. This is used to improve positioning of vehicle


```js
waterlinked.api.v1.external.imu.put({
  "payload": {
    "pitch": 0,
    "roll": 0,
    "yaw": 0,
    "x": 0,
    "y": 0,
    "z": 0
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [SetVehicleIMUExternalPayload](#setvehicleimuexternalpayload)

#### Output
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

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
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

### api.v1.external.orientation.get
Get orientation of Vehicle/ROV/Locator set by SetOrientation


```js
waterlinked.api.v1.external.orientation.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlExternalLocatorOrientation](#wlexternallocatororientation)

### api.v1.external.orientation.put
Set orientation/compass heading of Vehicle/ROV/Locator. This is used only for visualization in GUI


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
* output [WaterlinkedOperation_response](#waterlinkedoperation_response)

### api.v1.imu.calibrate.get
Get IMU status and orientation


```js
waterlinked.api.v1.imu.calibrate.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedImu](#waterlinkedimu)

### api.v1.imu.calibrate.post
Start calibration


```js
waterlinked.api.v1.imu.calibrate.post({
  "payload": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [CalibrateImuPayload](#calibrateimupayload)

#### Output
*Output schema unknown*

### api.v1.imu.resetgyros.post
Reset Gyro


```js
waterlinked.api.v1.imu.resetgyros.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### api.v1.imu.setnorth.post
Set north point


```js
waterlinked.api.v1.imu.setnorth.post({
  "payload": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [SetNorthImuPayload](#setnorthimupayload)

#### Output
*Output schema unknown*

### api.v1.poi.get
List all points of interest


```js
waterlinked.api.v1.poi.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WaterlinkedPoiCollection](#waterlinkedpoicollection)

### api.v1.poi.post
Create a new POI


```js
waterlinked.api.v1.poi.post({
  "payload": {
    "name": "",
    "lat": 0,
    "lng": 0,
    "depth": 0,
    "icon": "",
    "visible": true
  }
}, context)
```

#### Input
* input `object`
  * payload **required** [CreatePoiPayload](#createpoipayload)

#### Output
*Output schema unknown*

### api.v1.poi.ID.delete
Delete poi


```js
waterlinked.api.v1.poi.ID.delete({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
*Output schema unknown*

### api.v1.poi.ID.get
Get a POI


```js
waterlinked.api.v1.poi.ID.get({
  "ID": 0
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`

#### Output
* output [WaterlinkedPoi](#waterlinkedpoi)

### api.v1.poi.ID.patch
Update poi


```js
waterlinked.api.v1.poi.ID.patch({
  "ID": 0,
  "payload": {
    "name": "",
    "lat": 0,
    "lng": 0,
    "depth": 0,
    "icon": "",
    "visible": true
  }
}, context)
```

#### Input
* input `object`
  * ID **required** `integer`
  * payload **required** [UpdatePoiPayload](#updatepoipayload)

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
* output [WlSatellitePosition](#wlsatelliteposition)

### api.v1.position.master.get
Get current global position of master electronics. Expected update frequency: 1 Hz


```js
waterlinked.api.v1.position.master.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlSatellitePosition](#wlsatelliteposition)

### api.v1.status_report.get
Get list of status reports from all status groups


```js
waterlinked.api.v1.status_report.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlStatusGroupCollection](#wlstatusgroupcollection)

### api.v1.warnings.get
[Deprecated] Get current list of messages


```js
waterlinked.api.v1.warnings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [WlWarningCollection](#wlwarningcollection)



## Definitions

### CalibrateImuPayload
* CalibrateImuPayload `object`: IMU calibration action
  * action **required** `string` (values: start, abort): IMU Calibration Action to use

### CreatePoiPayload
* CreatePoiPayload `object`: A list of all POI
  * depth **required** `number`: Depth of POI
  * icon **required** `string`: Icon of POI
  * id `integer`: Unique POI id
  * lat **required** `number`: Latitude of POI
  * lng **required** `number`: Longitude of POI
  * name **required** `string`: Name of POI
  * visible **required** `boolean`: Visibility of POI

### ModifyAntennaConfigConfigPayload
* ModifyAntennaConfigConfigPayload `object`: Configuration parameters for antenna set up
  * antenna_rotation **required** `integer`: Configured rotation of antenna relative to forward arrow on topside housing. Clockwise is positive direction (degrees)
  * depth **required** `number`: Configured depth relative to surface (meter)
  * x **required** `number`: Configured f position relative to master electronics (meter)
  * y **required** `number`: Configured Y position relative to master electronics (meter)

### ModifyConfigPayload
* ModifyConfigPayload `object`: Configuration parameters
  * antenna_enabled `boolean`: Enable use of antenna
  * channel **required** `integer`: Channel to use
  * compass **required** `string` (values: onboard, static, external): Compass provider setting
  * environment `string` (values: reflective, openwater): [Deprecated] Environment setting
  * external_pps_enabled `boolean`: Enable external PPS input to master
  * gps **required** `string` (values: onboard, static, external): GPS provider setting
  * imu_vehicle_enabled `boolean`: [Deprecated] Enable IMU input from vehicle
  * locator_type **required** `string` (values: d1, a1, s2, p2, u1): Locator type in use
  * range_max_x `number`: [Deprecated] Max range (meters)
  * range_max_y `number`: [Deprecated] Max range (meters)
  * range_max_z `number`: [Deprecated] Max range (meters)
  * range_min_x `number`: [Deprecated] Max range (meters)
  * range_min_y `number`: [Deprecated] Max range (meters)
  * search_direction `number`: Direction of circular search area section
  * search_radius `number`: Radius of circular search area
  * search_sector `number`: Sector angle of circular search area
  * speed_of_sound `integer`: Speed of sound use by the system
  * static_lat **required** `number`: Latitude to use in static mode
  * static_lon **required** `number`: Longitude to use in static mode
  * static_orientation **required** `number`: Orientation/compass reading to use in static mode (degrees)

### ModifyIPConfigPayload
* ModifyIPConfigPayload `object`: Configuration parameters
  * address **required** `string`: IP address to use
  * dhcp **required** `boolean`: DHCP to use
  * dns **required** `string`: DNS to use
  * gateway **required** `string`: Gateway to use
  * prefix **required** `integer`: Prefix to use

### ModifyReceiverConfigPayload
* ModifyReceiverConfigPayload `object`: A receiver configuration
  * id **required** `integer`: Unique receiver identifier
  * x **required** `number`: Configured X position relative to master electronics (meter)
  * y **required** `number`: Configured Y position relative to master electronics (meter)
  * z **required** `number`: Configured Z position relative to master electronics (meter)

### ModifyWIFIConfigPayload
* ModifyWIFIConfigPayload `object`: Configuration parameters
  * mode **required** `string` (values: ap, client): Which mode should the WiFi be in?
  * password **required** `string`: Password to use for WiFi in Client mode
  * ssid **required** `string`: WIFI SSID to use for WiFi in Client mode

### SetDepthExternalPayload
* SetDepthExternalPayload `object`: Current locator depth and temperature
  * depth **required** `number`: Curent depth (meter)
  * temp **required** `number`: Current water temperature (C)

### SetMasterExternalPayload
* SetMasterExternalPayload `object`: Global master position from external source
  * cog `number`: Course over ground (degrees). -1 means no data.
  * fix_quality `number`: Fix quality. 0 if no data.
  * hdop `number`: Horizontal dilution of precision. -1 means no data.
  * lat **required** `number`: Current Latitude
  * lon **required** `number`: Current Longitude
  * numsats `number`: Number of satellites. -1 means no data.
  * orientation **required** `number`: Current orientation/compass heading (degrees)
  * sog `number`: Speed over ground (km/h). -1 means no data.

### SetNorthImuPayload
* SetNorthImuPayload `object`: IMU set north
  * action **required** `string` (values: set, clear): IMU Set north action to use

### SetOrientationExternalPayload
* SetOrientationExternalPayload `object`: Set current compass heading of ROV/locator
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no orientation set

### SetVehicleIMUExternalPayload
* SetVehicleIMUExternalPayload `object`: Set current rotation and acceleration of vehicle
  * pitch **required** `number`: Current pitch of vehicle(degrees).
  * roll **required** `number`: Current roll of vehicle(degrees).
  * x **required** `number`: Current acceleration in x-axis of vehicle.
  * y **required** `number`: Current acceleration in y-axis of vehicle.
  * yaw **required** `number`: Current yaw of vehicle(degrees).
  * z **required** `number`: Current acceleration in z-axis of vehicle.

### UpdatePoiPayload
* UpdatePoiPayload `object`: A list of all POI
  * depth **required** `number`: Depth of POI
  * icon **required** `string`: Icon of POI
  * id `integer`: Unique POI id
  * lat **required** `number`: Latitude of POI
  * lng **required** `number`: Longitude of POI
  * name **required** `string`: Name of POI
  * visible **required** `boolean`: Visibility of POI

### WaterlinkedAbout
* Mediatype identifier: application/vnd.waterlinked.about+json; view=default `object`: About information (default view)
  * chipid **required** `string`: Chip identifier
  * variant **required** `string`: Software release variant
  * version **required** `string`: Detailed Web Server version string
  * version_short **required** `string`: Short Web Server version string

### WaterlinkedAccousticPosition
* Mediatype identifier: application/vnd.waterlinked.accoustic.position+json; view=default `object`: Current relative Locator position (default view)
  * position_valid **required** `boolean`: Is current position valid or not
  * receiver_distance **required** `array`: Measured distance to the locator for each receiver
    * items `number`
  * receiver_nsd **required** `array`: Measured NSD for each receiver
    * items `number`
  * receiver_rssi **required** `array`: Measured RSSI for each receiver
    * items `number`
  * receiver_valid **required** `array`: Is signal valid or not for each receiver
    * items `number`
  * std **required** `number`: Current acoustic position accuracy (meter)
  * x **required** `number`: Current acoustic x position relative to master electronics (meter)
  * y **required** `number`: Current acoustic y position relative to master electronics (meter)
  * z **required** `number`: Current acoustic z position (depth) relative to master electronics (meter)

### WaterlinkedAntenna_config
* Mediatype identifier: application/vnd.waterlinked.antenna_config+json; view=default `object`: Configuration parameters for antenna set up (default view)
  * antenna_rotation **required** `integer`: Configured rotation of antenna relative to forward arrow on topside housing. Clockwise is positive direction (degrees)
  * depth **required** `number`: Configured depth relative to surface (meter)
  * x **required** `number`: Configured f position relative to master electronics (meter)
  * y **required** `number`: Configured Y position relative to master electronics (meter)

### WaterlinkedConfiguration
* Mediatype identifier: application/vnd.waterlinked.configuration+json; view=default `object`: Configuration parameters (default view)
  * antenna_enabled `boolean`: Enable use of antenna
  * channel **required** `integer`: Channel to use
  * compass **required** `string` (values: onboard, static, external): Compass provider setting
  * environment `string` (values: reflective, openwater): [Deprecated] Environment setting
  * external_pps_enabled `boolean`: Enable external PPS input to master
  * gps **required** `string` (values: onboard, static, external): GPS provider setting
  * imu_vehicle_enabled `boolean`: [Deprecated] Enable IMU input from vehicle
  * locator_type **required** `string` (values: d1, a1, s2, p2, u1): Locator type in use
  * range_max_x `number`: [Deprecated] Max range (meters)
  * range_max_y `number`: [Deprecated] Max range (meters)
  * range_max_z `number`: [Deprecated] Max range (meters)
  * range_min_x `number`: [Deprecated] Max range (meters)
  * range_min_y `number`: [Deprecated] Max range (meters)
  * search_direction `number`: Direction of circular search area section
  * search_radius `number`: Radius of circular search area
  * search_sector `number`: Sector angle of circular search area
  * speed_of_sound `integer`: Speed of sound use by the system
  * static_lat **required** `number`: Latitude to use in static mode
  * static_lon **required** `number`: Longitude to use in static mode
  * static_orientation **required** `number`: Orientation/compass reading to use in static mode (degrees)

### WaterlinkedImu
* Mediatype identifier: application/vnd.waterlinked.imu+json; view=default `object`: IMU status and orientation information (default view)
  * pitch **required** `number`: Pitch
  * progress **required** `integer`: Calibration progress
  * roll **required** `number`: Roll
  * state **required** `integer`: IMU calibration state. 0=running, 1=calibrating
  * yaw **required** `number`: Yaw

### WaterlinkedIp_config
* Mediatype identifier: application/vnd.waterlinked.ip_config+json; view=default `object`: Configuration parameters (default view)
  * address **required** `string`: IP address to use
  * dhcp **required** `boolean`: DHCP to use
  * dns **required** `string`: DNS to use
  * gateway **required** `string`: Gateway to use
  * prefix **required** `integer`: Prefix to use

### WaterlinkedOperation_response
* Mediatype identifier: application/vnd.waterlinked.operation_response+json; view=default `object`: Response from server on operations performed (default view)
  * error `string`: Error if it occurs
  * success **required** `boolean`: Status of operation

### WaterlinkedPoi
* Mediatype identifier: application/vnd.waterlinked.poi+json; view=default `object`: A list of all POI (default view)
  * depth **required** `number`: Depth of POI
  * icon **required** `string`: Icon of POI
  * id `integer`: Unique POI id
  * lat **required** `number`: Latitude of POI
  * lng **required** `number`: Longitude of POI
  * name **required** `string`: Name of POI
  * visible **required** `boolean`: Visibility of POI

### WaterlinkedPoiCollection
* Mediatype identifier: application/vnd.waterlinked.poi+json; type=collection; view=default `array`: WaterlinkedPoiCollection is the media type for an array of WaterlinkedPoi (default view)
  * items [WaterlinkedPoi](#waterlinkedpoi)

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
  * battery **required** `integer`: Locator battery level in percent. -1 if not available or applicable
  * gps **required** `integer`: GPS lock status
  * imu **required** `integer`: IMU calibration status

### WaterlinkedTemperature
* Mediatype identifier: application/vnd.waterlinked.temperature+json; view=default `object`: Temperature information (default view)
  * board **required** `number`: Board temperature (C)
  * water **required** `number`: Water temperature (C)

### WaterlinkedWifi_config
* Mediatype identifier: application/vnd.waterlinked.wifi_config+json; view=default `object`: Configuration parameters (default view)
  * mode **required** `string` (values: ap, client): Which mode should the WiFi be in?
  * password **required** `string`: Password to use for WiFi in Client mode
  * ssid **required** `string`: WIFI SSID to use for WiFi in Client mode

### WlExternalLocatorOrientation
* Mediatype identifier: application/vnd.wl.external.locator.orientation+json; view=default `object`: Set current compass heading of ROV/locator (default view)
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no orientation set

### WlExternalVehicleImu
* Mediatype identifier: application/vnd.wl.external.vehicle.imu+json; view=default `object`: Set current rotation and acceleration of vehicle (default view)
  * pitch **required** `number`: Current pitch of vehicle(degrees).
  * roll **required** `number`: Current roll of vehicle(degrees).
  * x **required** `number`: Current acceleration in x-axis of vehicle.
  * y **required** `number`: Current acceleration in y-axis of vehicle.
  * yaw **required** `number`: Current yaw of vehicle(degrees).
  * z **required** `number`: Current acceleration in z-axis of vehicle.

### WlSatellitePosition
* Mediatype identifier: application/vnd.wl.satellite.position+json; view=default `object`: GPS and IMU position (default view)
  * cog **required** `number`: Course over ground (degrees). -1 means no data.
  * fix_quality **required** `number`: Fix quality. 0 if no data.
  * hdop **required** `number`: Horizontal dilution of precision. -1 means no data.
  * lat **required** `number`: Current Latitude
  * lon **required** `number`: Current Longitude
  * numsats **required** `number`: Number of satellites. -1 means no data.
  * orientation **required** `number`: Current orientation/compass heading (degrees). -1 means no data.
  * sog **required** `number`: Speed over ground (km/h). -1 means no data.

### WlStatusGroup
* Mediatype identifier: application/vnd.wl.status.group+json; view=default `object`: Current status from one specific status group (default view)
  * error_ids **required** `array`: Identifiers for warnings/errors
    * items `string`
  * message **required** `string`: Message
  * status **required** `string` (values: ok, warning, error): Status
  * status_group **required** `string`: Status group friendly name
  * status_group_id **required** `string`: Status group identifier

### WlStatusGroupCollection
* Mediatype identifier: application/vnd.wl.status.group+json; type=collection; view=default `array`: WlStatusGroupCollection is the media type for an array of WlStatusGroup (default view)
  * items [WlStatusGroup](#wlstatusgroup)

### WlWarning
* Mediatype identifier: application/vnd.wl.warning+json; view=default `object`: Warning message (default view)
  * id **required** `string`: Identifier
  * message **required** `string`: Message
  * severity **required** `string`: Severity

### WlWarningCollection
* Mediatype identifier: application/vnd.wl.warning+json; type=collection; view=default `array`: WlWarningCollection is the media type for an array of WlWarning (default view)
  * items [WlWarning](#wlwarning)

### WupdaterApiversion
* Mediatype identifier: application/vnd.wupdater.apiversion; view=default `object`: Returns supported api versions (default view)
  * versions **required** `array`: Supported api versions
    * items `string`

### error
* Mediatype identifier: application/vnd.goa.error; view=default `object`: Error response media type (default view)
  * code `string`: an application-specific error code, expressed as a string value.
  * detail `string`: a human-readable explanation specific to this occurrence of the problem.
  * id `string`: a unique identifier for this particular occurrence of the problem.
  * meta `object`: a meta object containing non-standard meta-information about the error.
  * status `string`: the HTTP status code applicable to this problem, expressed as a string value.


