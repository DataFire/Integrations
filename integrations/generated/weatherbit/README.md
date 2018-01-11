# @datafire/weatherbit

Client library for Weatherbit.io - Weather

## Installation and Usage
```bash
npm install --save @datafire/weatherbit
```
```js
let weatherbit = require('@datafire/weatherbit').create();

weatherbit.bulk.history.daily_city_city_country_country.get({}).then(data => {
  console.log(data);
})
```

## Description

This is the documentation for the Weatherbit API.  The base URL for the API is [http://api.weatherbit.io/v2.0/](http://api.weatherbit.io/v2.0/) or [https://api.weatherbit.io/v2.0/](http://api.weatherbit.io/v2.0/). Below is the Swagger UI documentation for the API. All API requests require the `key` parameter.        An Example for a 5 day forecast for London, UK would be `http://api.weatherbit.io/v2.0/forecast/3hourly?city=London`&`country=UK`

## Actions

### bulk.history.daily_city_city_country_country.get
Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.


```js
weatherbit.bulk.history.daily_city_city_country_country.get({
  "city": "",
  "country": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.daily_city_id_city_id.get
Returns Historical Observations - Given a City ID.


```js
weatherbit.bulk.history.daily_city_id_city_id.get({
  "city_id": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`: City ID. Example: 4487042
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.daily_ip_ip.get
Returns Historical Observations - Given IP Address, or auto.


```js
weatherbit.bulk.history.daily_ip_ip.get({
  "ip": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP Address, or auto. Example: ip=auto
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.daily_lat_lat_lon_lon.get
Returns Historical Observations - Given a lat, and lon.


```js
weatherbit.bulk.history.daily_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.daily_postal_code_postal_code.get
Returns Historical Observations - Given a Postal Code.


```js
weatherbit.bulk.history.daily_postal_code_postal_code.get({
  "postal_code": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `string`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.daily_station_station.get
Returns Historical Observations - Given a station ID.


```js
weatherbit.bulk.history.daily_station_station.get({
  "station": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * station **required** `string`: Station ID.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### bulk.history.hourly_city_city_country_country.get
Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.


```js
weatherbit.bulk.history.hourly_city_city_country_country.get({
  "city": "",
  "country": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.history.hourly_city_id_city_id.get
Returns Historical Observations - Given a City ID.


```js
weatherbit.bulk.history.hourly_city_id_city_id.get({
  "city_id": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`: City ID. Example: 4487042
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.history.hourly_ip_ip.get
Returns Historical Observations - Given IP Address, or auto.


```js
weatherbit.bulk.history.hourly_ip_ip.get({
  "ip": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP Address, or auto. Example: ip=auto
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.history.hourly_lat_lat_lon_lon.get
Returns Historical Observations - Given a lat, and lon.


```js
weatherbit.bulk.history.hourly_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.history.hourly_postal_code_postal_code.get
Returns Historical Observations - Given a Postal Code. 


```js
weatherbit.bulk.history.hourly_postal_code_postal_code.get({
  "postal_code": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `string`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.history.hourly_station_station.get
Returns Historical Observations - Given a station ID.


```js
weatherbit.bulk.history.hourly_station_station.get({
  "station": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * station **required** `string`: Station ID.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### bulk.file.get
**(Advanced/Advanced+/Enterprise plans only)** Downloads bulk data files - OPTIONS: (forecast16d.json.gz - 16 day forecasts for cities > 1000 population, current.json.gz - Current observations for cities > 1000 population).


```js
weatherbit.bulk.file.get({
  "file": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`: Filename (ie. forecast16d.json.gz)
  * key **required** `string`: Your registered API key.

#### Output
* output [Error](#error)

### current_cities_cities.get
**(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of City IDs. 


```js
weatherbit.current_cities_cities.get({
  "cities": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * cities **required** `string`: Comma separated list of City ID's. Example: 4487042, 4494942, 4504871
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_city_city_country_country.get
Returns a Current Observation - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.


```js
weatherbit.current_city_city_country_country.get({
  "city": "",
  "country": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_city_id_city_id.get
Returns current weather observation - Given a City ID. 


```js
weatherbit.current_city_id_city_id.get({
  "city_id": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`: City ID. Example: 4487042
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_ip_ip.get
Returns a Current Observation - Given an IP address, or auto.


```js
weatherbit.current_ip_ip.get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP Address, or auto. Example: ip=auto
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_lat_lat_lon_lon.get
Returns a Current Observation - given a lat, and a lon.


```js
weatherbit.current_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_postal_code_postal_code.get
Returns current weather observation - Given a Postal Code. 


```js
weatherbit.current_postal_code_postal_code.get({
  "postal_code": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `string`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * marine `string` (values: t): Marine stations only (buoys, oil platforms, etc)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback - Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_station_station.get
Returns a Current Observation - Given a station ID.


```js
weatherbit.current_station_station.get({
  "station": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * station **required** `string`: Station Call ID.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### current_stations_stations.get
**(Advanced/Advanced+/Enterprise plans only)** Returns a group of Current Observations - Given a list of Station Call IDs. 


```js
weatherbit.current_stations_stations.get({
  "stations": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * stations **required** `string`: Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [CurrentObsGroup](#currentobsgroup)

### forecast.3hourly_city_city_country_country.get
Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.



```js
weatherbit.forecast.3hourly_city_city_country_country.get({
  "city": "",
  "country": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * days `number`: Number of days to return. Default 5.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.3hourly_city_id_city_id.get
Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.



```js
weatherbit.forecast.3hourly_city_id_city_id.get({
  "city_id": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `integer`: City ID. Example: 4487042
  * days `number`: Number of days to return. Default 5.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.3hourly_ip_ip.get
Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.



```js
weatherbit.forecast.3hourly_ip_ip.get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP address, or auto. Example: ip=auto
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.3hourly_lat_lat_lon_lon.get
Returns a 3-hourly forecast, where each point represents a three hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.



```js
weatherbit.forecast.3hourly_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * days `number`: Number of days to return. Default 5.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.3hourly_postal_code_postal_code.get
Returns a 3-hourly forecast, where each point represents a three hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC.



```js
weatherbit.forecast.3hourly_postal_code_postal_code.get({
  "postal_code": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `integer`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * days `number`: Number of days to return. Default 5.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.daily_city_city_country_country.get
**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.



```js
weatherbit.forecast.daily_city_city_country_country.get({
  "city": "",
  "country": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastDay](#forecastday)

### forecast.daily_city_id_city_id.get
**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.



```js
weatherbit.forecast.daily_city_id_city_id.get({
  "city_id": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `integer`: City ID. Example: 4487042
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastDay](#forecastday)

### forecast.daily_ip_ip.get
**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. 



```js
weatherbit.forecast.daily_ip_ip.get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP address, or auto. Example: ip=auto
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastDay](#forecastday)

### forecast.daily_lat_lat_lon_lon.get
**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC. 



```js
weatherbit.forecast.daily_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastDay](#forecastday)

### forecast.daily_postal_code_postal_code.get
**(REQUIRED: Basic Plan or Higher)** Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format "YYYY-MM-DD". One day begins at 00:00 UTC, and ends at 23:59 UTC.



```js
weatherbit.forecast.daily_postal_code_postal_code.get({
  "postal_code": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `integer`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastDay](#forecastday)

### forecast.hourly_city_city_country_country.get
**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. Accepts a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate.



```js
weatherbit.forecast.hourly_city_city_country_country.get({
  "city": "",
  "country": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * hours `integer`: Number of hours to return.
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.hourly_city_id_city_id.get
**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. 



```js
weatherbit.forecast.hourly_city_id_city_id.get({
  "city_id": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `integer`: City ID. Example: 4487042
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * hours `integer`: Number of hours to return.
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.hourly_ip_ip.get
**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. 



```js
weatherbit.forecast.hourly_ip_ip.get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP address, or auto. Example: ip=auto
  * days `number`: Number of days to return. Default 16.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * hours `integer`: Number of hours to return.
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.hourly_lat_lat_lon_lon.get
**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. 



```js
weatherbit.forecast.hourly_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * key **required** `string`: Your registered API key.
  * hours `integer`: Number of hours to return.

#### Output
* output [ForecastHourly](#forecasthourly)

### forecast.hourly_postal_code_postal_code.get
**(REQUIRED: Developer Plan or Higher)** Returns an hourly forecast, where each point represents a one hour   period. Every point has a datetime string in the format "YYYY-MM-DD:HH". Time is UTC. 



```js
weatherbit.forecast.hourly_postal_code_postal_code.get({
  "postal_code": 0,
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `integer`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example - callback=func
  * hours `integer`: Number of hours to return.
  * key **required** `string`: Your registered API key.

#### Output
* output [ForecastHourly](#forecasthourly)

### history.daily_city_city_country_country.get
Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_city_city_country_country.get({
  "city": "",
  "country": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.daily_city_id_city_id.get
Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_city_id_city_id.get({
  "city_id": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`: City ID. Example: 4487042
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.daily_ip_ip.get
Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_ip_ip.get({
  "ip": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP Address, or auto. Example: ip=auto
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.daily_lat_lat_lon_lon.get
Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.daily_postal_code_postal_code.get
Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_postal_code_postal_code.get({
  "postal_code": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `string`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.daily_station_station.get
Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.daily_station_station.get({
  "station": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * station **required** `string`: Station ID.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [HistoryDay](#historyday)

### history.energy.bbox_lat1_lat1_lon1_lon1_lat2_lat2_lon2_lon2.get
Returns aggregate energy specific historical weather fields, over a specified time period. Supply a bounding box ex: lat1=40&lon1=-78&lat2=38&lon2=-80. This API will return UP TO 150 stations, aggregated by the specified time period start_date to end_date. 


```js
weatherbit.history.energy.bbox_lat1_lat1_lon1_lon1_lat2_lat2_lon2_lon2.get({
  "lat1": 0,
  "lon1": 0,
  "lat2": 0,
  "lon2": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat1 **required** `number`: Latitude of upper left corner.
  * lon1 **required** `number`: Longitude of upper left corner.
  * lat2 **required** `number`: Latitude of lower right corner.
  * lon2 **required** `number`: Longitude of lower right corner.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [EnergyObsGroup](#energyobsgroup)

### history.energy_lat_lat_lon_lon.get
Returns aggregate energy specific historical weather fields, over a specified time period.


```js
weatherbit.history.energy_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [EnergyObsGroup](#energyobsgroup)

### history.hourly_city_city_country_country.get
Returns Historical Observations - Given a city in the format of City,ST or City. The state, and country parameters can be provided to make the search more accurate. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_city_city_country_country.get({
  "city": "",
  "country": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city **required** `string`: City search. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR
  * state `string`: Full name of state.
  * country **required** `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### history.hourly_city_id_city_id.get
Returns Historical Observations - Given a City ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_city_id_city_id.get({
  "city_id": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * city_id **required** `string`: City ID. Example: 4487042
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### history.hourly_ip_ip.get
Returns Historical Observations - Given IP Address, or auto. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_ip_ip.get({
  "ip": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP Address, or auto. Example: ip=auto
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### history.hourly_lat_lat_lon_lon.get
Returns Historical Observations - Given a lat, and lon. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_lat_lat_lon_lon.get({
  "lat": 0,
  "lon": 0,
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `number`: Latitude component of location.
  * lon **required** `number`: Longitude component of location.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### history.hourly_postal_code_postal_code.get
Returns Historical Observations - Given a Postal Code. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_postal_code_postal_code.get({
  "postal_code": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * postal_code **required** `string`: Postal Code. Example: 28546
  * country `string`: Country Code (2 letter).
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH)
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### history.hourly_station_station.get
Returns Historical Observations - Given a station ID. **(LIMIT 1 day for Low Volume plans. LIMIT 7 days for Basic/Developer. LIMIT 30 days for Advanced/Advanced+/Enterprise)**


```js
weatherbit.history.hourly_station_station.get({
  "station": "",
  "start_date": "",
  "end_date": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * station **required** `string`: Station ID.
  * start_date **required** `string`: Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * end_date **required** `string`: End Date (YYYY-MM-DD or YYYY-MM-DD:HH).
  * units `string` (values: S, I): Convert to units. Default Metric See <a href='/api/requests'>units field description</a>
  * lang `string` (values: ar, az, be, bg, bs, ca, cs, de, fi, fr, el, es, et, hr, hu, id, it, is, kw, nb, nl, pl, pt, ro, ru, sk, sl, sr, sv, tr, uk, zh, zh-tw): Language (Default: English) See <a href='/api/requests'>language field description</a>
  * callback `string`: Wraps return in jsonp callback. Example: callback=func
  * key **required** `string`: Your registered API key.

#### Output
* output [History](#history)

### ip_ip_ip.get
Returns a geolocation object. Given an IP address. If no IP supplied, will use request IP address.


```js
weatherbit.ip_ip_ip.get({
  "ip": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IP address
  * callback `string`: Wraps return in jsonp callback
  * exclude `string`: exclude=all => return IP address only
  * format `string`: &format=none => return IP address as string
  * key **required** `string`: Your registered API key.

#### Output
* output [GeoIPObj](#geoipobj)



## Definitions

### CurrentObs
* CurrentObs `object`
  * app_temp `number`: Apparent temperature - Default (C)
  * city_name `string`: City name (closest)
  * clouds `integer`: Cloud cover (%)
  * country_code `string`: Country abbreviation
  * datetime `string`: Cycle Hour (UTC) of observation
  * dewpt `number`: Dew point temperature - Default (C)
  * dhi `number`: Direct component of solar insolation (W/m^2)
  * elev_angle `number`: Current solar elevation angle (Degrees)
  * hour_angle `number`: Current solar hour angle (Degrees)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * ob_time `string`: Full time (UTC) of observation (YYYY-MM-DD HH:MM)
  * pod `string`: Part of the day (d = day, n = night)
  * precip `number`: Precipitation in last hour - Default (mm)
  * pres `number`: Pressure (mb)
  * rh `integer`: Relative humidity (%)
  * slp `number`: Mean sea level pressure in millibars (mb)
  * snow `number`: Snowfall in last hour - Default (mm)
  * state_code `string`: State abbreviation
  * station `string`: Source Station ID
  * sunrise `string`: Time (UTC) of Sunrise (HH:MM)
  * sunset `string`: Time (UTC) of Sunset (HH:MM)
  * temp `number`: Temperature - Default (C)
  * timezone `string`: Local IANA time zone
  * ts `number`: Unix Timestamp
  * uv `number`: UV Index
  * vis `string`: Visibility - Default (M)
  * weather `object`
    * code `string`: Weather Condition code
    * description `string`: Weather Condition description
    * icon `string`: Icon code for forecast image display
  * wind_cdir `string`: Cardinal wind direction
  * wind_cdir_full `string`: Cardinal wind direction (text)
  * wind_dir `integer`: Wind direction (Degrees)
  * wind_speed `number`: Wind speed - Default (m/s)

### CurrentObsGroup
* CurrentObsGroup `object`
  * count `integer`: Count of found observations
  * data `array`
    * items [CurrentObs](#currentobs)

### EnergyObs
* EnergyObs `object`
  * cdd `number`: Cooling degree days - base 18 degrees (C)
  * city_name `string`: City name (closest)
  * clouds `integer`: Average cloud cover (%)
  * country_code `string`: Country abbreviation
  * dewpt `number`: Average dew point temperature - Default (C)
  * dhi `number`: Average direct component of solar insolation (W/m^2)
  * hdd `number`: Heating degree days - base 18 degrees (C)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * precip `number`: Total precipitation in period - Default (mm)
  * rh `integer`: Average Relative humidity (%)
  * snow `number`: Total snowfall in period - Default (mm)
  * state_code `string`: State abbreviation
  * station_id `string`: Source Station ID
  * sun_hours `number`: Average number of daily sun hours - # hours where Solar Insolation > 1000 W/m^2
  * temp `number`: Average temperature - Default (C)
  * timezone `string`: Local IANA time zone
  * wind_dir `integer`: Average wind direction (Degrees)
  * wind_speed `number`: Average wind speed - Default (m/s)

### EnergyObsGroup
* EnergyObsGroup `object`
  * count `integer`: Count of found observations
  * data `array`
    * items [EnergyObs](#energyobs)
  * end_date `integer`: End Date
  * start_date `integer`: Start Date

### Error
* Error `object`
  * code `integer`
  * message `string`

### Forecast
* Forecast `object`
  * app_max_temp `number`: Apparent Maximum daily Temperature - Default (C)
  * app_min_temp `number`: Apparent Minimum daily Temperature - Default (C)
  * clouds `integer`: Cloud cover as a percentage (%)
  * datetime `string`: (UTC) Date in format "YYYY-MM-DD"
  * dewpt `number`: Dewpoint (Average) - Default (C)
  * max_dhi `number`: Max direct component of solar insolation (W/m^2)
  * max_temp `number`: Maximum daily Temperature - Default (C)
  * min_temp `number`: Minimum daily Temperature - Default (C)
  * pod `string`: Part of the day (d = day, n = night)
  * pop `number`: Chance of Precipitation as a percentage (%)
  * precip `number`: Accumulated precipitation since last forecast point. Default (mm)
  * pres `number`: Pressure (mb)
  * rh `integer`: Relative Humidity as a percentage (%)
  * slp `number`: Mean Sea level pressure (mb)
  * snow `number`: Accumulated snowfall since last forecast point. Default (mm)
  * temp `number`: Temperature (Average) - Default (C)
  * ts `number`: Unix Timestamp
  * uv `number`: UV Index
  * vis `number`: Average Visibility default (KM)
  * weather `object`
    * code `string`: Weather Condition code
    * description `string`: Weather Condition description
    * icon `string`: Icon code for forecast image display
  * wind_cdir `string`: Cardinal wind direction
  * wind_cdir_full `string`: Cardinal wind direction (text)
  * wind_dir `integer`: Wind direction
  * wind_spd `number`: Wind Speed (default m/s)

### ForecastDay
* ForecastDay `object`
  * city_name `string`: City Name
  * country_code `string`: Country Abbreviation
  * data `array`
    * items [Forecast](#forecast)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * state_code `string`: State Abbreviation
  * timezone `string`: Local IANA time zone

### ForecastHour
* ForecastHour `object`
  * app_temp `number`: Apparent Temperature - Default (C)
  * clouds `integer`: Cloud cover as a percentage (%)
  * datetime `string`: (UTC) Date in format "YYYY-MM-DD:HH"
  * dewpt `number`: Dewpoint - Default (C)
  * dhi `number`: Direct component of solar radiation (W/m^2)
  * pod `string`: Part of day (d = day, n = night)
  * pop `number`: Chance of Precipitation as a percentage (%)
  * precip `number`: Accumulated precipitation since last forecast point. Default (mm)
  * precip6h `number`: Accumulated precipitation since last forecast point. Default (mm)
  * pres `number`: Pressure (mb)
  * rh `integer`: Relative Humidity as a percentage (%)
  * slp `number`: Mean Sea level pressure (mb)
  * snow `number`: Accumulated snowfall since last forecast point. Default (mm)
  * snow6h `number`: 6 hour accumulated snowfall. Default (mm)
  * temp `number`: Temperature - Default (C)
  * ts `number`: Unix Timestamp
  * uv `number`: UV Index
  * vis `number`: Visibility - Default (KM)
  * weather `object`
    * code `string`: Weather Condition code
    * description `string`: Weather Condition description
    * icon `string`: Icon code for forecast image display
  * wind_cdir `string`: Cardinal wind direction
  * wind_cdir_full `string`: Cardinal wind direction (text)
  * wind_dir `integer`: Wind direction
  * wind_spd `number`: Wind Speed - Default (m/s)

### ForecastHourly
* ForecastHourly `object`
  * city_name `string`: City Name
  * country_code `string`: Country Abbreviation
  * data `array`
    * items [ForecastHour](#forecasthour)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * state_code `string`: State Abbreviation
  * timezone `string`: Local IANA time zone

### GeoIPObj
* GeoIPObj `object`
  * area_code `string`: Area Code
  * charset `string`: Character encoding
  * city `string`: City Name
  * continent_code `string`: Country Abbreviation
  * country_code `string`: Country Code (Short)
  * country_code3 `string`: Country Code (Long)
  * dma_code `string`: Longitude
  * ip `string`: IP Address
  * latitude `string`: State Abbreviation
  * longitude `string`: City Name
  * metro_code `string`: Longitude
  * offset `string`: UTC Offset (deprecated)
  * organization `string`: Organization Name
  * postal_code `string`: Postal Code
  * region `string`: Latitude
  * timezone `string`: Local IANA time zone

### History
* History `object`
  * city_name `string`: City name (Closest)
  * country_code `string`: Country abbreviation
  * data `array`
    * items [HistoryObj](#historyobj)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * state_code `string`: State abbreviation
  * timezone `string`: Local IANA time zone

### HistoryDay
* HistoryDay `object`
  * city_name `string`: City name (Closest)
  * country_code `string`: Country abbreviation
  * data `array`
    * items [HistoryDayObj](#historydayobj)
  * lat `string`: Latitude
  * lon `string`: Longitude
  * state_code `string`: State abbreviation
  * timezone `string`: Local IANA time zone

### HistoryDayObj
* HistoryDayObj `object`
  * datetime `string`: Date in format "YYYY-MM-DD". All datetime is in (UTC)
  * dewpt `number`: Average dewpoint - Default (C)
  * dhi `integer`: Average direct solar insolation (W/m^2)
  * max_temp `number`: Max Temperature - Default (C)
  * max_temp_ts `number`: Time of Max Temperature - Unix Timestamp
  * max_uv `integer`: Max UV Index (1-11+)
  * max_wind_dir `integer`: Direction of wind at time of max wind - (Degrees)
  * max_wind_spd `number`: Average Wind Speed - Default (m/s)
  * max_wind_spd_ts `number`: Time of max wind - Unix Timestamp
  * min_temp `number`: Min Temperature - Default (C)
  * min_temp_ts `number`: Time of Max Temperature - Unix Timestamp
  * precip `number`: Liquid equivalent precipitation - Default (mm)
  * pres `number`: Average pressure (mb)
  * rh `integer`: Average relative humidity as a percentage (%)
  * slp `number`: Average Sea level pressure (mb)
  * snow `number`: Snowfall - Default (mm)
  * t_dhi `integer`: Total/Cumulative direct solar insolation (W/m^2)
  * temp `number`: Average Temperature - Default (C)
  * ts `number`: Unix Timestamp of datetime (Midnight UTC)
  * wind_dir `integer`: Average Wind direction - (Degrees)
  * wind_spd `number`: Average Wind Speed - Default (m/s)

### HistoryObj
* HistoryObj `object`
  * datetime `string`: Date in format "YYYY-MM-DD:HH". All datetime is in (UTC)
  * dewpt `integer`: Dew point (Default Celcius)
  * dhi `number`: Direct component of solar insolation (W/m^2)
  * elev_angle `integer`: Solar elevation angle (Degrees)
  * h_angle `integer`: Solar hour angle (Degrees)
  * pod `string`: Part of the day (d = day, n = night)
  * precip `number`: Liquid equivalent precipitation - Default (mm)
  * precip6h `number`: Liquid equivalent precipitation in last 6 hours - Default (mm)
  * pres `number`: Pressure (mb)
  * qc `number`: Set to 0 measurement has not yet been quality controlled, and should not be considered an authoritative observation
  * rh `integer`: Relative Humidity as a percentage (%)
  * slp `number`: Sea level pressure (mb)
  * snow `number`: Snowfall - Default (mm)
  * snow6h `number`: Snowfall in last 6 hours - Default (mm)
  * temp `number`: Temperature (Default Celcius)
  * ts `string`: Unix Timestamp (UTC)
  * uv `integer`: UV Index (1-11+)
  * weather `object`
    * code `string`: Weather Condition code
    * description `string`: Weather Condition description
    * icon `string`: Icon code for forecast image display
  * wind_dir `integer`: Wind direction (Degrees)
  * wind_spd `number`: Wind Speed (Default m/s)


