# @datafire/netatmo

Client library for Netatmo

## Installation and Usage
```bash
npm install --save @datafire/netatmo
```
```js
let netatmo = require('@datafire/netatmo').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

netatmo.getthermostatsdata({}).then(data => {
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

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
netatmo.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### addwebhook
Links a callback url to a user.



```js
netatmo.addwebhook({
  "url": "",
  "app_type": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: Your webhook callback url
  * app_type **required** `string`: Webhooks are only available for Welcome, enter app_camera.

#### Output
* output [NAWelcomeWebhookResponse](#nawelcomewebhookresponse)

### createnewschedule
The method createnewschedule creates a new schedule stored in the backup list.


```js
netatmo.createnewschedule({
  "device_id": "",
  "module_id": "",
  "therm_program": null
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: The relay id
  * module_id **required** `string`: The thermostat id
  * therm_program **required** [NAThermProgram](#nathermprogram)

#### Output
* output [NANewScheduleResponse](#nanewscheduleresponse)

### devicelist
The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.



```js
netatmo.devicelist({}, context)
```

#### Input
* input `object`
  * app_type `string` (values: app_thermostat, app_station): Defines which device type will be returned by devicelist. It could be app_thermostat or app_station (by default if not provided)
  * device_id `string`: Specify a device_id if you want to retrieve only this device informations.
  * get_favorites `boolean`: When set to "true", the favorite devices of the user are returned. This flag is available only if the devices requested are Weather Stations.

#### Output
* output [NADeviceListResponse](#nadevicelistresponse)

### dropwebhook
Dissociates a webhook from a user.



```js
netatmo.dropwebhook({
  "app_type": ""
}, context)
```

#### Input
* input `object`
  * app_type **required** `string`: For Welcome, use app_camera

#### Output
* output [NAWelcomeWebhookResponse](#nawelcomewebhookresponse)

### getcamerapicture
Returns the snapshot associated to an event.



```js
netatmo.getcamerapicture({
  "image_id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * image_id **required** `string`: id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)
  * key **required** `string`: Security key to access snapshots.

#### Output
* output `string`

### geteventsuntil
Returns the snapshot associated to an event.



```js
netatmo.geteventsuntil({
  "home_id": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * home_id **required** `string`: ID of the Home you're interested in
  * event_id **required** `string`: Your request will retrieve all the events until this one

#### Output
* output [NAWelcomeEventsResponse](#nawelcomeeventsresponse)

### gethomecoachsdata
The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).


```js
netatmo.gethomecoachsdata({}, context)
```

#### Input
* input `object`
  * device_id `string`: Id of the device you want to retrieve information of

#### Output
* output [NAHealthyHomeCoachDataResponse](#nahealthyhomecoachdataresponse)

### gethomedata
Returns information about users homes and cameras.



```js
netatmo.gethomedata({}, context)
```

#### Input
* input `object`
  * home_id `string`: Specify if you're looking for the events of a specific Home.
  * size `integer`: Number of events to retrieve. Default is 30.

#### Output
* output [NAWelcomeHomeDataResponse](#nawelcomehomedataresponse)

### getlasteventof
Returns most recent events.



```js
netatmo.getlasteventof({
  "home_id": "",
  "person_id": ""
}, context)
```

#### Input
* input `object`
  * home_id **required** `string`: ID of the Home you're interested in
  * person_id **required** `string`: Your request will retrieve all events of the given home until the most recent event of the given person
  * offset `integer`: Number of events to retrieve. Default is 30.

#### Output
* output [NAWelcomeEventsResponse](#nawelcomeeventsresponse)

### getmeasure
The method getmeasure returns the measurements of a device or a module.



```js
netatmo.getmeasure({
  "device_id": "",
  "scale": "",
  "type": []
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: Id of the device whose module's measurements you want to retrieve. This _id can be found in the user's devices field.
  * module_id `string`: If you don't specify any module_id you will retrieve the device's measurements. If you specify a module_id you will retrieve the module's measurements.
  * scale **required** `string` (values: max, 30min, 1hour, 3hours, 1day, 1week, 1month): Defines the time interval between two measurements.
  * type **required** `array`: Sets the type of measurement you want to retrieve.
  * date_begin `integer`: Starting timestamp (utc) of the requested measurements.
  * date_end `string`: Ending timestamp (utc) of the request measurements.
  * limit `integer`: Limits the number of measurements returned (default & max is 1024)
  * optimize `boolean`: Allows you to choose the format of the answer.
  * real_time `boolean`: In scales higher than max, since the data is aggregated, the timestamps returned are by default offset by +(scale/2).

#### Output
* output [NAMeasureResponse](#nameasureresponse)

### getnextevents
Returns previous events.



```js
netatmo.getnextevents({
  "home_id": "",
  "event_id": ""
}, context)
```

#### Input
* input `object`
  * home_id **required** `string`: ID of the Home you're interested in
  * event_id **required** `string`: Your request will retrieve events occured before this one
  * size `integer`: Number of events to retrieve. Default is 30.

#### Output
* output [NAWelcomeEventsResponse](#nawelcomeeventsresponse)

### getstationsdata
The method getstationsdata Returns data from a user Weather Stations (measures and device specific data).


```js
netatmo.getstationsdata({}, context)
```

#### Input
* input `object`
  * device_id `string`: Id of the device you want to retrieve information of

#### Output
* output [NAStationDataResponse](#nastationdataresponse)

### getthermostatsdata
The method getthermostatsdata returns information about user's thermostats such as their last measurements.


```js
netatmo.getthermostatsdata({}, context)
```

#### Input
* input `object`
  * device_id `string`: Id of the device you want to retrieve information of

#### Output
* output [NAThermostatDataResponse](#nathermostatdataresponse)

### getthermstate
The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.


```js
netatmo.getthermstate({
  "device_id": "",
  "module_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: The relay id
  * module_id **required** `string`: The thermostat id

#### Output
* output [NAThermStateResponse](#nathermstateresponse)

### getuser
The method getuser returns information about a user such as prefered language, prefered units, and list of devices.



```js
netatmo.getuser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [NAUserResponse](#nauserresponse)

### partnerdevices
The method partnerdevices returns the list of device_id to which your partner application has access to.


```js
netatmo.partnerdevices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [NAPartnerDevicesResponse](#napartnerdevicesresponse)

### setpersonsaway
Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.



```js
netatmo.setpersonsaway({
  "home_id": ""
}, context)
```

#### Input
* input `object`
  * home_id **required** `string`: ID of the Home you're interested in
  * person_id `string`: If a person_id is specified, that person will be set as 'Away'. If no person_id is specified, the Home will be set as 'Empty'.

#### Output
* output [NAWelcomePersonsAwayResponse](#nawelcomepersonsawayresponse)

### setthermpoint
The method setthermpoint changes the Thermostat manual temperature setpoint.


```js
netatmo.setthermpoint({
  "device_id": "",
  "module_id": "",
  "setpoint_mode": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: The relay id
  * module_id **required** `string`: The thermostat id
  * setpoint_mode **required** `string` (values: program, away, hg, manual, off, max): Chosen setpoint_mode
  * setpoint_endtime `integer`: When using the manual or max setpoint_mode, this parameter defines when the setpoint expires.
  * setpoint_temp `number`: When using the manual setpoint_mode, this parameter defines the temperature setpoint (in Celcius) to use.

#### Output
* output [NAOkResponse](#naokresponse)

### switchschedule
The method switchschedule switches the Thermostat's schedule to another existing schedule.


```js
netatmo.switchschedule({
  "device_id": "",
  "module_id": "",
  "schedule_id": ""
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: The relay id
  * module_id **required** `string`: The thermostat id
  * schedule_id **required** `string`: The schedule id. It can be found in the getthermstate response, under the keys "therm_program_backup" and "therm_program".

#### Output
* output [NAOkResponse](#naokresponse)

### syncschedule
The method syncschedule changes the Thermostat weekly schedule.


```js
netatmo.syncschedule({
  "device_id": "",
  "module_id": "",
  "therm_program": null
}, context)
```

#### Input
* input `object`
  * device_id **required** `string`: The relay id
  * module_id **required** `string`: The thermostat id
  * therm_program **required** [NAThermProgram](#nathermprogram)

#### Output
* output [NAOkResponse](#naokresponse)



## Definitions

### NADashboardData
* NADashboardData `object`
  * AbsolutePressure `number`: Real measured pressure @ time_utc (in mb)
  * BoilerOff `integer`
  * BoilerOn `integer`
  * CO2 `number`: Last Co2 measured @ time_utc (in ppm)
  * GustAngle `integer`: Direction of the last 5 min highest gust wind
  * GustStrength `integer`: Speed of the last 5 min highest gust wind
  * Humidity `number`: Last humidity measured @ time_utc (in %)
  * Noise `number`: Last noise measured @ time_utc (in db)
  * Pressure `number`: Last Sea level pressure measured @ time_utc (in mb)
  * Rain `number`: Last rain measured (in mm)
  * Temperature `number`: Last temperature measure @ time_utc (in °C)
  * WindAngle `integer`: Current 5 min average wind direction measured @ time_utc (in °)
  * WindStrength `integer`: Current 5 min average wind speed measured @ time_utc (in km/h)
  * date_max_temp `integer`: Timestamp when max temperature was measured
  * date_min_temp `integer`: Timestamp when min temperature was measured
  * device_id `number`
  * health_idx `integer`: Current health index: 0 = Healthy, 1 = Fine, 2 = Fair, 3 = Poor, 4 = Unhealthy
  * max_temp `number`: Min temperature of the day (measured @ date_min_temp)
  * min_temp `number`: Max temperature of the day (measured @ date_max_temp)
  * pressure_trend `string`: Pressure evolution trend
  * sum_rain_1 `number`: Amount of rain in last hour
  * sum_rain_24 `number`: Amount of rain today
  * temp_trend `string`: Temperature evolution trend
  * time_utc `integer`

### NADate
* NADate `object`
  * sec `integer`
  * usec `integer`

### NADevice
* NADevice `object`
  * _id `string`
  * behavior `integer`
  * cipher_id `string`
  * dashboard_data [NADashboardData](#nadashboarddata)
  * data_type `array`
    * items `string`
  * date_setup [NADate](#nadate)
  * firmware `integer`
  * first_pid_avail `boolean`
  * heating_system [NAHeatingSystem](#naheatingsystem)
  * house_model [NAHouseModel](#nahousemodel)
  * hw_version `integer`
  * ip `string`
  * last_fw_update `integer`
  * last_radio_store `integer`
  * last_status_store `integer`
  * last_upgrade `integer`
  * module_name `string`
  * modules `array`: It lists which modules are linked with this device
    * items `string`
  * new_feature_avail `boolean`
  * place [NAPlace](#naplace)
  * public_ext_data `boolean`
  * setpoint `object`
  * setpoint_default_duration `integer`
  * setpoint_order `object`
  * station_name `string`
  * therm_program `object`
  * therm_program_backup `object`
  * therm_program_order `object`
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :
  * udp_conn `boolean`
  * user_owner `array`
    * items `string`
  * wifi_status `integer`: It contains the current wifi status. The different thresholds to take into account are

### NADeviceListBody
* NADeviceListBody `object`
  * devices `array`
    * items [NADevice](#nadevice)
  * modules `array`
    * items [NAModule](#namodule)

### NADeviceListResponse
* NADeviceListResponse `object`
  * body [NADeviceListBody](#nadevicelistbody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAHealthyHomeCoach
* NAHealthyHomeCoach `object`
  * _id `string`
  * cipher_id `string`
  * co2_calibrating `boolean`
  * dashboard_data [NADashboardData](#nadashboarddata)
  * data_type `array`
    * items `string`
  * date_setup `integer`
  * firmware `integer`
  * last_setup `integer`
  * last_status_store `integer`
  * last_upgrade `integer`
  * name `string`
  * place [NAPlace](#naplace)
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :
  * wifi_status `integer`: It contains the current wifi status. The different thresholds to take into account are

### NAHealthyHomeCoachDataBody
* NAHealthyHomeCoachDataBody `object`
  * devices `array`
    * items [NAHealthyHomeCoach](#nahealthyhomecoach)
  * user [NAUser](#nauser)

### NAHealthyHomeCoachDataResponse
* NAHealthyHomeCoachDataResponse `object`
  * body [NAHealthyHomeCoachDataBody](#nahealthyhomecoachdatabody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAHeatingSystem
* NAHeatingSystem `object`
  * heating_energy `string`
  * heating_system_window_seen `boolean`

### NAHouseModel
* NAHouseModel `object`
  * algo_type `string`
  * ca [NAHouseModelCa](#nahousemodelca)
  * ext_temps `object`
  * first_anticipate_avail `boolean`
  * first_pid_avail `boolean`
  * gefs [NAStation](#nastation)
  * in_use `string`
  * last_compute_try [NADate](#nadate)
  * link_station [NALinkStation](#nalinkstation)
  * pid_algo [NAPidAlgo](#napidalgo)
  * prefered_algo_type `string`
  * simple_algo [NASimpleAlgo](#nasimplealgo)
  * station [NAStation](#nastation)
  * station_firsttime_anticipate `boolean`
  * time [NADate](#nadate)
  * time_algo_changed `integer`
  * time_pid_computed `integer`

### NAHouseModelCa
* NAHouseModelCa `object`
  * so `string`
  * te `number`
  * ti `integer`

### NALinkStation
* NALinkStation `object`
  * Temperature `number`
  * ext `string`
  * mac `string`

### NAMain
* NAMain `object`
  * _id `string`
  * cipher_id `string`
  * co2_calibrating `boolean`
  * dashboard_data [NADashboardData](#nadashboarddata)
  * data_type `array`
    * items `string`
  * date_setup `integer`
  * firmware `integer`
  * last_setup `integer`
  * last_status_store `integer`
  * last_upgrade `integer`
  * module_name `string`
  * modules `array`
    * items [NAStationModule](#nastationmodule)
  * place [NAPlace](#naplace)
  * station_name `string`
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :
  * wifi_status `integer`: It contains the current wifi status. The different thresholds to take into account are

### NAMeasureBodyElem
* NAMeasureBodyElem `object`
  * beg_time `integer`
  * step_time `integer`
  * value `array`
    * items `array`
      * items `number`

### NAMeasureResponse
* NAMeasureResponse `object`
  * body `array`
    * items [NAMeasureBodyElem](#nameasurebodyelem)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAModule
* NAModule `object`
  * _id `string`
  * battery_vp `integer`: It contains the current battery status. The threshold depends on the kind of module, below is the list of the different threshold to take into account according the module type.
  * dashboard_data [NADashboardData](#nadashboarddata)
  * data_type `array`
    * items `string`
  * date_setup [NADate](#nadate)
  * firmware `integer`
  * last_message `integer`
  * last_seen `integer`
  * main_device `string`
  * module_name `string`
  * public_ext_data `boolean`
  * rf_status `integer`: "It contains the current radio status. The different thresholds to take into account are :" |
  * therm_orientation `integer`
  * therm_relay_cmd `integer`
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :

### NANewScheduleBody
* NANewScheduleBody `object`
  * schedule_id `string`: Id of the schedule. It can be use with the method "switchschedule" 

### NANewScheduleResponse
* NANewScheduleResponse `object`
  * body [NANewScheduleBody](#nanewschedulebody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAObject
* NAObject `object`
  * $id `string`

### NAOkResponse
* NAOkResponse `object`
  * body `string`
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAPartnerDevicesResponse
* NAPartnerDevicesResponse `object`
  * body `array`
    * items `string`
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAPidAlgo
* NAPidAlgo `object`
  * gain `integer`
  * period `integer`
  * td `integer`
  * ti `integer`

### NAPlace
* NAPlace `object`
  * altitude `number`
  * city `string`
  * country `string`
  * from_ip `boolean`
  * improveLocProposed `boolean`
  * location `array`
    * items `number`
  * timezone `string`
  * trust_location `boolean`

### NAPlug
* NAPlug `object`
  * _id `string`
  * firmware `integer`
  * last_bilan [NAYearMonth](#nayearmonth)
  * last_plug_seen `integer`
  * last_status_store `integer`
  * modules `array`
    * items [NAThermostat](#nathermostat)
  * place [NAPlace](#naplace)
  * plug_connected_boiler `integer`
  * station_name `string`
  * syncing `boolean`
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :
  * udp_conn `boolean`
  * wifi_status `integer`: It contains the current wifi status. The different thresholds to take into account are

### NASetpoint
* NASetpoint `object`
  * setpoint_endtime `integer`
  * setpoint_mode `string`
  * setpoint_temp `number`

### NASetpointLog
* NASetpointLog `object`
  * setpoint [NASetpoint](#nasetpoint)
  * timestamp `integer`

### NASimpleAlgo
* NASimpleAlgo `object`
  * high_deadband `integer`

### NAStation
* NAStation `object`
  * lag_down `integer`
  * lag_up `integer`
  * off_overshoot `number`
  * on_overshoot `number`
  * pk `integer`
  * tau `integer`

### NAStationDataBody
* NAStationDataBody `object`
  * devices `array`
    * items [NAMain](#namain)
  * user [NAUser](#nauser)

### NAStationDataResponse
* NAStationDataResponse `object`
  * body [NAStationDataBody](#nastationdatabody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAStationModule
* NAStationModule `object`
  * _id `string`
  * battery_percent `integer`: It contains the current battery level in percentage.
  * battery_vp `integer`: It contains the current battery status. The threshold depends on the kind of module, below is the list of the different threshold to take into account according the module type.
  * dashboard_data [NADashboardData](#nadashboarddata)
  * data_type `array`
    * items `string`
  * firmware `integer`
  * last_message `integer`
  * last_seen `integer`
  * last_setup `integer`
  * module_name `string`
  * rf_status `integer`: "It contains the current radio status. The different thresholds to take into account are :" |
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :

### NAThermMeasure
* NAThermMeasure `object`
  * setpoint_temp `number`
  * temperature `number`
  * time `integer`

### NAThermProgram
* NAThermProgram `object`
  * name `string`
  * program_id `string`
  * selected `boolean`
  * timetable `array`
    * items [NATimeTableItem](#natimetableitem)
  * zones `array`
    * items [NAZone](#nazone)

### NAThermStateBody
* NAThermStateBody `object`
  * battery_vp `integer`
  * last_plug_seen `integer`
  * last_therm_seen `integer`
  * measured [NAThermMeasure](#nathermmeasure)
  * plug_connected_boiler `integer`
  * rf_status `integer`
  * setpoint [NASetpoint](#nasetpoint)
  * setpoint_order [NASetpoint](#nasetpoint)
  * therm_orientation `integer`
  * therm_program [NAThermProgram](#nathermprogram)
  * therm_program_backup `array`
    * items [NAThermProgram](#nathermprogram)
  * therm_program_order [NAThermProgram](#nathermprogram)
  * therm_relay_cmd `integer`
  * udp_conn `boolean`
  * wifi_status `integer`

### NAThermStateResponse
* NAThermStateResponse `object`
  * body [NAThermStateBody](#nathermstatebody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAThermostat
* NAThermostat `object`
  * _id `string`
  * battery_vp `integer`: It contains the current battery status. The threshold depends on the kind of module, below is the list of the different threshold to take into account according the module type.
  * firmware `integer`
  * last_message `integer`
  * last_therm_seen `integer`
  * measured [NAThermMeasure](#nathermmeasure)
  * module_name `string`
  * rf_status `integer`: "It contains the current radio status. The different thresholds to take into account are :" |
  * setpoint [NASetpoint](#nasetpoint)
  * setpoint_history `array`: The last 20 setpoints (mode, endtime, and timestamp) the thermostats has entered.
    * items [NASetpointLog](#nasetpointlog)
  * setpoint_order [NASetpoint](#nasetpoint)
  * therm_orientation `integer`
  * therm_program_list `array`: List of the weekly heating planning used by the thermostat
    * items [NAThermProgram](#nathermprogram)
  * therm_relay_cmd `integer`
  * type `string`: Included in every device or module. It defines the type of the device/module. Its values are among :

### NAThermostatDataBody
* NAThermostatDataBody `object`
  * devices `array`
    * items [NAPlug](#naplug)
  * user [NAUser](#nauser)

### NAThermostatDataResponse
* NAThermostatDataResponse `object`
  * body [NAThermostatDataBody](#nathermostatdatabody)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NATimeTableItem
* NATimeTableItem `object`
  * id `integer`
  * m_offset `integer`

### NAUser
* NAUser `object`
  * _id `string`
  * administrative [NAUserAdministrative](#nauseradministrative)
  * date_creation [NADate](#nadate)
  * devices `array`: An array of string containing the ids of the devices owned by the user
    * items `string`
  * friend_devices `array`: An array of string containing the ids of the devices on which the user has a "guest" access
    * items `string`
  * mail `string`
  * timeline_not_read `integer`
  * timeline_size `integer`

### NAUserAdministrative
* NAUserAdministrative `object`
  * country `string`: user country
  * feel_like_algo `string`: algorithm used to compute feel like temperature, 0 -> humidex, 1 -> heat-index
  * lang `string`: user locale
  * pressureunit `string`: 0 -> mbar, 1 -> inHg, 2 -> mmHg
  * reg_locale `string`: user regional preferences (used for displaying date)
  * unit `string`: 0 -> metric system, 1 -> imperial system
  * windunit `string`: 0 -> kph, 1 -> mph, 2 -> ms, 3 -> beaufort, 4 -> knot

### NAUserResponse
* NAUserResponse `object`
  * body [NAUser](#nauser)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAWelcomeCameras
* NAWelcomeCameras `object`
  * alim_status `string`: If power supply is ok (on/off)
  * id `string`: Id of the camera
  * is_local `boolean`: Only for scope access_camera. If Camera and application requesting the information are on the same IP (true/false)
  * name `string`: Name of the camera
  * sd_status `string`: If SD card status is ok (on/off)
  * status `string`: If camera is monitoring (on/off)
  * type `string`: Type of the camera
  * vpn_url `string`: Only for scope access_camera. Address of the camera

### NAWelcomeEvents
* NAWelcomeEvents `object`
  * camera_id `string`: Camera that detected the event
  * id `string`: Identifier of the event
  * is_arrival `boolean`: If person was considered away before being seen during this event
  * message `string`: User facing event description
  * person_id `string`: Id of the person the event is about (if any)
  * snapshot [NAWelcomeSnapshot](#nawelcomesnapshot)
  * sub_type `integer`: Subtypes of SD and Alim events. Go to Welcome page for further details.
  * time `integer`: Time of occurence of event
  * type `string`: Type of events. Go to the Welcome page for further details.
  * video_id `string`: Identifier of the video
  * video_status `string`: Status of the video (recording, deleted or available)

### NAWelcomeEventsData
* NAWelcomeEventsData `object`
  * events_list `array`
    * items [NAWelcomeEvents](#nawelcomeevents)

### NAWelcomeEventsResponse
* NAWelcomeEventsResponse `object`
  * body [NAWelcomeEventsData](#nawelcomeeventsdata)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAWelcomeFace
* NAWelcomeFace `object`
  * id `string`: Id of the face.
  * key `string`: Key for this face to use in getcamerapicture.
  * version `integer`: Version of the face if user changed their photo.

### NAWelcomeGlobalInfo
* NAWelcomeGlobalInfo `object`
  * show_tags `boolean`: show tags

### NAWelcomeHomeData
* NAWelcomeHomeData `object`
  * global_info [NAWelcomeGlobalInfo](#nawelcomeglobalinfo)
  * homes `array`
    * items [NAWelcomeHomes](#nawelcomehomes)
  * user [NAWelcomeUser](#nawelcomeuser)

### NAWelcomeHomeDataResponse
* NAWelcomeHomeDataResponse `object`
  * body [NAWelcomeHomeData](#nawelcomehomedata)
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAWelcomeHomes
* NAWelcomeHomes `object`
  * cameras `array`
    * items [NAWelcomeCameras](#nawelcomecameras)
  * events `array`
    * items [NAWelcomeEvents](#nawelcomeevents)
  * id `string`: Id of the home.
  * modules `array`
    * items [NAWelcomeModules](#nawelcomemodules)
  * name `string`: Name of the home
  * persons `array`
    * items [NAWelcomePersons](#nawelcomepersons)
  * place [NAWelcomePlace](#nawelcomeplace)

### NAWelcomeModules
* NAWelcomeModules `object`
  * battery_percent `integer`: remaining battery percentage
  * id `string`: mac address of the module
  * last_activity `integer`: Timestamp of last move detected by the module
  * name `string`: name of the module (given by the user)
  * rf `string`: Radio status
  * status `string`: status of the module
  * type `string`: NACamDoorTag for tags

### NAWelcomePersons
* NAWelcomePersons `object`
  * face [NAWelcomeFace](#nawelcomeface)
  * id `string`: Id of the person.
  * last_seen `integer`: Time at which the person was last seen.
  * out_of_sight `boolean`: True if the Person is out of sight.
  * pseudo `string`: Name of the person, if pseudo is missing, person is unknown.

### NAWelcomePersonsAwayResponse
* NAWelcomePersonsAwayResponse `object`
  * status `string`
  * time_exec `number`
  * time_server `integer`

### NAWelcomePlace
* NAWelcomePlace `object`
  * city `string`: City of the home.
  * country `string`: Country of the home.
  * timezone `string`: Timezone of the home.

### NAWelcomeSnapshot
* NAWelcomeSnapshot `object`
  * id `string`: Id of the snapshot.
  * key `string`: Key for this snapshot.
  * version `integer`: Version of the snapshot.

### NAWelcomeUser
* NAWelcomeUser `object`
  * lang `string`: user locale
  * reg_locale `string`: user regional preferences (used for displaying date)

### NAWelcomeWebhookResponse
* NAWelcomeWebhookResponse `object`
  * status `string`
  * time_exec `number`

### NAYearMonth
* NAYearMonth `object`
  * m `integer`
  * y `integer`

### NAZone
* NAZone `object`
  * id `integer`
  * name `string`
  * temp `number`
  * type `integer`


