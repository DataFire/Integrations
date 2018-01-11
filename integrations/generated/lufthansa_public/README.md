# @datafire/lufthansa_public

Client library for LH Public

## Installation and Usage
```bash
npm install --save @datafire/lufthansa_public
```
```js
let lufthansa_public = require('@datafire/lufthansa_public').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

lufthansa_public.Lounges({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
lufthansa_public.oauthCallback({
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
lufthansa_public.oauthRefresh(null, context)
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

### Lounges
Lounge information


```js
lufthansa_public.Lounges({
  "location": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`: 3-leter IATA airport or city code (e.g. 'ZRH')
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * cabinClass `string`: Cabin class: 'M', 'E', 'C', 'F' (Acceptable values are: "", "M", "E", "C", "F")
  * tierCode `string`: Frequent flyer level ('FTL', 'SGC', 'SEN', 'HON') (Acceptable values are: "", "FTL", "SGC", "SEN", "HON")
  * lang `string`: Language code.

#### Output
* output `string`

### offers.seatmaps.flightNumber.origin.destination.date.cabinClass.get
Cabin layout and seat characteristics.


```js
lufthansa_public.offers.seatmaps.flightNumber.origin.destination.date.cabinClass.get({
  "flightNumber": "",
  "origin": "",
  "destination": "",
  "date": "",
  "cabinClass": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * flightNumber **required** `string`: Flight number including carrier code and any suffix (e.g. 'LH2037')
  * origin **required** `string`: Departure airport. 3-letter IATA airport code (e.g. 'TXL')
  * destination **required** `string`: Destination airport. 3-letter IATA airport code (e.g. 'MUC')
  * date **required** `string`: Departure date (YYYY-MM-DD)
  * cabinClass **required** `string`: Cabin class: 'M', 'E', 'C', 'F'. Some flights have fewer classes (Acceptable values are: "M", "E", "C", "F")
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

#### Output
* output `string`

### operations.flightstatus.arrivals.airportCode.fromDateTime.get
Status of all arrivals at a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.operations.flightstatus.arrivals.airportCode.fromDateTime.get({
  "airportCode": "",
  "fromDateTime": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * airportCode **required** `string`: 3-letter IATA aiport code (e.g. 'ZRH')
  * fromDateTime **required** `string`: Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### operations.flightstatus.departures.airportCode.fromDateTime.get
Status of all departures from a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.operations.flightstatus.departures.airportCode.fromDateTime.get({
  "airportCode": "",
  "fromDateTime": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * airportCode **required** `string`: Departure airport. 3-letter IATA airport code (e.g. 'HAM')
  * fromDateTime **required** `string`: Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### operations.flightstatus.route.origin.destination.date.get
Status of flights between a given origin and destination on a given date.


```js
lufthansa_public.operations.flightstatus.route.origin.destination.date.get({
  "origin": "",
  "destination": "",
  "date": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: 3-letter IATA airport (e.g. 'FRA')
  * destination **required** `string`: 3-letter IATA airport code (e.g. 'JFK')
  * date **required** `string`: Departure date (YYYY-MM-DD) in local time of departure airport
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### operations.flightstatus.flightNumber.date.get
Status of a particular flight (boarding, delayed, etc.).


```js
lufthansa_public.operations.flightstatus.flightNumber.date.get({
  "flightNumber": "",
  "date": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * flightNumber **required** `string`: Flight number including carrier code and any suffix (e.g. 'LH400')
  * date **required** `string`: The departure date (YYYY-MM-DD) in the local time of the departure airport
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### operations.schedules.origin.destination.fromDateTime.get
Scheduled flights between given airports on a given date.


```js
lufthansa_public.operations.schedules.origin.destination.fromDateTime.get({
  "origin": "",
  "destination": "",
  "fromDateTime": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Departure airport. 3-letter IATA airport code (e.g. 'ZRH')
  * destination **required** `string`: Destination airport. 3-letter IATA airport code (e.g. 'FRA')
  * fromDateTime **required** `string`: Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * directFlights `boolean`: Show only direct flights (false=0, true=1). Default is false
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### Aircraft
List all aircraft types or one specific aircraft type.


```js
lufthansa_public.Aircraft({
  "Accept": "",
  "aircraftCode": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * aircraftCode **required** `string`: 3-character IATA aircraft code
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### Airlines
List all airlines or one specific airline.


```js
lufthansa_public.Airlines({
  "Accept": "",
  "airlineCode": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * airlineCode **required** `string`: 2-character IATA airline/carrier code
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### references.airports.nearest.latitude_longitude.get
List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.


```js
lufthansa_public.references.airports.nearest.latitude_longitude.get({
  "latitude": 0,
  "longitude": 0,
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * latitude **required** `integer`: Latitude in decimal format to at most 3 decimal places
  * longitude **required** `integer`: Longitude in decimal format to at most 3 decimal places
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * lang `string`: 2 letter ISO 3166-1 language code

#### Output
* output `string`

### Airports
List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.


```js
lufthansa_public.Airports({
  "Accept": "",
  "airportCode": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * airportCode **required** `string`: 3-letter IATA airport code
  * lang `string`: 2-letter ISO 3166-1 language code
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0
  * LHoperated `boolean`: Restrict the results to locations with flights operated by LH (false=0, true=1)

#### Output
* output `string`

### Cities
List all cities or one specific city. It is possible to request the response in a specific language.


```js
lufthansa_public.Cities({
  "Accept": "",
  "cityCode": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * cityCode **required** `string`: 3-letter IATA city code
  * lang `string`: 2 letter ISO 3166-1 language code
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`

### Countries
List all countries or one specific country. It is possible to request the response in a specific language.


```js
lufthansa_public.Countries({
  "Accept": "",
  "countryCode": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
  * countryCode **required** `string`: 2-letter ISO 3166-1 country code
  * lang `string`: 2 letter ISO 3166-1 language code
  * limit `string`: Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
  * offset `string`: Number of records skipped. Defaults to 0

#### Output
* output `string`



## Definitions

** No definitions **
