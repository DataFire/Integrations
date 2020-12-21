# @datafire/here_tracking

Client library for HERE Tracking

## Installation and Usage
```bash
npm install --save @datafire/here_tracking
```
```js
let here_tracking = require('@datafire/here_tracking').create({
  authBearer: "",
  deviceToken: "",
  signedRequest: ""
});

.then(data => {
  console.log(data);
});
```

## Description

HERE Tracking is a cloud product designed to address location tracking problems for a wide range of Location IoT industry verticals.

HERE Tracking exposes a set of REST APIs and client libraries to enable location tracking and geo-fencing for a variety of device form-factors including small-footprint (small memory and processing power) devices. HERE Tracking also includes end-user applications on mobile and web to be used as reference apps to demonstrate the product capabilities.

## Actions

### device_associations.v2.health.get
Gets service health


```js
here_tracking.device_associations.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### device_associations.v2.version.get
Gets service version


```js
here_tracking.device_associations.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### device_associations.v2.trackingId.geofences.get
Returns all fences tracking id has been associated with


```js
here_tracking.device_associations.v2.trackingId.geofences.get({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.

#### Output
* output `object`: Response body contains an array of geofence objects, count indicating the number of returned geofences, and pageToken if available. If no fences are found, an object with empty data array is returned
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * geofence **required** [d4975492c92aa17c81b3dc25375e2436a957120b0e33c1ed44a316ce21d8ef08](#d4975492c92aa17c81b3dc25375e2436a957120b0e33c1ed44a316ce21d8ef08)
      * id **required** `string`: Must be a valid UUIDv4.

### geofence_associations.v2.health.get
Gets service health


```js
here_tracking.geofence_associations.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### geofence_associations.v2.version.get
Gets service version


