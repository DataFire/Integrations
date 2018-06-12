# @datafire/miataru

Client library for Miataru

## Installation and Usage
```bash
npm install --save @datafire/miataru
```
```js
let miataru = require('@datafire/miataru').create();

miataru.getLocation({
  "body": null
}).then(data => {
  console.log(data);
});
```

## Description

The Miataru API is very simple and straight forward. Generally you're posting (HTTP POST) a JSON formatted request to a service method locations and you get back a JSON formatted answer. Please take into consideration that this has the request-for-comment status and that it can change while there's work done on client and server applications. Versioning therefore is done by prepending the version number - /v1/ for version 1 - to the method call.

## Actions

### getLocation
To retrieve a specific devices latest known location the /GetLocation method is used. Please note that the MiataruConfig portion is optional. RequestMiataruDeviceID should be the ID of the device the request is sent from (or an identifier like an URL).


```js
miataru.getLocation({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [MiataruGetLocationRequest](#miatarugetlocationrequest)

#### Output
* output [MiataruGetLocationResponse](#miatarugetlocationresponse)

### getLocationGeoJSON
Retrieves a devices Location in GeoJSON format.


```js
miataru.getLocationGeoJSON({
  "deviceID": ""
}, context)
```

#### Input
* input `object`
  * deviceID **required** `string`: the unique device ID of the device the location is requested from

#### Output
* output [MiataruGetLocationGeoJSONResponse](#miatarugetlocationgeojsonresponse)

### getLocationHistory
Location History is stored on the server only if the client told the server to do so using the “EnableLocationHistory” setting in the Location Update requests. For transitions of enabling/disabling that functionality - Everytime a Location Update is received by the server with “EnableLocationHistory=false” the server removes all stored Location History till that point. There is a server-side setting that controls up to how many Location Updates the server is storing in the Location History before it removes the oldest one. To request the Location History of a particular device the client sends the following POST request to the GetLocationHistory service URL. Please note that the MiataruConfig portion is optional. RequestMiataruDeviceID should be the ID of the device the request is sent from (or an identifier like an URL).


```js
miataru.getLocationHistory({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [MiataruGetLocationHistoryRequest](#miatarugetlocationhistoryrequest)

#### Output
* output [MiataruGetLocationHistoryResponse](#miatarugetlocationhistoryresponse)

### getVisitorHistory
Visitor History is stored on the server with every request to the location or location history information of a device. There is a server-side setting that controls up to how many Visitors the server is storing in the Visitor History before it removes the oldest one. To request the Visitor History of a particular device the client sends the following POST request to the GetVisitorHistory service URL.


```js
miataru.getVisitorHistory({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [MiataruGetVisitorHistoryRequest](#miatarugetvisitorhistoryrequest)

#### Output
* output [MiataruGetVisitorHistoryResponse](#miatarugetvisitorhistoryresponse)

### updateLocation
This method is used to update the location of a device. The device does not need to be known already to the Miataru server but it rather creates a unique identifier for itself in the client application. This unique identifier, or device ID is then used to address this particular device.


```js
miataru.updateLocation({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [MiataruUpdateLocationRequest](#miataruupdatelocationrequest)

#### Output
* output [ACK](#ack)



## Definitions

### ACK
* ACK `object`
  * MiataruResponse **required** `string`
  * MiataruVerboseResponse **required** `string`

### MiataruGetLocationDevice
* MiataruGetLocationDevice `object`
  * Device **required** `string`: the unique device id of a device.

### MiataruGetLocationGeoJSONResponse
* MiataruGetLocationGeoJSONResponse `object`
  * geometry **required** `object`
    * coordinates **required** `array`
      * items `number`
    * type **required** `string`
  * properties **required** `object`
    * name **required** `string`
  * type **required** `string`

### MiataruGetLocationHistoryRequest
* MiataruGetLocationHistoryRequest `object`
  * MiataruConfig `object`: the configuration for this request. please note that it's optional.
    * RequestMiataruDeviceID **required** `string`: RequestMiataruDeviceID should be the ID of the device the request is sent from (or an identifier like an URL).
  * MiataruGetLocationHistory **required** `object`: one device id for which the location history should be retrieved.
    * Amount **required** `string`: the maximum number of location history entries that are requested.
    * Device **required** `string`: the device id of which the location history shall be requested

### MiataruGetLocationHistoryResponse
* MiataruGetLocationHistoryResponse `object`
  * MiataruLocation **required** `array`: holds all location information of a given device or is an empty array if device not found or no location information is stored.
    * items [MiataruLocation](#miatarulocation)
  * MiataruServerConfig **required** `object`: holds information about the basic configuration settings on server side.
    * AvailableDeviceLocationUpdates **required** `string`: the number of locations stored for this particular device
    * MaximumNumberOfLocationUpdates **required** `string`: the amount of locations the server is storing per device at maximum before it will remove the oldest one (FiFo)

### MiataruGetLocationRequest
* MiataruGetLocationRequest `object`
  * MiataruConfig `object`: the configuration for this request. please note that it's optional.
    * RequestMiataruDeviceID **required** `string`: RequestMiataruDeviceID should be the ID of the device the request is sent from (or an identifier like an URL).
  * MiataruGetLocation **required** `array`: one or more devices in an array for which the location should be retrieved.
    * items [MiataruGetLocationDevice](#miatarugetlocationdevice)

### MiataruGetLocationResponse
* MiataruGetLocationResponse `object`
  * MiataruLocation **required** `array`
    * items [MiataruLocation](#miatarulocation)

### MiataruGetVisitorHistoryRequest
* MiataruGetVisitorHistoryRequest `object`
  * MiataruGetVisitorHistory **required** `object`
    * Amount **required** `string`: the maximum number of visitor history entries to be retrieved
    * Device **required** `string`: the device id of which the visitor history is requested

### MiataruGetVisitorHistoryResponse
* MiataruGetVisitorHistoryResponse `object`
  * MiataruServerConfig **required** `object`: holds information about the server side settings of the visitor history and about the available device related visitor history.
    * AvailableVisitorHistory **required** `string`: the number of available visitor history entries for this device. If the client requested more Visitor Updates than there are available the server will return those available.
    * MaximumNumberOfVisitorHistory **required** `string`: a server-side setting that controls up to how many Visitors the server is storing in the Visitor History before it removes the oldest one.
  * MiataruVisitors **required** `array`: The server will answer back with an Array of MiataruVisitors if there are Visitors, or an empty array when there are none.
    * items [MiataruVisitors](#miataruvisitors)

### MiataruLocation
* MiataruLocation `object`
  * Device **required** `string`: the unique id of this device. This needs to be unique as it is the only piece of information directly pointing towards this one device. Generating a GUID per device is recommended.
  * HorizontalAccuracy **required** `string`: the accuracy of this location update in meters
  * Latitude **required** `string`: latitude of the position that is reported
  * Longitude **required** `string`: longitude of the position that is reported
  * Timestamp **required** `string`: the javascript timestamp of this location update

### MiataruUpdateLocationRequest
* MiataruUpdateLocationRequest `object`
  * MiataruConfig **required** `object`: the configuration for this request.
    * EnableLocationHistory **required** `string`: If the client tells the server to store a location history the server automatically disables the pre-configured data time-out behavior that removes location data after a given amount of time. Nevertheless the user is limited to the server-side pre-configured amount of location history entries. This is either True or False.
    * LocationDataRetentionTime **required** `string`: The LocationDataRetentionTime is the amount of minutes the server will keep that Location Data before it is removed/deleted automatically.
  * MiataruLocation **required** `array`
    * items [MiataruLocation](#miatarulocation)

### MiataruVisitors
* MiataruVisitors `object`
  * DeviceID **required** `string`: the device id of the visiting device. If this is an empty string the deviceID is unknown/was not reported.
  * TimeStamp **required** `string`: the javascript timestamp of the visit


