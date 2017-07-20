# @datafire/netatmo

Client library for Netatmo

## Installation and Usage
```bash
npm install --save datafire @datafire/netatmo
```

```js
let datafire = require('datafire');
let netatmo = require('@datafire/netatmo').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    netatmo: account,
  }
})


netatmo.getthermostatsdata({}, context).then(data => {
  console.log(data);
})
```

## Description
<h3>Welcome to the Netatmo swagger on-line documentation !</h3>This site is a complement to the official <a href="https://dev.netatmo.com/">Netatmo developper documentation</a> using swagger to bring interactivity and easy testing of requests with the "try it" button (authenticate with the authorization code 0Auth2 flow by clicking the authenticate button in the methods). You can find the source code for this site can be found in the project <a href="https://github.com/cbornet/netatmo-swagger-ui">netatmo-swagger-ui</a>. You can also use the online <a href="./swagger.json">swagger declaration</a> file to generate code or static documentation (see <a href="https://github.com/cbornet/netatmo-swagger-api">netatmo-swagger-api</a>).

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
netatmo.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
netatmo.oauthRefresh(null, context)
```


### addwebhook
Links a callback url to a user.



```js
netatmo.addwebhook({
  "url": "",
  "app_type": ""
}, context)
```

#### Parameters
* url (string) **required** - Your webhook callback url
* app_type (string) **required** - Webhooks are only available for Welcome, enter app_camera.

### createnewschedule
The method createnewschedule creates a new schedule stored in the backup list.


```js
netatmo.createnewschedule({
  "device_id": "",
  "module_id": "",
  "therm_program": null
}, context)
```

#### Parameters
* device_id (string) **required** - The relay id
* module_id (string) **required** - The thermostat id
* therm_program (undefined) **required**

### devicelist
The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.



```js
netatmo.devicelist({}, context)
```


### dropwebhook
Dissociates a webhook from a user.



```js
netatmo.dropwebhook({
  "app_type": ""
}, context)
```

#### Parameters
* app_type (string) **required** - For Welcome, use app_camera

### getcamerapicture
Returns the snapshot associated to an event.



```js
netatmo.getcamerapicture({
  "image_id": "",
  "key": ""
}, context)
```

#### Parameters
* image_id (string) **required** - id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)
* key (string) **required** - Security key to access snapshots.

### geteventsuntil
Returns the snapshot associated to an event.



```js
netatmo.geteventsuntil({
  "home_id": "",
  "event_id": ""
}, context)
```

#### Parameters
* home_id (string) **required** - ID of the Home you're interested in
* event_id (string) **required** - Your request will retrieve all the events until this one

### gethomedata
Returns information about users homes and cameras.



```js
netatmo.gethomedata({}, context)
```


### getlasteventof
Returns most recent events.



```js
netatmo.getlasteventof({
  "home_id": "",
  "person_id": ""
}, context)
```

#### Parameters
* home_id (string) **required** - ID of the Home you're interested in
* person_id (string) **required** - Your request will retrieve all events of the given home until the most recent event of the given person
* offset (integer) - Number of events to retrieve. Default is 30.

### getmeasure
The method getmeasure returns the measurements of a device or a module.



```js
netatmo.getmeasure({
  "device_id": "",
  "scale": "",
  "type": []
}, context)
```

#### Parameters
* device_id (string) **required** - Id of the device whose module's measurements you want to retrieve. This _id can be found in the user's devices field.
* module_id (string) - If you don't specify any module_id you will retrieve the device's measurements. If you specify a module_id you will retrieve the module's measurements.
* scale (string) **required** - Defines the time interval between two measurements.
* type (array) **required** - Sets the type of measurement you want to retrieve.
* date_begin (integer) - Starting timestamp (utc) of the requested measurements.
* date_end (string) - Ending timestamp (utc) of the request measurements.
* limit (integer) - Limits the number of measurements returned (default & max is 1024)
* optimize (boolean) - Allows you to choose the format of the answer.
* real_time (boolean) - In scales higher than max, since the data is aggregated, the timestamps returned are by default offset by +(scale/2).

### getnextevents
Returns previous events.



```js
netatmo.getnextevents({
  "home_id": "",
  "event_id": ""
}, context)
```

#### Parameters
* home_id (string) **required** - ID of the Home you're interested in
* event_id (string) **required** - Your request will retrieve events occured before this one
* size (integer) - Number of events to retrieve. Default is 30.

### getstationsdata
The method getstationsdata Returns data from a user Weather Stations (measures and device specific data).


```js
netatmo.getstationsdata({}, context)
```


### getthermostatsdata
The method getthermostatsdata returns information about user's thermostats such as their last measurements.


```js
netatmo.getthermostatsdata({}, context)
```


### getthermstate
The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.


```js
netatmo.getthermstate({
  "device_id": "",
  "module_id": ""
}, context)
```

#### Parameters
* device_id (string) **required** - The relay id
* module_id (string) **required** - The thermostat id

### getuser
The method getuser returns information about a user such as prefered language, prefered units, and list of devices.



```js
netatmo.getuser(null, context)
```


### partnerdevices
The method partnerdevices returns the list of device_id to which your partner application has access to.


```js
netatmo.partnerdevices(null, context)
```


### setpersonsaway
Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.



```js
netatmo.setpersonsaway({
  "home_id": ""
}, context)
```

#### Parameters
* home_id (string) **required** - ID of the Home you're interested in
* person_id (string) - If a person_id is specified, that person will be set as 'Away'. If no person_id is specified, the Home will be set as 'Empty'.

### setthermpoint
The method setthermpoint changes the Thermostat manual temperature setpoint.


```js
netatmo.setthermpoint({
  "device_id": "",
  "module_id": "",
  "setpoint_mode": ""
}, context)
```

#### Parameters
* device_id (string) **required** - The relay id
* module_id (string) **required** - The thermostat id
* setpoint_mode (string) **required** - Chosen setpoint_mode
* setpoint_endtime (integer) - When using the manual or max setpoint_mode, this parameter defines when the setpoint expires.
* setpoint_temp (number) - When using the manual setpoint_mode, this parameter defines the temperature setpoint (in Celcius) to use.

### switchschedule
The method switchschedule switches the Thermostat's schedule to another existing schedule.


```js
netatmo.switchschedule({
  "device_id": "",
  "module_id": "",
  "schedule_id": ""
}, context)
```

#### Parameters
* device_id (string) **required** - The relay id
* module_id (string) **required** - The thermostat id
* schedule_id (string) **required** - The schedule id. It can be found in the getthermstate response, under the keys "therm_program_backup" and "therm_program".

### syncschedule
The method syncschedule changes the Thermostat weekly schedule.


```js
netatmo.syncschedule({
  "device_id": "",
  "module_id": "",
  "therm_program": null
}, context)
```

#### Parameters
* device_id (string) **required** - The relay id
* module_id (string) **required** - The thermostat id
* therm_program (undefined) **required**

