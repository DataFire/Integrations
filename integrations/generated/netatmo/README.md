# @datafire/netatmo
<h3>Welcome to the Netatmo swagger on-line documentation !</h3>This site is a complement to the official <a href="https://dev.netatmo.com/">Netatmo developper documentation</a> using swagger to bring interactivity and easy testing of requests with the "try it" button (authenticate with the authorization code 0Auth2 flow by clicking the authenticate button in the methods). You can find the source code for this site can be found in the project <a href="https://github.com/cbornet/netatmo-swagger-ui">netatmo-swagger-ui</a>. You can also use the online <a href="./swagger.json">swagger declaration</a> file to generate code or static documentation (see <a href="https://github.com/cbornet/netatmo-swagger-api">netatmo-swagger-api</a>).

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: addwebhook
Links a callback url to a user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Your webhook callback url"
    },
    "app_type": {
      "type": "string",
      "description": "Webhooks are only available for Welcome, enter app_camera."
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "app_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeWebhookResponse"
}
```
## Operation: createnewschedule
The method createnewschedule creates a new schedule stored in the backup list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "The relay id"
    },
    "module_id": {
      "type": "string",
      "description": "The thermostat id"
    },
    "therm_program": {
      "$ref": "#/definitions/NAThermProgram"
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "module_id",
    "therm_program"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NANewScheduleResponse"
}
```
## Operation: devicelist
The method devicelist returns the list of devices owned by the user, and their modules.
A device is identified by its _id (which is its mac address) and each device may have one, several or no modules, also identified by an _id.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "app_type": {
      "type": "string",
      "description": "Defines which device type will be returned by devicelist. It could be app_thermostat or app_station (by default if not provided)",
      "enum": [
        "app_thermostat",
        "app_station"
      ]
    },
    "device_id": {
      "type": "string",
      "description": "Specify a device_id if you want to retrieve only this device informations."
    },
    "get_favorites": {
      "type": "boolean",
      "description": "When set to \"true\", the favorite devices of the user are returned. This flag is available only if the devices requested are Weather Stations."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NADeviceListResponse"
}
```
## Operation: dropwebhook
Dissociates a webhook from a user.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "app_type": {
      "type": "string",
      "description": "For Welcome, use app_camera"
    }
  },
  "additionalProperties": false,
  "required": [
    "app_type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeWebhookResponse"
}
```
## Operation: getcamerapicture
Returns the snapshot associated to an event.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "image_id": {
      "type": "string",
      "description": "id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)"
    },
    "key": {
      "type": "string",
      "description": "Security key to access snapshots."
    }
  },
  "additionalProperties": false,
  "required": [
    "image_id",
    "key"
  ]
}
```
### Output Schema
```json
{
  "format": "byte",
  "type": "string"
}
```
## Operation: geteventsuntil
Returns the snapshot associated to an event.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "home_id": {
      "type": "string",
      "description": "ID of the Home you're interested in"
    },
    "event_id": {
      "type": "string",
      "description": "Your request will retrieve all the events until this one"
    }
  },
  "additionalProperties": false,
  "required": [
    "home_id",
    "event_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeEventsResponse"
}
```
## Operation: gethomedata
Returns information about users homes and cameras.


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "home_id": {
      "type": "string",
      "description": "Specify if you're looking for the events of a specific Home."
    },
    "size": {
      "type": "integer",
      "description": "Number of events to retrieve. Default is 30."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeHomeDataResponse"
}
```
## Operation: getlasteventof
Returns most recent events.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "home_id": {
      "type": "string",
      "description": "ID of the Home you're interested in"
    },
    "person_id": {
      "type": "string",
      "description": "Your request will retrieve all events of the given home until the most recent event of the given person"
    },
    "offset": {
      "type": "integer",
      "description": "Number of events to retrieve. Default is 30."
    }
  },
  "additionalProperties": false,
  "required": [
    "home_id",
    "person_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeEventsResponse"
}
```
## Operation: getmeasure
The method getmeasure returns the measurements of a device or a module.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "Id of the device whose module's measurements you want to retrieve. This _id can be found in the user's devices field."
    },
    "module_id": {
      "type": "string",
      "description": "If you don't specify any module_id you will retrieve the device's measurements. If you specify a module_id you will retrieve the module's measurements."
    },
    "scale": {
      "type": "string",
      "description": "Defines the time interval between two measurements.\nPossible values :\nmax -> every value stored will be returned\n30min -> 1 value every 30 minutes\n1hour -> 1 value every hour\n3hours -> 1 value every 3 hours\n1day -> 1 value per day\n1week -> 1 value per week\n1month -> 1 value per month\n",
      "enum": [
        "max",
        "30min",
        "1hour",
        "3hours",
        "1day",
        "1week",
        "1month"
      ]
    },
    "type": {
      "type": "array",
      "description": "Sets the type of measurement you want to retrieve.\nThe different types of measurements must be given in a comma separated list of strings.\nExample: type=\"Temperature,Humidity\"\nDepending on the device's type and the scale, different measurements are available:\nFor Weather Station :\n\n  max -> Temperature, CO2, Humidity, Pressure, Noise, Rain (if\nmodule_id is a rain sensor)\n\n  30min, 1hour, 3hours -> Temperature, CO2, Humidity, Pressure,\nNoise, min_temp, max_temp, min_hum, max_hum, min_pressure, max_pressure, min_noise, max_noise, sum_rain (if module_id is a rain sensor)\n\n  1day, 1week, 1month -> Temperature, Co2, Humidity, Pressure, Noise,\nmin_temp, date_min_temp, max_temp, date_max_temp, min_hum, date_min_hum, max_hum, date_max_hum, min_pressure, date_min_pressure, max_pressure, date_max_pressure, min_noise, date_min_noise, max_noise, date_max_noise, date_min_co2, date_max_co2, sum_rain (if module_id is a rain sensor)\nPlease note, the measurements sent in the response will be in the same order as in this list.\nAll measurements are expressed in metric units:\n\n  Temperature: Celsius\n\n  Humidity: %\n\n  Co2: ppm\n\n  Pressure: mbar\n\n  Noise: db\n\n  Rain: mm\n\nFor Thermostat:\n\n  max -> Temperature, Sp_Temperature, BoilerOn, BoilerOff\n\n  30min, 1hour, 3hours -> Temperature, Sp_Temperature, min_temp,\nmax_temp, sum_boiler_on, sum_boiler_off\n\n  1day, 1week, 1month -> Temperature, min_temp, date_min_temp,\nmax_temp, sum_boiler_on, sum_boiler_off\n\n  where\n\nTemperature: Celsius\n\n  Sp_Temperature (temperature setpoint): Celsius\n\n  BoilerOn: Duration, since the previous data point, during which the\nboiler has been on (in seconds)\n\n  BoilerOff : Duration, since the previous data point, during which\nthe boiler has been off (in seconds).\n\n  sum_boiler_on: Total duration during which the boiler has been on,\nat a specific scale (in seconds).\n\n  sum_boiler_off: Total duration during which the boiler has been\noff, at a specific scale (in seconds).\n"
    },
    "date_begin": {
      "type": "integer",
      "format": "int32",
      "description": "Starting timestamp (utc) of the requested measurements.\nPlease note measurement retrieving is limited to 1024 measurements. \n"
    },
    "date_end": {
      "type": "string",
      "description": "Ending timestamp (utc) of the request measurements.\nIf you want only the last measurement, do not provide date_begin, and set date_end to \"last\". \n"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limits the number of measurements returned (default & max is 1024)",
      "maximum": 1024
    },
    "optimize": {
      "type": "boolean",
      "description": "Allows you to choose the format of the answer.\nIf you build a mobile app and bandwith usage is an issue, use optimize = true.\nUse optimize = false, for an easier parse. In this case, values are indexed by sorted timestamp.\nExample of un-optimized response :\n{\"status\": \"ok\", \n  \"body\": {\n    \"1347575400\": [18.3,39],\n    \"1347586200\": [20.6,48]\n  },\n\"time_exec\": 0.012136936187744}\nIf optimize is set true, measurements are returned as an array of series of regularly spaced measurements. Each series is defined by a beginning time beg_time and a step between measurements, step_time:\n{\"status\": \"ok\",\n  \"body\": [\n    {\"beg_time\": 1347575400,\n     \"step_time\": 10800,\n     \"value\": \n        [[18.3,39],\n        [ 20.6,48]]\n    }],\n\"time_exec\": 0.014238119125366}\nDefault value is true.\n"
    },
    "real_time": {
      "type": "boolean",
      "description": "In scales higher than max, since the data is aggregated, the timestamps returned are by default offset by +(scale/2).\nFor instance, if you ask for measurements at a daily scale, you will receive data timestamped at 12:00 if real_time is set to false (default case), and timestamped at 00:00 if real_time is set to true.\nNB : The servers always store data with real_time set to true and data are offset by this parameter AFTER having being time-filtered, thus you could have data after date_end if real_time is set to false.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "scale",
    "type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAMeasureResponse"
}
```
## Operation: getnextevents
Returns previous events.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "home_id": {
      "type": "string",
      "description": "ID of the Home you're interested in"
    },
    "event_id": {
      "type": "string",
      "description": "Your request will retrieve events occured before this one"
    },
    "size": {
      "type": "integer",
      "description": "Number of events to retrieve. Default is 30."
    }
  },
  "additionalProperties": false,
  "required": [
    "home_id",
    "event_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomeEventsResponse"
}
```
## Operation: getstationsdata
The method getstationsdata Returns data from a user Weather Stations (measures and device specific data).

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "device_id": {
      "type": "string",
      "description": "Id of the device you want to retrieve information of"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAStationDataResponse"
}
```
## Operation: getthermostatsdata
The method getthermostatsdata returns information about user's thermostats such as their last measurements.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "device_id": {
      "type": "string",
      "description": "Id of the device you want to retrieve information of"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAThermostatDataResponse"
}
```
## Operation: getthermstate
The method getthermstate returns the last Thermostat measurements, its current weekly schedule, and, if present, its current manual temperature setpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "The relay id"
    },
    "module_id": {
      "type": "string",
      "description": "The thermostat id"
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "module_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAThermStateResponse"
}
```
## Operation: getuser
The method getuser returns information about a user such as prefered language, prefered units, and list of devices.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAUserResponse"
}
```
## Operation: partnerdevices
The method partnerdevices returns the list of device_id to which your partner application has access to.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAPartnerDevicesResponse"
}
```
## Operation: setpersonsaway
Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "home_id": {
      "type": "string",
      "description": "ID of the Home you're interested in"
    },
    "person_id": {
      "type": "string",
      "description": "If a person_id is specified, that person will be set as 'Away'. If no person_id is specified, the Home will be set as 'Empty'."
    }
  },
  "additionalProperties": false,
  "required": [
    "home_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAWelcomePersonsAwayResponse"
}
```
## Operation: setthermpoint
The method setthermpoint changes the Thermostat manual temperature setpoint.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "The relay id"
    },
    "module_id": {
      "type": "string",
      "description": "The thermostat id"
    },
    "setpoint_mode": {
      "type": "string",
      "description": "Chosen setpoint_mode",
      "enum": [
        "program",
        "away",
        "hg",
        "manual",
        "off",
        "max"
      ]
    },
    "setpoint_endtime": {
      "type": "integer",
      "format": "int32",
      "description": "When using the manual or max setpoint_mode, this parameter defines when the setpoint expires."
    },
    "setpoint_temp": {
      "type": "number",
      "format": "float",
      "description": "When using the manual setpoint_mode, this parameter defines the temperature setpoint (in Celcius) to use."
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "module_id",
    "setpoint_mode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAOkResponse"
}
```
## Operation: switchschedule
The method switchschedule switches the Thermostat's schedule to another existing schedule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "The relay id"
    },
    "module_id": {
      "type": "string",
      "description": "The thermostat id"
    },
    "schedule_id": {
      "type": "string",
      "description": "The schedule id. It can be found in the getthermstate response, under the keys \"therm_program_backup\" and \"therm_program\".\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "module_id",
    "schedule_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAOkResponse"
}
```
## Operation: syncschedule
The method syncschedule changes the Thermostat weekly schedule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_id": {
      "type": "string",
      "description": "The relay id"
    },
    "module_id": {
      "type": "string",
      "description": "The thermostat id"
    },
    "therm_program": {
      "$ref": "#/definitions/NAThermProgram"
    }
  },
  "additionalProperties": false,
  "required": [
    "device_id",
    "module_id",
    "therm_program"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NAOkResponse"
}
```
