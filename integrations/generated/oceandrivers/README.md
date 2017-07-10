# @datafire/oceandrivers
This is the api to access the ODWeather API information

## Operation: compareStation
Get forecast and realtime information for known points<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stationName": {
      "type": "string",
      "description": "Weather station to compare, values: cnareanl|cmsap|boyaenderrocat|areopuertopalma"
    }
  },
  "additionalProperties": false,
  "required": [
    "stationName"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAemetStation
Get data from the aemet stations<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stationName": {
      "type": "string",
      "description": "station name currently: aeropuertopalma | caboblanco "
    },
    "period": {
      "type": "string",
      "description": "Period of time to get the data. Options: lastdata lastday"
    }
  },
  "additionalProperties": false,
  "required": [
    "stationName",
    "period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getForecastPoints
Get forecast points of a yatchclub<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "yatchclubid": {
      "type": "string",
      "description": "base URL for the the"
    },
    "language": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "yatchclubid",
    "language"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getForecastTimeSeries
Get timeseries forecast information<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "latitude": {
      "type": "number",
      "format": "float",
      "description": "latitude for the forecast"
    },
    "longitude": {
      "type": "number",
      "format": "float",
      "description": "longitude for the forecast"
    },
    "inittime": {
      "type": "string",
      "description": "initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ"
    },
    "endtime": {
      "type": "string",
      "description": "end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ"
    },
    "days": {
      "type": "integer",
      "format": "int32",
      "description": "optional number of days in string. Will be added to init forecast date"
    },
    "hours": {
      "type": "integer",
      "format": "int32",
      "description": "optional number of hours in string. Will be added to init forecast date"
    },
    "weather": {
      "type": "string",
      "description": " Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period"
    },
    "wave": {
      "type": "string",
      "description": " Comma separated values for the wave parameteres height,direction,period"
    },
    "entryid": {
      "type": "string",
      "description": "Direct file I want to extract"
    }
  },
  "additionalProperties": false,
  "required": [
    "latitude",
    "longitude",
    "weather"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getForecastTimeSeriesWrf
Get timeseries forecast information<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "latitude": {
      "type": "number",
      "format": "float",
      "description": "latitude for the forecast"
    },
    "longitude": {
      "type": "number",
      "format": "float",
      "description": "longitude for the forecast"
    },
    "inittime": {
      "type": "string",
      "description": "initial date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ"
    },
    "endtime": {
      "type": "string",
      "description": "end date for the forecast ISO string YYYY-MM-DDTHH:mm:SS.SZ"
    },
    "days": {
      "type": "integer",
      "format": "int32",
      "description": "optional number of days in string. Will be added to init forecast date"
    },
    "hours": {
      "type": "integer",
      "format": "int32",
      "description": "optional number of hours in string. Will be added to init forecast date"
    },
    "weather": {
      "type": "string",
      "description": " Comma separated values for the weather parameteres temperature,rain,wind_u,wind_v,gust,pressure,cloud,humidity&wave=height,direction,period"
    },
    "wave": {
      "type": "string",
      "description": " Comma separated values for the wave parameteres height,direction,period"
    },
    "entryid": {
      "type": "string",
      "description": "Direct file I want to extract"
    }
  },
  "additionalProperties": false,
  "required": [
    "latitude",
    "longitude",
    "weather"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getSocibWeatherStation
Get data from the socib bahia de palma buoy<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stationName": {
      "type": "string",
      "description": "station name currently: boyaenderrocat | playadepalma"
    },
    "period": {
      "type": "string",
      "description": "Period of time to get the data. Options: lastdata lasthour lastday"
    }
  },
  "additionalProperties": false,
  "required": [
    "stationName",
    "period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWeatherDisplay
Get data from the weather display software<br/>None

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "stationName": {
      "type": "string",
      "description": "currently: 'cnarenal'|'campastilla' | 'cncg'"
    },
    "period": {
      "type": "string",
      "description": "Period of time to get the data latestdata|latesthour|latestday|dailylog"
    }
  },
  "additionalProperties": false,
  "required": [
    "stationName",
    "period"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getWebCams
Get forecast and realtime information for known points<br/>None

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