```js
here_tracking.geofence_associations.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### geofence_associations.v2.geofenceId.devices.get
This returns a list of devices that are associated with this geofence.

Note: A device appearing in this list does not mean the device is inside the geofence.



```js
here_tracking.geofence_associations.v2.geofenceId.devices.get({
  "geofenceId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: Geofence ID
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.

#### Output
* output `object`: Response body contains an array of trackingIds,
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * shadow `object`: The data that Shadows persists for each device.
        * desired `object`: The currently desired state of the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        * reported `object`: The last known state reported by the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * position `object`: The reported or determined location of the device
          * system `object`: Values within the device configuration that are used by HERE Tracking for
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * trackingId `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### geofence_associations.v2.geofenceId.trackingId.delete
Notification will no longer be generated when the device enters or exits this geofence.


```js
here_tracking.geofence_associations.v2.geofenceId.trackingId.delete({
  "geofenceId": "",
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: Geofence ID
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
*Output schema unknown*

### geofence_associations.v2.geofenceId.trackingId.put
Notifications will be generated when the device enters or exits this geofence


```js
here_tracking.geofence_associations.v2.geofenceId.trackingId.put({
  "geofenceId": "",
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: Geofence ID
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
*Output schema unknown*

### geofences.v2.delete
Deletes all geofences created by the provided user account.

As an extra safety measure, you must also supply the header `x-confirm`
with the value `true`. If this header is not explicitly specified on a
**Delete All** request, the request fails.



```js
here_tracking.geofences.v2.delete({
  "x-confirm": ""
}, context)
```

#### Input
* input `object`
  * x-confirm **required** `string` (values: true): A safety measure that prevents you from accidentally deleting data.
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
*Output schema unknown*

### geofences.v2.get
Provides all geofence definitions in a paginated JSON oject.


```js
here_tracking.geofences.v2.get({}, context)
```

#### Input
* input `object`
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output `object`: Response body contains an array of geofence objects, count indicating the number of returned geofences, and pageToken if available. If no fences are found, an object with empty data array is returned
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * geofence **required** [geofence](#geofence)
      * id **required** `string`: Must be a valid UUIDv4.

### geofences.v2.post
You can specify a geofence as a circle or as a polygon. You can also assign
a name and a description to each geofence to help identify them. If no name
is assigned, the geofence is named using a unique ID.

Circle
---

Specify the coordinates of the center point of the circle and a radius in
meters.

```json
    {
        "name": "Home"
        "definition": {
            "center": {
                "lat": 52.5308398,
                "lng": 13.38490035
            },
            "radius": 100
        },
        "description": "Small area around my house."
    }
```

Polygon
---

Specify an array of points. A minimum of three points are required.

*NOTE: If the points do not describe a closed polygon, the polygon is
automatically closed between the last and first points.*

```json
    {
        "name": "Work"
        "definition": {
            "points": [{
                "lat": 52.5308398,
                "lng": 13.38490035
            }, {
                "lat": 52.530443,
                "lng": 13.38482003
            }, {
                "lat": 52.5308298,
                "lng": 13.38492235
            }]
        },
        "description": "The area around work."
    }
```

Successful requests have the HTTP status 201 and the response body provides
the ID of the created geofence.



```js
here_tracking.geofences.v2.post({}, context)
```

#### Input
* input `object`
  * body [geofence](#geofence)
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output `object`
  * id **required** `string`: Must be a valid UUIDv4.

### geofences.v2.health.get
Gets service health


```js
here_tracking.geofences.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### geofences.v2.version.get
Gets service version


```js
here_tracking.geofences.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### geofences.v2.geofenceId.delete
Deletes a single geofence definition based on the provided geofence ID.



```js
here_tracking.geofences.v2.geofenceId.delete({
  "geofenceId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: ID of the geofence

#### Output
*Output schema unknown*

### geofences.v2.geofenceId.get
Provides the details of a single geofence definition such as the shape,
name and description.



```js
here_tracking.geofences.v2.geofenceId.get({
  "geofenceId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: ID of the geofence

#### Output
* output `object`: Response body contains a single geofence object
  * geofence **required** [geofence](#geofence)
  * id **required** `string`: Must be a valid UUIDv4.

### geofences.v2.geofenceId.put
Update the geofence shape, name or description. After a successful update,
the response provides updated geofence details.



```js
here_tracking.geofences.v2.geofenceId.put({
  "geofenceId": ""
}, context)
```

#### Input
* input `object`
  * body [geofenceUpdate](#geofenceupdate)
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * geofenceId **required** `string`: ID of the geofence

#### Output
* output `object`: Response body contains an array of geofence objects, count indicating the number of returned geofences, and pageToken if available. If no fences are found, an object with empty data array is returned
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * geofence **required** [geofence](#geofence)
      * id **required** `string`: Must be a valid UUIDv4.

### notifications.v2.health.get
Gets service health


```js
here_tracking.notifications.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### notifications.v2.register.post
Registers users for notifications when a device transitions into or out of
a geofence.

The input data can be only the following:
 * A URL to receive webhook notifications



```js
here_tracking.notifications.v2.register.post({}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * body `object`
    * type `string` (values: webhook): The type of notification channel to be created
    * url `string`: Required for type webhook. A URL for webhook notifications capable of receiving POST requests.

#### Output
* output `object`
  * message `string` (values: created, updated, deleted)
  * status `string` (values: ok)

### notifications.v2.registration.channelName.delete
Unregister from notifications for the specified channel.

The only channel name currently supported is 'webhook' for webhook notifications



```js
here_tracking.notifications.v2.registration.channelName.delete({
  "channelName": ""
}, context)
```

#### Input
* input `object`
  * channelName **required** `string`: The name of the notification channel from which to unregister.

#### Output
* output `object`
  * message `string` (values: created, updated, deleted)
  * status `string` (values: ok)

### notifications.v2.registrations.get
Gets a list of all previously registered notification channels.

The responded channel name(s) will be 'webhook' if a webhook URL has been registered



```js
here_tracking.notifications.v2.registrations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `string`

### notifications.v2.version.get
Gets service version


```js
here_tracking.notifications.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### registry.v2.devices.deviceId.get
When provided with a deviceId, this endpoint returns the tracking ID for a previously claimed device.



```js
here_tracking.registry.v2.devices.deviceId.get({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * deviceId **required** `string`: The device ID provided when provisioning a device

#### Output
* output `object`
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### registry.v2.devices.deviceId.put
Claim a device to a user. Before a device is claimed, it cannot complete
login and any data sent to the ingestion endpoint will be ignored. Once a
device is claimed, its data is stored and available to its owner.

When a device is claimed, it will be assigned a trackingID. This is the
identifier in HERE Tracking that the data is associated with. Having a
separate deviceId and trackingId means that devices can have their ownership
transferred without having to create and install a new deviceId and
deviceSecret.



```js
here_tracking.registry.v2.devices.deviceId.put({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * deviceId **required** `string`: The device ID provided when provisioning a device

#### Output
* output `object`
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### registry.v2.health.get
Gets service health


```js
here_tracking.registry.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### registry.v2.version.get
Gets service version


```js
here_tracking.registry.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### registry.v2.appId.devices.post
Starts a batch job to create credentials for the number of devices specified in the body.



```js
here_tracking.registry.v2.appId.devices.post({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * appId **required** `string`
  * body `object`
    * count **required** `integer`: Number of device credentials requested

#### Output
* output `object`
  * jobId **required** `string`: ID identifying this job. Retain for future use. Valid for 24 hours after {now}.

### registry.v2.appId.licenseCount.get
Retrieves the count of already created licenses



```js
here_tracking.registry.v2.appId.licenseCount.get({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * appId **required** `string`

#### Output
* output `object`
  * count **required** `number`: The count of created licenses for given appId
  * updatedAt **required** `string`: last update to the count

### registry.v2.appId.one_device.post
The credentials will be created. The ID and secret will instantly be returned in the body.

If autoclaim=true, the created device is immediately bound to the requesting account.



```js
here_tracking.registry.v2.appId.one_device.post({
  "appId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * appId **required** `string`
  * autoclaim `boolean`: If set to `true`, the license is created and immediately claimed by the same user.

#### Output
* output `object`: A JSON object containing the newly created device credentials
  * deviceId **required** `string`: Must be a valid UUIDv4.
  * deviceSecret **required** `string`: The newly created device secret. Valid credentials are the combination of a secret and ID
  * trackingId `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### registry.v2.jobId.results.get
This returns the results of the given batch job if the job has completed.



```js
here_tracking.registry.v2.jobId.results.get({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * jobId **required** `string`: UUID v.4.0
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.

#### Output
* output
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: A JSON object containing the newly created device credentials
      * deviceId **required** `string`: Must be a valid UUIDv4.
      * deviceSecret **required** `string`: The newly created device secret. Valid credentials are the combination of a secret and ID

### registry.v2.jobId.status.get
Use this endpoint to check the progress of a previously created
credentials request.



```js
here_tracking.registry.v2.jobId.status.get({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * jobId **required** `string`: UUID v.4.0

#### Output
* output `object`
  * percent **required** `number`: The percentage of the job that was completed at the time of the request.
  * status **required** `string` (values: started, complete): The status of the requested job. May be "started" or "complete". When status is "complete", results may be downloaded.

### registry.v2.trackingId.delete
Removes the association between the user and the device. The device is no longer able to generate data for the user and can now be registered by another user (or the same user again).


```js
here_tracking.registry.v2.trackingId.delete({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
*Output schema unknown*

### registry.v2.trackingId.get
When provided with a trackingId, this endpoint returns the deviceId for a previously claimed device.



```js
here_tracking.registry.v2.trackingId.get({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
* output `object`
  * deviceId `string`: Must be a valid UUIDv4.

### shadows.v2.batch.post
Provides shadow objects for multiple devices. You can get shadows for a
maximum of 20 devices per request.



```js
here_tracking.shadows.v2.batch.post({}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * body `array`
    * items `string`: The HERE Account ID of a user.

#### Output
* output `array`
  * items `object`
    * body `object`: The data that Shadows persists for each device.
      * desired `object`: The currently desired state of the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
          * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * reported `object`: The last known state reported by the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * position `object`: The reported or determined location of the device
          * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
          * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
          * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
          * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
          * floor `object`: The building where the measurements were taken
          * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
          * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
          * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
          * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
          * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
          * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
          * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
        * system `object`: Values within the device configuration that are used by HERE Tracking for
          * client `object`: Information about the client Device.
          * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
          * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
    * statusCode `integer`

### shadows.v2.health.get
Gets service health


```js
here_tracking.shadows.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### shadows.v2.version.get
Gets service version


```js
here_tracking.shadows.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### shadows.v2.trackingId.delete
Deletes the information inside a device's shadow object. The shadow object
itself is retained, but all values for `desired` and `reported`
properties are cleared.



```js
here_tracking.shadows.v2.trackingId.delete({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
*Output schema unknown*

### shadows.v2.trackingId.get
Provides a shadow object that contains `reported` and `desired` properties
for a device configuration. When setting the header parameters, make sure
that you provide a HERE Account token that allows read access.



```js
here_tracking.shadows.v2.trackingId.get({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
* output `object`: The data that Shadows persists for each device.
  * desired `object`: The currently desired state of the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * system `object`: Contains values for the device configuration. HERE Tracking uses these values
      * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
        * distanceM `number`: The device should send an update if it moves more than this distance in meters
        * sampleMs `number`: The rate at which to sample signals in milliseconds
        * sendMs `number`: The rate at which to send sample results in milliseconds
      * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * reported `object`: The last known state reported by the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### shadows.v2.trackingId.put
Updates the device shadow that is stored in HERE Tracking.

The device shadow contains 'reported' and 'desired' configuration states
for a device.

Request
---

The body is a shadow object with either an update to the `desired` or
`reported` configuration state.

You cannot use the same request to update the `desired` and `reported`
properties simultaneously. Instead, use separate requests for each type of
configuration state.

Response
---

The response body is a shadow object that shows the difference between the
`reported` and the `desired` states. It contains properties that don't
match across the two configurations.

The response example shows the response to the previous request example
where the `desired` state was updated.

If all `reported` and `desired` properties match, the response object
contains only the trackingId and timestamp properties.



```js
here_tracking.shadows.v2.trackingId.put({
  "content-length": 0,
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * content-length **required** `number`: The size of the shadow in bytes. The size is validated against the maximum
  * body `object`: A shadow object with either desired or reported state update.
    * desired `object`: The desired state of the device.
      * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
      * system `object`: Contains values for the device configuration. HERE Tracking uses these values
        * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
          * distanceM `number`: The device should send an update if it moves more than this distance in meters
          * sampleMs `number`: The rate at which to sample signals in milliseconds
          * sendMs `number`: The rate at which to send sample results in milliseconds
    * reported `object`: The last known state reported by the device.
      * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
      * position `object`: The reported or determined location of the device
        * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
        * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
        * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
        * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
        * floor `object`: The building where the measurements were taken
          * id **required** `string`: The building id
          * level **required** `number`: The floor in the building in integer format
          * name **required** `string`: The building name
        * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
        * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
        * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
        * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
        * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
        * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
        * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
      * system `object`: Values within the device configuration that are used by HERE Tracking for
        * client `object`: Information about the client Device.
          * firmware `string`: Device firmware version information
          * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * manufacturer `string`: Manufacturer of the device (hardware)
          * model `string`: Model of the device (hardware)
          * name `string`: Name of the client software accessing the HERE API
          * platform `string`: Software platform information of the device, for example operating system name and version.
          * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
        * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
        * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
      * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
* output `object`: The data that Shadows persists for each device.
  * desired `object`: The currently desired state of the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * system `object`: Contains values for the device configuration. HERE Tracking uses these values
      * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
        * distanceM `number`: The device should send an update if it moves more than this distance in meters
        * sampleMs `number`: The rate at which to sample signals in milliseconds
        * sendMs `number`: The rate at which to send sample results in milliseconds
      * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * reported `object`: The last known state reported by the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### shadows.v2.trackingId.state.get
Gets the value for the requested state. You can use request either 
`desired` or `reported` device state.



```js
here_tracking.shadows.v2.trackingId.state.get({
  "trackingId": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.
  * state **required** `string` (values: desired, reported): Desired or reported state to query.

#### Output
* output `object`: The data that Shadows persists for each device.
  * desired `object`: The currently desired state of the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * system `object`: Contains values for the device configuration. HERE Tracking uses these values
      * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
        * distanceM `number`: The device should send an update if it moves more than this distance in meters
        * sampleMs `number`: The rate at which to sample signals in milliseconds
        * sendMs `number`: The rate at which to send sample results in milliseconds
      * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * reported `object`: The last known state reported by the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### shadows.v2.trackingId.state.selector.get
Gets the value for a single property in the given state. You can use
JSON selectors to select values for `desired` or `reported` properties.
You can also reference a property by name, but if the property contains
an object, the entire object is returned rather than a distinct value.

The JSON selector can be nested like this: `payload/time/minutes`



```js
here_tracking.shadows.v2.trackingId.state.selector.get({
  "trackingId": "",
  "state": "",
  "selector": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.
  * state **required** `string` (values: desired, reported): Desired or reported state to query.
  * selector **required** `string`: A JSON selector that specifies the property to get information.

#### Output
*Output schema unknown*

### traces.v2.health.get
Gets service health


```js
here_tracking.traces.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### traces.v2.version.get
Gets service version


```js
here_tracking.traces.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### traces.v2.trackingId.delete
Deletes all historical data for a device including **traces** and **transitions**.



```js
here_tracking.traces.v2.trackingId.delete({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
*Output schema unknown*

### traces.v2.trackingId.get
Gets all traces that were recorded within the specified time range.

Define the range with "before" and "after" timestamps. A successful
response contains an array of traces that were recorded after the
first timestamp and before the second.

Traces are returned as an array in descending order based on timestamp.

Note:
---

To ensure a fast response, always provide both `before` and `after` timestamps.

If no values are supplied `after` defaults to 0, and `before` defaults
to the current system time.

The `count` and `pageToken` parameters provide pagination for results
where a large volume of data matches the given time range.


In this case, `count` is the number of records returned per page along with
a `pageToken` header in the returned HTTP response. The `pageToken` indicates
the next available page in the matching result set. To get the next page of
records, submit `pageToken` as a query parameter in your next request. The default
number of records per page is 1000, which is also the maximum number of
records per page.

In case of success, the response body contains an array of trace
samples between the given timestamps (after <= timestamp <= before).



```js
here_tracking.traces.v2.trackingId.get({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * before `number`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * after `number`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of records per page.
  * filter `boolean`: If you set this to "true", the trace sample is passed through a Kalman smoothing filter.
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

#### Output
* output: The response body contains an array of trace samples, count and pageToken, if
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: The data that Shadows persists for each device.
      * desired `object`: The currently desired state of the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
          * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * reported `object`: The last known state reported by the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * position `object`: The reported or determined location of the device
          * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
          * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
          * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
          * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
          * floor `object`: The building where the measurements were taken
          * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
          * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
          * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
          * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
          * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
          * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
          * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
        * system `object`: Values within the device configuration that are used by HERE Tracking for
          * client `object`: Information about the client Device.
          * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
          * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### transitions.v2.devices.trackingId.get
Gets all transitions that were recorded within a specific time range. This
log also includes events when the accuracy radius of the reported position
intersects with a geofence boundary.

You define the range with `before` and `after` timestamps. A successful
response contains an array of transitions that were recorded after the
first timestamp and before the second.

Transitions are listed in descending order based on the timestamp.

Note:
---

To ensure a fast response, always provide both `before` and `after` timestamps.

If no values are supplied `after` defaults to 0, and `before` defaults
to the current system time.

The `count` and `pageToken` parameters provide pagination for results
where a large volume of data matches the given time range.

In this case, `count` is the number of records returned per page along with
a `pageToken` header in the returned HTTP response. The `pageToken` indicates
the next available page in the matching result set. To get the next page of
records, submit `pageToken` as a query parameter in your next request. The default
number of records per page is 1000, which is also the maximum number of
records per page.



```js
here_tracking.transitions.v2.devices.trackingId.get({
  "trackingId": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.
  * before `number`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * after `number`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.

#### Output
* output: The response body contains an array of transitions, a count and a
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: | Transition Type          | Meaning                                  |
      * geofenceId **required** `string`: Must be a valid UUIDv4.
      * inOut **required** `string` (values: PING_OUTSIDE_FENCE, PING_IN_FENCE, PING_NEAR_FENCE_BOUNDARY)
      * notificationStatus **required** `string` (values: SENT, NOT_SENT)
      * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### transitions.v2.health.get
Gets service health


```js
here_tracking.transitions.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### transitions.v2.version.get
Gets service version


```js
here_tracking.transitions.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### users.v2.devices.get
Provides an array of the TrackingIds for devices that the given user owns.


```js
here_tracking.users.v2.devices.get({}, context)
```

#### Input
* input `object`
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * count `integer`: The number of items to return per page.
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * shadow `object`: The data that Shadows persists for each device.
        * desired `object`: The currently desired state of the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        * reported `object`: The last known state reported by the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * position `object`: The reported or determined location of the device
          * system `object`: Values within the device configuration that are used by HERE Tracking for
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * trackingId `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### users.v2.health.get
Gets service health


```js
here_tracking.users.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### users.v2.login.post
Use this to get a valid access token for a given HERE Account email and password.


```js
here_tracking.users.v2.login.post({}, context)
```

#### Input
* input `object`
  * body `object`: An object containing the email address and password of the user to be logged in.
    * email **required** `string`: The email address of the user
    * password **required** `string`: The password of the user
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output `object`
  * accessToken `string`
  * expiresIn `integer`
  * refreshToken `string`
  * userId `string`: The HERE Account ID of a user.

### users.v2.refresh.post
Use this to get a valid access token for a given HERE Account access token and refresh token.


```js
here_tracking.users.v2.refresh.post({}, context)
```

#### Input
* input `object`
  * body `object`: An object containing the email address and password of the user to be logged in.
    * accessToken **required** `string`: The access token obtained through a previous login
    * refreshToken **required** `string`: The refresh token obtained through a previous login
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output `object`
  * accessToken `string`
  * expiresIn `integer`
  * refreshToken `string`
  * userId `string`: The HERE Account ID of a user.

### users.v2.version.get
Gets service version


```js
here_tracking.users.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service

### v2.post
A device uses its access token to send data to HERE Tracking.

If the request is set to be synchronous, the response will be
the desired state of the device shadow. If the request is set
to be asynchronous, the response will be empty.

To have a position associated with a device, the request body must contain
either a `position` or a `scan` object (see the object definitions for
details). If both are provided, the `scan` is resolved to a `position`. The
more accurate of the two positions (provided and resolved) is used as the
device's position.

If a `scan` is provided, HERE Tracking will resolve the position asynchronously
and return the desired state. The shadow will then be updated
immediately after responding.



```js
here_tracking.v2.post({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * authorization **required** `string`
  * async `boolean`: If set to true, sends the device's data and responds immediately with an empty response body.
  * body `array`: A list of telemetry measurements made by the device.
    * items `object`
      * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
      * position `object`: The reported or determined location of the device
        * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
        * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
        * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
        * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
        * floor `object`: The building where the measurements were taken
          * id **required** `string`: The building id
          * level **required** `number`: The floor in the building in integer format
          * name **required** `string`: The building name
        * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
        * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
        * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
        * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
        * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
        * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
        * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
      * scan `object`: Radio measurements used for positioning or radio map contribution.
        * bt `array`: Bluetooth access points
          * items `object`: Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
        * cdma `array`: CDMA cells
          * items `object`: CDMA measurement
        * country `object`: Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
          * mcc **required** `integer`: Mobile Country Code
        * gps `object`: Optionally supply this to improve HERE Tracking's positioning service by
          * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
          * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
          * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
          * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
          * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
          * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
          * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
          * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        * gsm `array`: GSM cells (GERAN)
          * items `object`: GSM measurement
        * lte `array`: LTE cells (E-UTRA, 4G)
          * items `object`: LTE measurement
        * tdscdma `array`: TD-SCDMA cell (UTRA-TDD, 3G UMTS TDD)
          * items `object`: TD-SCDMA measurement
        * wcdma `array`: WCDMA cells (UTRA-FDD, 3G UMTS)
          * items `object`: WCDMA measurement
        * wlan `array`: WLAN access points
          * items `object`: WLAN measurement
      * system `object`: Values within the device configuration that are used by HERE Tracking for
        * client `object`: Information about the client Device.
          * firmware `string`: Device firmware version information
          * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * manufacturer `string`: Manufacturer of the device (hardware)
          * model `string`: Model of the device (hardware)
          * name `string`: Name of the client software accessing the HERE API
          * platform `string`: Software platform information of the device, for example operating system name and version.
          * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
        * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
        * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
      * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

#### Output
* output `object`
  * configuration `object`

### v2.health.get
Gets service health


```js
here_tracking.v2.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`: Health status

### v2.timestamp.get
Returns the server timestamp used to check the validity of a device's OAuth 1.0 header. Devices must synchronise with this timestamp to avoid clock skew.



```js
here_tracking.v2.timestamp.get({}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.

#### Output
* output `object`
  * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### v2.token.post
HERE Tracking requires that you sign your requests for tokens.
The signature method uses the OAuth 1.0 standard. For more
information on this standard, see the [OAuth Core
1.0](https://oauth.net/core/1.0/) specification.

> See the Authentication section for details on how to generate a signed token request.



```js
here_tracking.v2.token.post({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * x-request-id `string`: ID used for correlating requests within HERE Tracking. Used for logging and error reporting.
  * authorization **required** `string`: Signed OAuth 1.0 header

#### Output
* output `object`
  * accessToken `string`
  * expiresIn `integer`

### v2.version.get
Gets service version


```js
here_tracking.v2.version.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * service-name `string`: Version of service



## Definitions

### circle
* circle `object`: A circular geofence
  * definition **required** `object`
  * description `string`: A description of the area that the geofence encloses and the purpose of the geofence.
  * name `string`: A human-readable name for the geofence.
  * type **required** `string` (values: circle, polygon): The type of geofence shape. A geofence can be a circle or a polygon.
  * definition `object`: An object that defines the area of the geofence.
    * center **required** `object`: The coordinates of the center point of the circle.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
    * radius **required** `number`: The radius of the circle in meters.

### claimedDevice
* claimedDevice `object`
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### country
* country `object`: Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
  * mcc **required** `integer`: Mobile Country Code

### d4975492c92aa17c81b3dc25375e2436a957120b0e33c1ed44a316ce21d8ef08
* d4975492c92aa17c81b3dc25375e2436a957120b0e33c1ed44a316ce21d8ef08 `object`
  * definition **required** `object`
  * description `string`: A description of the area that the geofence encloses and the purpose of the geofence.
  * name `string`: A human-readable name for the geofence.
  * type **required** `string` (values: circle, polygon): The type of geofence shape. A geofence can be a circle or a polygon.

### geofence
* geofence `object`
  * definition **required** `object`
  * description `string`: A description of the area that the geofence encloses and the purpose of the geofence.
  * name `string`: A human-readable name for the geofence.
  * type **required** `string` (values: circle, polygon): The type of geofence shape. A geofence can be a circle or a polygon.

### geofenceUpdate
* geofenceUpdate `object`
  * definition `object`
  * description `string`: A description of the area that the geofence encloses and the purpose of the geofence.
  * name `string`: A human-readable name for the geofence.
  * type `string` (values: circle, polygon): The type of geofence shape. A geofence can be a circle or a polygon.

### polygon
* polygon `object`: A polygonal geofence
  * definition **required** `object`
  * description `string`: A description of the area that the geofence encloses and the purpose of the geofence.
  * name `string`: A human-readable name for the geofence.
  * type **required** `string` (values: circle, polygon): The type of geofence shape. A geofence can be a circle or a polygon.
  * definition `object`: An object that defines the area of the geofence.
    * points **required** `array`: An array of points that define the polygon. A minimum of three points are required.
      * items `object`
        * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
        * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.

### provisionedAndClaimedDevice
* provisionedAndClaimedDevice `object`: A JSON object containing the newly created device credentials
  * deviceId **required** `string`: Must be a valid UUIDv4.
  * deviceSecret **required** `string`: The newly created device secret. Valid credentials are the combination of a secret and ID
  * trackingId `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### provisionedDevice
* provisionedDevice `object`: A JSON object containing the newly created device credentials
  * deviceId **required** `string`: Must be a valid UUIDv4.
  * deviceSecret **required** `string`: The newly created device secret. Valid credentials are the combination of a secret and ID

### requestAddUser
* requestAddUser `array`
  * items `string`: The HERE Account ID of a user.

### requestCreateDeviceLicenses
* requestCreateDeviceLicenses `object`
  * count **required** `integer`: Number of device credentials requested

### requestLogin
* requestLogin `object`: An object containing the email address and password of the user to be logged in.
  * email **required** `string`: The email address of the user
  * password **required** `string`: The password of the user

### requestRefresh
* requestRefresh `object`: An object containing the email address and password of the user to be logged in.
  * accessToken **required** `string`: The access token obtained through a previous login
  * refreshToken **required** `string`: The refresh token obtained through a previous login

### requestRetrieveBatch
* requestRetrieveBatch `array`
  * items `string`: The HERE Account ID of a user.

### requestShadow
* requestShadow `object`: A shadow object with either desired or reported state update.
  * desired `object`: The desired state of the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * system `object`: Contains values for the device configuration. HERE Tracking uses these values
      * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
        * distanceM `number`: The device should send an update if it moves more than this distance in meters
        * sampleMs `number`: The rate at which to sample signals in milliseconds
        * sendMs `number`: The rate at which to send sample results in milliseconds
  * reported `object`: The last known state reported by the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### requestTelemetry
* requestTelemetry `array`: A list of telemetry measurements made by the device.
  * items `object`
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * scan `object`: Radio measurements used for positioning or radio map contribution.
      * bt `array`: Bluetooth access points
        * items `object`: Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
          * eddystoneId `string`: Full Identifier as Base64 string. A combination of 10-byte Namespace component and a 6-byte Instance component
          * iBeaconId `string`: Full Identifier as Base64 string. A combination of 16-byte UUID + 2-byte major + 2-byte minor
          * mac `string`: The MAC address of the Bluetooth access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. For privacy reasons positioning based on a single Bluetooth AP is not possible; there has to be at least one other matching WLAN or Bluetooth access point. Either MAC, EddystoneId, or iBeaconId is required.
          * rss **required** `integer`: Received signal strength (dBm) at the terminal
          * timestamp `string`: Time of the measurement (UTC)
      * cdma `array`: CDMA cells
        * items `object`: CDMA measurement
          * baselat `number`: Base station latitude (Optional)
          * baselng `number`: Base station longitude (Optional)
          * bsid **required** `integer`: Base Station ID, BID
          * channel `integer`: CDMA channel frequency (Optional, you must specify a value for this item when you specify a value for pnoffset)
          * nid **required** `integer`: Network Id, NID
          * nmr `array`: CDMA Network measurements (Optional)
          * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
          * pnoffset `integer`: Pseudonoise offset (Optional, you must specify a value for this item when you specify a value for channel)
          * rz `integer`: Registration zone (Optional)
          * sid **required** `integer`: System Id, SID
          * timestamp `string`: Time of the cell measurement (UTC) (Optional)
      * country `object`: Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
        * mcc **required** `integer`: Mobile Country Code
      * gps `object`: Optionally supply this to improve HERE Tracking's positioning service by
        * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
        * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
        * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
        * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
        * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
        * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
        * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
        * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * gsm `array`: GSM cells (GERAN)
        * items `object`: GSM measurement
          * bcch `integer`: Broadcast Control Channel (Synonymous to ARFCN = Absolute Radio Frequency Channel) (Optional, you must specify a value for this item when you specify a value for bsic).
          * bsic `integer`: Base Station Identity Code (for instance, color code) (Optional, you must specify a value for this item when you specify a value for bcch).
          * cid **required** `integer`: Cell Identifier, 16 bits. Mcc+mnc+lac+cid uniquely identifies the GSM cell.
          * lac **required** `integer`: Location Area Code
          * mcc **required** `integer`: Mobile Country Code
          * mnc **required** `integer`: Mobile Network Code
          * nmr `array`: Network measurements (Optional)
          * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
          * ta `integer`: Timing advance (Optional). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.
          * timestamp `string`: Time of the cell measurement (UTC) (Optional)
      * lte `array`: LTE cells (E-UTRA, 4G)
        * items `object`: LTE measurement
          * cid **required** `integer`: E-UTRA Cell Identifier, 28 bits (20 bits eNodeB and 8 bits Cell id). Mcc+mnc+cid uniquely identifies the LTE cell, tac is optional.
          * earfcn `integer`: Evolved Absolute Radio Frequency Channel (Optional, you must specify a value for this item when you specify a value for pci)
          * mcc **required** `integer`: Mobile Country Code
          * mnc **required** `integer`: Mobile Network Code
          * nmr `array`: Network measurements (Optional)
          * pci `integer`: Physical Cell Identity (Optional, you must specify a value for this item when you specify a value for earfcn)
          * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
          * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
          * ta `integer`: Timing Advance (Optional). Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see TS 36.213 and 36.211.
          * tac `integer`: Tracking Area Code (Optional)
          * timestamp `string`: Time of the cell measurement (UTC) (Optional)
      * tdscdma `array`: TD-SCDMA cell (UTRA-TDD, 3G UMTS TDD)
        * items `object`: TD-SCDMA measurement
          * cellparams `integer`: Cell Parameters ID (CDMA Spreading Code ID) (Optional, you must specify a value for this item when you specify a value for uarfcn).
          * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the TDSCDMA cell, lac is optional.
          * lac `integer`: Location Area Code (Optional)
          * mcc **required** `integer`: Mobile Country Code
          * mnc **required** `integer`: Mobile Network Code
          * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
          * pathloss `integer`: UTRAN path loss (dB) (Optional, you must specify a value for this item when you specify a value for rscp).
          * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional, you must specify a value for this item when you specify a value for pathloss). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
          * ta `integer`: Timing advance (Optional). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.
          * timestamp `string`: Time of the cell measurement (UTC) (Optional)
          * uarfcn `integer`: Carrier frequency of a UTRA-TDD Serving Cell (Optional, you must specify a value for this item when you specify a value for cellparams).
      * wcdma `array`: WCDMA cells (UTRA-FDD, 3G UMTS)
        * items `object`: WCDMA measurement
          * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the WCDMA cell, lac is optional.
          * lac `integer`: Location Area Code (Optional)
          * mcc **required** `integer`: Mobile Country Code
          * mnc **required** `integer`: Mobile Network Code
          * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
          * pathloss `integer`: UTRAN path loss (dB) (Optional).
          * psc `integer`: Primary Scrambling Code (Primary CPICH, Primary Control Pilot Channel) (Optional, you must specify a value for this item when you specify a value for uarfcndl).
          * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
          * timestamp `string`: Time of the cell measurement (UTC) (Optional)
          * uarfcndl `integer`: Downlink frequency of a UTRA-FDD Serving Cell (Optional, you must specify a value for this item when you specify a value for psc).
      * wlan `array`: WLAN access points
        * items `object`: WLAN measurement
          * band `number`: Frequency range (GHz). Allowed values are 2.4, 3.65, and 5. (Possible future values include 4.9, 5.9, 60, and 900.)
          * mac **required** `string`: The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell.
          * powrx `integer`: Received signal level (dBm) at the terminal (Optional)
          * timestamp `string`: Time of the wlan measurement (UTC) (Optional)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### resolvedPosition
* resolvedPosition `object`
  * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
  * position **required** `object`: The reported or determined location of the device
    * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
    * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
    * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
    * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
    * floor `object`: The building where the measurements were taken
      * id **required** `string`: The building id
      * level **required** `number`: The floor in the building in integer format
      * name **required** `string`: The building name
    * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
    * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
    * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
    * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
    * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
    * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
    * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
  * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### responseCount
* responseCount `object`
  * count **required** `number`: The count of created licenses for given appId
  * updatedAt **required** `string`: last update to the count

### responseCreateDeviceLicenses
* responseCreateDeviceLicenses `object`
  * jobId **required** `string`: ID identifying this job. Retain for future use. Valid for 24 hours after {now}.

### responseCreateGeofence
* responseCreateGeofence `object`
  * id **required** `string`: Must be a valid UUIDv4.

### responseJobResults
* responseJobResults
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: A JSON object containing the newly created device credentials
      * deviceId **required** `string`: Must be a valid UUIDv4.
      * deviceSecret **required** `string`: The newly created device secret. Valid credentials are the combination of a secret and ID

### responseJobStatus
* responseJobStatus `object`
  * percent **required** `number`: The percentage of the job that was completed at the time of the request.
  * status **required** `string` (values: started, complete): The status of the requested job. May be "started" or "complete". When status is "complete", results may be downloaded.

### responseListDevices
* responseListDevices
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`
      * shadow `object`: The data that Shadows persists for each device.
        * desired `object`: The currently desired state of the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
        * reported `object`: The last known state reported by the device.
          * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
          * position `object`: The reported or determined location of the device
          * system `object`: Values within the device configuration that are used by HERE Tracking for
          * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * trackingId `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### responseLogin
* responseLogin `object`
  * accessToken `string`
  * expiresIn `integer`
  * refreshToken `string`
  * userId `string`: The HERE Account ID of a user.

### responseRegistrations
* responseRegistrations
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `string`

### responseRetrieveBatch
* responseRetrieveBatch `array`
  * items `object`
    * body `object`: The data that Shadows persists for each device.
      * desired `object`: The currently desired state of the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
          * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * reported `object`: The last known state reported by the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * position `object`: The reported or determined location of the device
          * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
          * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
          * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
          * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
          * floor `object`: The building where the measurements were taken
          * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
          * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
          * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
          * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
          * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
          * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
          * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
        * system `object`: Values within the device configuration that are used by HERE Tracking for
          * client `object`: Information about the client Device.
          * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
          * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
    * statusCode `integer`

### responseShadow
* responseShadow `object`: The data that Shadows persists for each device.
  * desired `object`: The currently desired state of the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * system `object`: Contains values for the device configuration. HERE Tracking uses these values
      * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
        * distanceM `number`: The device should send an update if it moves more than this distance in meters
        * sampleMs `number`: The rate at which to sample signals in milliseconds
        * sendMs `number`: The rate at which to send sample results in milliseconds
      * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * reported `object`: The last known state reported by the device.
    * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
    * position `object`: The reported or determined location of the device
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
      * floor `object`: The building where the measurements were taken
        * id **required** `string`: The building id
        * level **required** `number`: The floor in the building in integer format
        * name **required** `string`: The building name
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
      * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
    * system `object`: Values within the device configuration that are used by HERE Tracking for
      * client `object`: Information about the client Device.
        * firmware `string`: Device firmware version information
        * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
          * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
        * manufacturer `string`: Manufacturer of the device (hardware)
        * model `string`: Model of the device (hardware)
        * name `string`: Name of the client software accessing the HERE API
        * platform `string`: Software platform information of the device, for example operating system name and version.
        * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
      * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
      * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### responseTelemetry
* responseTelemetry `object`
  * configuration `object`

### responseToken
* responseToken `object`
  * accessToken `string`
  * expiresIn `integer`

### responseTraces
* responseTraces: The response body contains an array of trace samples, count and pageToken, if
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: The data that Shadows persists for each device.
      * desired `object`: The currently desired state of the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * system `object`: Contains values for the device configuration. HERE Tracking uses these values
          * rate `object`: This can be used to specify the rates at which the device performs certain tasks.
          * stateVersion **required** `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * reported `object`: The last known state reported by the device.
        * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
        * position `object`: The reported or determined location of the device
          * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
          * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
          * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
          * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
          * floor `object`: The building where the measurements were taken
          * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
          * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
          * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
          * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
          * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
          * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
          * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
        * system `object`: Values within the device configuration that are used by HERE Tracking for
          * client `object`: Information about the client Device.
          * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
          * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
        * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### responseTransitions
* responseTransitions: The response body contains an array of transitions, a count and a
  * count `integer`: The number of items to return per page.
  * pageToken `string`: A page token that you can use to retrieve the next page.
  * data `array`
    * items `object`: | Transition Type          | Meaning                                  |
      * geofenceId **required** `string`: Must be a valid UUIDv4.
      * inOut **required** `string` (values: PING_OUTSIDE_FENCE, PING_IN_FENCE, PING_NEAR_FENCE_BOUNDARY)
      * notificationStatus **required** `string` (values: SENT, NOT_SENT)
      * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
      * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### scan
* scan `object`: Radio measurements used for positioning or radio map contribution.
  * bt `array`: Bluetooth access points
    * items `object`: Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
      * eddystoneId `string`: Full Identifier as Base64 string. A combination of 10-byte Namespace component and a 6-byte Instance component
      * iBeaconId `string`: Full Identifier as Base64 string. A combination of 16-byte UUID + 2-byte major + 2-byte minor
      * mac `string`: The MAC address of the Bluetooth access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. For privacy reasons positioning based on a single Bluetooth AP is not possible; there has to be at least one other matching WLAN or Bluetooth access point. Either MAC, EddystoneId, or iBeaconId is required.
      * rss **required** `integer`: Received signal strength (dBm) at the terminal
      * timestamp `string`: Time of the measurement (UTC)
  * cdma `array`: CDMA cells
    * items `object`: CDMA measurement
      * baselat `number`: Base station latitude (Optional)
      * baselng `number`: Base station longitude (Optional)
      * bsid **required** `integer`: Base Station ID, BID
      * channel `integer`: CDMA channel frequency (Optional, you must specify a value for this item when you specify a value for pnoffset)
      * nid **required** `integer`: Network Id, NID
      * nmr `array`: CDMA Network measurements (Optional)
        * items `object`: CDMA Network measurement
          * bsid `integer`: Base Station ID (Optional)
          * channel **required** `integer`: CDMA channel frequency
          * frequency `integer`: Deprecated. Use 'channel' instead.
          * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
          * pnoffset **required** `integer`: Pseudonoise offset
      * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
      * pnoffset `integer`: Pseudonoise offset (Optional, you must specify a value for this item when you specify a value for channel)
      * rz `integer`: Registration zone (Optional)
      * sid **required** `integer`: System Id, SID
      * timestamp `string`: Time of the cell measurement (UTC) (Optional)
  * country `object`: Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
    * mcc **required** `integer`: Mobile Country Code
  * gps `object`: Optionally supply this to improve HERE Tracking's positioning service by
    * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
    * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
    * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
    * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
    * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
    * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
    * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
    * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
    * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * gsm `array`: GSM cells (GERAN)
    * items `object`: GSM measurement
      * bcch `integer`: Broadcast Control Channel (Synonymous to ARFCN = Absolute Radio Frequency Channel) (Optional, you must specify a value for this item when you specify a value for bsic).
      * bsic `integer`: Base Station Identity Code (for instance, color code) (Optional, you must specify a value for this item when you specify a value for bcch).
      * cid **required** `integer`: Cell Identifier, 16 bits. Mcc+mnc+lac+cid uniquely identifies the GSM cell.
      * lac **required** `integer`: Location Area Code
      * mcc **required** `integer`: Mobile Country Code
      * mnc **required** `integer`: Mobile Network Code
      * nmr `array`: Network measurements (Optional)
        * items `object`: GSM Network measurement
          * bcch **required** `integer`: Broadcast Control Channel (Synonymous to ARFCN = Absolute Radio Frequency Channel)
          * bsic **required** `integer`: Base Station Identity Code (for instance, color code)
          * cid `integer`: Cell Identifier (Optional)
          * lac `integer`: Location Area Code (Optional)
          * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
      * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
      * ta `integer`: Timing advance (Optional). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.
      * timestamp `string`: Time of the cell measurement (UTC) (Optional)
  * lte `array`: LTE cells (E-UTRA, 4G)
    * items `object`: LTE measurement
      * cid **required** `integer`: E-UTRA Cell Identifier, 28 bits (20 bits eNodeB and 8 bits Cell id). Mcc+mnc+cid uniquely identifies the LTE cell, tac is optional.
      * earfcn `integer`: Evolved Absolute Radio Frequency Channel (Optional, you must specify a value for this item when you specify a value for pci)
      * mcc **required** `integer`: Mobile Country Code
      * mnc **required** `integer`: Mobile Network Code
      * nmr `array`: Network measurements (Optional)
        * items `object`: LTE Network measurement
          * cid `integer`: E-UTRA Cell Identifier (Optional)
          * earfcn **required** `integer`: Evolved Absolute Radio Frequency Channel
          * pci **required** `integer`: Physical Cell Identity
          * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
          * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
      * pci `integer`: Physical Cell Identity (Optional, you must specify a value for this item when you specify a value for earfcn)
      * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
      * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
      * ta `integer`: Timing Advance (Optional). Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see TS 36.213 and 36.211.
      * tac `integer`: Tracking Area Code (Optional)
      * timestamp `string`: Time of the cell measurement (UTC) (Optional)
  * tdscdma `array`: TD-SCDMA cell (UTRA-TDD, 3G UMTS TDD)
    * items `object`: TD-SCDMA measurement
      * cellparams `integer`: Cell Parameters ID (CDMA Spreading Code ID) (Optional, you must specify a value for this item when you specify a value for uarfcn).
      * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the TDSCDMA cell, lac is optional.
      * lac `integer`: Location Area Code (Optional)
      * mcc **required** `integer`: Mobile Country Code
      * mnc **required** `integer`: Mobile Network Code
      * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
        * items `object`: TD-SCDMA Network measurement
          * cellparams **required** `integer`: Cell Parameters ID (CDMA Spreading Code ID)
          * cid `integer`: Cell Identifier (uc-id) (Optional)
          * pathloss `integer`: UTRAN path loss (dB) (Optional, you must specify a value for this item when you specify a value for rscp).
          * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional, you must specify a value for this item when you specify a value for pathloss). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
          * uarfcn **required** `integer`: Carrier frequency of a UTRA-TDD Serving Cell
      * pathloss `integer`: UTRAN path loss (dB) (Optional, you must specify a value for this item when you specify a value for rscp).
      * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional, you must specify a value for this item when you specify a value for pathloss). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
      * ta `integer`: Timing advance (Optional). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.
      * timestamp `string`: Time of the cell measurement (UTC) (Optional)
      * uarfcn `integer`: Carrier frequency of a UTRA-TDD Serving Cell (Optional, you must specify a value for this item when you specify a value for cellparams).
  * wcdma `array`: WCDMA cells (UTRA-FDD, 3G UMTS)
    * items `object`: WCDMA measurement
      * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the WCDMA cell, lac is optional.
      * lac `integer`: Location Area Code (Optional)
      * mcc **required** `integer`: Mobile Country Code
      * mnc **required** `integer`: Mobile Network Code
      * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
        * items `object`: WCDMA Network measurement
          * cid `integer`: UTRAN Cell Identifier (uc-id) (Optional)
          * pathloss `integer`: UTRAN path loss (dB) (Optional).
          * psc **required** `integer`: Primary Scrambling Code (Primary CPICH, Primary Control Pilot Channel)
          * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
          * uarfcndl **required** `integer`: Downlink frequency of a UTRA-FDD Serving Cell
      * pathloss `integer`: UTRAN path loss (dB) (Optional).
      * psc `integer`: Primary Scrambling Code (Primary CPICH, Primary Control Pilot Channel) (Optional, you must specify a value for this item when you specify a value for uarfcndl).
      * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
      * timestamp `string`: Time of the cell measurement (UTC) (Optional)
      * uarfcndl `integer`: Downlink frequency of a UTRA-FDD Serving Cell (Optional, you must specify a value for this item when you specify a value for psc).
  * wlan `array`: WLAN access points
    * items `object`: WLAN measurement
      * band `number`: Frequency range (GHz). Allowed values are 2.4, 3.65, and 5. (Possible future values include 4.9, 5.9, 60, and 900.)
      * mac **required** `string`: The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell.
      * powrx `integer`: Received signal level (dBm) at the terminal (Optional)
      * timestamp `string`: Time of the wlan measurement (UTC) (Optional)

### telemetry
* telemetry `object`
  * payload `object`: An application-specific JSON object. HERE Tracking doesn't read this object but
  * position `object`: The reported or determined location of the device
    * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
    * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
    * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
    * confidence `integer`: Confidence level in percent for the accuracy/uncertainty. If not specified, the default is 68 (this corresponds to a 68% probability that the true position is within the accuracy/uncertainty radius of the position; the higher the number, the greater the confidence level).
    * floor `object`: The building where the measurements were taken
      * id **required** `string`: The building id
      * level **required** `number`: The floor in the building in integer format
      * name **required** `string`: The building name
    * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
    * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
    * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
    * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
    * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
    * type `string`: Position type, "gnss" (satellite based), "cell" or "wlan" (network based)
    * wlancount `integer`: The total number of observed WLAN APs in the scan used for producing the position. ("wlan" position type only)
  * scan `object`: Radio measurements used for positioning or radio map contribution.
    * bt `array`: Bluetooth access points
      * items `object`: Bluetooth measurement. In addition to rss, one of mac, eddystoneId, or iBeaconId is required.
        * eddystoneId `string`: Full Identifier as Base64 string. A combination of 10-byte Namespace component and a 6-byte Instance component
        * iBeaconId `string`: Full Identifier as Base64 string. A combination of 16-byte UUID + 2-byte major + 2-byte minor
        * mac `string`: The MAC address of the Bluetooth access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. For privacy reasons positioning based on a single Bluetooth AP is not possible; there has to be at least one other matching WLAN or Bluetooth access point. Either MAC, EddystoneId, or iBeaconId is required.
        * rss **required** `integer`: Received signal strength (dBm) at the terminal
        * timestamp `string`: Time of the measurement (UTC)
    * cdma `array`: CDMA cells
      * items `object`: CDMA measurement
        * baselat `number`: Base station latitude (Optional)
        * baselng `number`: Base station longitude (Optional)
        * bsid **required** `integer`: Base Station ID, BID
        * channel `integer`: CDMA channel frequency (Optional, you must specify a value for this item when you specify a value for pnoffset)
        * nid **required** `integer`: Network Id, NID
        * nmr `array`: CDMA Network measurements (Optional)
          * items `object`: CDMA Network measurement
        * pilotpower `integer`: Pilot Power (dBm) (Optional). If Pilot Power is not available directly, it needs to be calculated from Total Power in the band and Pilot Strength with respect to the Total Power. Pilot power less than -142dBm should be mapped to -142. Pilot power greater than -49dBm should be mapped to -49.
        * pnoffset `integer`: Pseudonoise offset (Optional, you must specify a value for this item when you specify a value for channel)
        * rz `integer`: Registration zone (Optional)
        * sid **required** `integer`: System Id, SID
        * timestamp `string`: Time of the cell measurement (UTC) (Optional)
    * country `object`: Indicates in which country the WLAN APs are located (in case cell data is not present in radio_observations)
      * mcc **required** `integer`: Mobile Country Code
    * gps `object`: Optionally supply this to improve HERE Tracking's positioning service by
      * accuracy **required** `number`: Uncertainty circle radius in meters (degree of confidence according to the 'confidence' parameter).
      * alt `number`: Altitude in meters (referenced to the WGS-84 ellipsoid) negative or positive.
      * altaccuracy `number`: Uncertainty of the altitude estimate in meters (degree of confidence according to the 'confidence' parameter).
      * heading `integer`: GPS/GNSS heading in degrees, clockwise from true north. You must specify a value for this item when you specify a value for speed.
      * lat **required** `number`: Latitude in WGS-84 format, decimal representation ranging from -90 to 90.
      * lng **required** `number`: Longitude in WGS-84 format, decimal representation ranging from -180 to 180.
      * satellitecount `integer`: Number of GPS/GNSS satellites used for the calculation of the position fix. ("gnss" position type only)
      * speed `integer`: GPS/GNSS speed of the device (m/s). Position fixes at speed above the maximum should not be used for contribution. You must specify a value for this item when you specify a value for heading.
      * timestamp `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
    * gsm `array`: GSM cells (GERAN)
      * items `object`: GSM measurement
        * bcch `integer`: Broadcast Control Channel (Synonymous to ARFCN = Absolute Radio Frequency Channel) (Optional, you must specify a value for this item when you specify a value for bsic).
        * bsic `integer`: Base Station Identity Code (for instance, color code) (Optional, you must specify a value for this item when you specify a value for bcch).
        * cid **required** `integer`: Cell Identifier, 16 bits. Mcc+mnc+lac+cid uniquely identifies the GSM cell.
        * lac **required** `integer`: Location Area Code
        * mcc **required** `integer`: Mobile Country Code
        * mnc **required** `integer`: Mobile Network Code
        * nmr `array`: Network measurements (Optional)
          * items `object`: GSM Network measurement
        * rxlevel `integer`: Received Signal power (dBm) (Optional). Power less than -110dBm should be mapped to -110. Power greater than -25dBm should be mapped to -25.
        * ta `integer`: Timing advance (Optional). Expressed in the units of GSM bits equaling to 48/13 μs ~ 1107 meters.
        * timestamp `string`: Time of the cell measurement (UTC) (Optional)
    * lte `array`: LTE cells (E-UTRA, 4G)
      * items `object`: LTE measurement
        * cid **required** `integer`: E-UTRA Cell Identifier, 28 bits (20 bits eNodeB and 8 bits Cell id). Mcc+mnc+cid uniquely identifies the LTE cell, tac is optional.
        * earfcn `integer`: Evolved Absolute Radio Frequency Channel (Optional, you must specify a value for this item when you specify a value for pci)
        * mcc **required** `integer`: Mobile Country Code
        * mnc **required** `integer`: Mobile Network Code
        * nmr `array`: Network measurements (Optional)
          * items `object`: LTE Network measurement
        * pci `integer`: Physical Cell Identity (Optional, you must specify a value for this item when you specify a value for earfcn)
        * rsrp `integer`: Reference Signal Received Power = RSRP (dBm) (Optional, you must specify a value for this item when you specify a value for rsrq). Power less than -140dBm should be mapped to -140. Power greater than -44dBm should be mapped to -44.
        * rsrq `number`: Reference Signal Received Quality = RSRQ (dB) (Optional). Values less than -19.5dB should be mapped to -19.5, and values greater than -3dB should be mapped to -3dB.
        * ta `integer`: Timing Advance (Optional). Expressed in the units of 16*Ts (16 Basic time units) = 16/(15000*2048) seconds ~ 156meters. For reference see TS 36.213 and 36.211.
        * tac `integer`: Tracking Area Code (Optional)
        * timestamp `string`: Time of the cell measurement (UTC) (Optional)
    * tdscdma `array`: TD-SCDMA cell (UTRA-TDD, 3G UMTS TDD)
      * items `object`: TD-SCDMA measurement
        * cellparams `integer`: Cell Parameters ID (CDMA Spreading Code ID) (Optional, you must specify a value for this item when you specify a value for uarfcn).
        * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the TDSCDMA cell, lac is optional.
        * lac `integer`: Location Area Code (Optional)
        * mcc **required** `integer`: Mobile Country Code
        * mnc **required** `integer`: Mobile Network Code
        * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
          * items `object`: TD-SCDMA Network measurement
        * pathloss `integer`: UTRAN path loss (dB) (Optional, you must specify a value for this item when you specify a value for rscp).
        * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional, you must specify a value for this item when you specify a value for pathloss). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
        * ta `integer`: Timing advance (Optional). Round-Trip distance presented in the units of 4*c/7.68e6 ~156 meters. That is, the scaling factor is 4 times the chip length at chip rate of 7.68 Mchips/s. Note that at chip rates 1.28 Mchips/s and 3.84 Mchips/s you need to scale according to chip length of 7.68 Mchips/s, that is, multiply by 6 or 2 if needed.
        * timestamp `string`: Time of the cell measurement (UTC) (Optional)
        * uarfcn `integer`: Carrier frequency of a UTRA-TDD Serving Cell (Optional, you must specify a value for this item when you specify a value for cellparams).
    * wcdma `array`: WCDMA cells (UTRA-FDD, 3G UMTS)
      * items `object`: WCDMA measurement
        * cid **required** `integer`: UTRAN Cell Identifier, 28 bits (12 bits RNC and 16 bits Cell id). Mcc+mnc+cid uniquely identifies the WCDMA cell, lac is optional.
        * lac `integer`: Location Area Code (Optional)
        * mcc **required** `integer`: Mobile Country Code
        * mnc **required** `integer`: Mobile Network Code
        * nmr `array`: Network measurements (Optional). Maximum of 8 uarfcndl times maximum of 32 psc.
          * items `object`: WCDMA Network measurement
        * pathloss `integer`: UTRAN path loss (dB) (Optional).
        * psc `integer`: Primary Scrambling Code (Primary CPICH, Primary Control Pilot Channel) (Optional, you must specify a value for this item when you specify a value for uarfcndl).
        * rscp `integer`: Received Signal Code Power = RSCP (dBm) (Optional). Power less than -120dBm should be mapped to -120. Power greater than -25dBm should be mapped to -25.
        * timestamp `string`: Time of the cell measurement (UTC) (Optional)
        * uarfcndl `integer`: Downlink frequency of a UTRA-FDD Serving Cell (Optional, you must specify a value for this item when you specify a value for psc).
    * wlan `array`: WLAN access points
      * items `object`: WLAN measurement
        * band `number`: Frequency range (GHz). Allowed values are 2.4, 3.65, and 5. (Possible future values include 4.9, 5.9, 60, and 900.)
        * mac **required** `string`: The MAC address of the WLAN access point. MAC-48 address with colon (:) or hyphen (-) separators, upper or lower case hex digits. Note that if the SSID contains postfix "_nomap", the AP should not be used for positioning. For privacy reasons positioning based on a single WLAN AP is not possible; there has to be at least one other matching wlan or cell.
        * powrx `integer`: Received signal level (dBm) at the terminal (Optional)
        * timestamp `string`: Time of the wlan measurement (UTC) (Optional)
  * system `object`: Values within the device configuration that are used by HERE Tracking for
    * client `object`: Information about the client Device.
      * firmware `string`: Device firmware version information
      * homenetwork `array`: Information about subscriber home network - 3GPP MCC+MNC or 3GPP2 SID+NID. Dual-SIM devices can provide information on both two subscriptions.
        * items `object`: Network information. Either MCC + MNC or SID + NID attribute pair is required.
          * mcc `integer`: Mobile Country Code
          * mnc `integer`: Mobile Network Code
          * nid `integer`: Network Id, NID
          * sid `integer`: System Id, SID
      * manufacturer `string`: Manufacturer of the device (hardware)
      * model `string`: Model of the device (hardware)
      * name `string`: Name of the client software accessing the HERE API
      * platform `string`: Software platform information of the device, for example operating system name and version.
      * version `string`: Version of the client software in format X.Y.Z, where X [0..255] is a major, Y [0..255] is a minor, and Z [0..65535] is a build version number. Increase the version/build number for each release of the client.
    * phoneNumber `string`: The phone number of the device's SIM card in the international E.164 format. You should prefix all country codes with "+" instead of "00".
    * stateVersion `integer`: The version of the state of a device. This should be incremented only by HERE Tracking.
  * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.

### transition
* transition `object`: | Transition Type          | Meaning                                  |
  * geofenceId **required** `string`: Must be a valid UUIDv4.
  * inOut **required** `string` (values: PING_OUTSIDE_FENCE, PING_IN_FENCE, PING_NEAR_FENCE_BOUNDARY)
  * notificationStatus **required** `string` (values: SENT, NOT_SENT)
  * timestamp **required** `integer`: Milliseconds elapsed since 1 January 1970 00:00:00 UTC.
  * trackingId **required** `string`: The ID HERE Tracking assigned to the device when it was claimed by a user.

### webhook
* webhook `object`: A webhook notification channel properties
  * type `string` (values: webhook): The type of notification channel to be created
  * url `string`: Required for type webhook. A URL for webhook notifications capable of receiving POST requests.
  * definition `object`
    * url `string`: A URL for webhook notifications capable of receiving POST requests


