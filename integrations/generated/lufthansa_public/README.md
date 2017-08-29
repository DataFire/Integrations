# @datafire/lufthansa_public

Client library for LH Public

## Installation and Usage
```bash
npm install --save datafire @datafire/lufthansa_public
```

```js
let datafire = require('datafire');
let lufthansa_public = require('@datafire/lufthansa_public').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
lufthansa_public.oauthRefresh(null, context)
```


### Lounges
Lounge information


```js
lufthansa_public.Lounges({
  "location": "",
  "Accept": ""
}, context)
```

#### Parameters
* location (string) **required** - 3-leter IATA airport or city code (e.g. 'ZRH')
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* cabinClass (string) - Cabin class: 'M', 'E', 'C', 'F' (Acceptable values are: "", "M", "E", "C", "F")
* tierCode (string) - Frequent flyer level ('FTL', 'SGC', 'SEN', 'HON') (Acceptable values are: "", "FTL", "SGC", "SEN", "HON")
* lang (string) - Language code.

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

#### Parameters
* flightNumber (string) **required** - Flight number including carrier code and any suffix (e.g. 'LH2037')
* origin (string) **required** - Departure airport. 3-letter IATA airport code (e.g. 'TXL')
* destination (string) **required** - Destination airport. 3-letter IATA airport code (e.g. 'MUC')
* date (string) **required** - Departure date (YYYY-MM-DD)
* cabinClass (string) **required** - Cabin class: 'M', 'E', 'C', 'F'. Some flights have fewer classes (Acceptable values are: "M", "E", "C", "F")
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

### operations.flightstatus.arrivals.airportCode.fromDateTime.get
Status of all arrivals at a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.operations.flightstatus.arrivals.airportCode.fromDateTime.get({
  "airportCode": "",
  "fromDateTime": "",
  "Accept": ""
}, context)
```

#### Parameters
* airportCode (string) **required** - 3-letter IATA aiport code (e.g. 'ZRH')
* fromDateTime (string) **required** - Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### operations.flightstatus.departures.airportCode.fromDateTime.get
Status of all departures from a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.operations.flightstatus.departures.airportCode.fromDateTime.get({
  "airportCode": "",
  "fromDateTime": "",
  "Accept": ""
}, context)
```

#### Parameters
* airportCode (string) **required** - Departure airport. 3-letter IATA airport code (e.g. 'HAM')
* fromDateTime (string) **required** - Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

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

#### Parameters
* origin (string) **required** - 3-letter IATA airport (e.g. 'FRA')
* destination (string) **required** - 3-letter IATA airport code (e.g. 'JFK')
* date (string) **required** - Departure date (YYYY-MM-DD) in local time of departure airport
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### operations.flightstatus.flightNumber.date.get
Status of a particular flight (boarding, delayed, etc.).


```js
lufthansa_public.operations.flightstatus.flightNumber.date.get({
  "flightNumber": "",
  "date": "",
  "Accept": ""
}, context)
```

#### Parameters
* flightNumber (string) **required** - Flight number including carrier code and any suffix (e.g. 'LH400')
* date (string) **required** - The departure date (YYYY-MM-DD) in the local time of the departure airport
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

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

#### Parameters
* origin (string) **required** - Departure airport. 3-letter IATA airport code (e.g. 'ZRH')
* destination (string) **required** - Destination airport. 3-letter IATA airport code (e.g. 'FRA')
* fromDateTime (string) **required** - Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* directFlights (boolean) - Show only direct flights (false=0, true=1). Default is false
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### Aircraft
List all aircraft types or one specific aircraft type.


```js
lufthansa_public.Aircraft({
  "Accept": "",
  "aircraftCode": ""
}, context)
```

#### Parameters
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* aircraftCode (string) **required** - 3-character IATA aircraft code
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### Airlines
List all airlines or one specific airline.


```js
lufthansa_public.Airlines({
  "Accept": "",
  "airlineCode": ""
}, context)
```

#### Parameters
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* airlineCode (string) **required** - 2-character IATA airline/carrier code
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### references.airports.nearest.latitude_longitude.get
List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.


```js
lufthansa_public.references.airports.nearest.latitude_longitude.get({
  "latitude": 0,
  "longitude": 0,
  "Accept": ""
}, context)
```

#### Parameters
* latitude (integer) **required** - Latitude in decimal format to at most 3 decimal places
* longitude (integer) **required** - Longitude in decimal format to at most 3 decimal places
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* lang (string) - 2 letter ISO 3166-1 language code

### Airports
List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.


```js
lufthansa_public.Airports({
  "Accept": "",
  "airportCode": ""
}, context)
```

#### Parameters
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* airportCode (string) **required** - 3-letter IATA airport code
* lang (string) - 2-letter ISO 3166-1 language code
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0
* LHoperated (boolean) - Restrict the results to locations with flights operated by LH (false=0, true=1)

### Cities
List all cities or one specific city. It is possible to request the response in a specific language.


```js
lufthansa_public.Cities({
  "Accept": "",
  "cityCode": ""
}, context)
```

#### Parameters
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* cityCode (string) **required** - 3-letter IATA city code
* lang (string) - 2 letter ISO 3166-1 language code
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

### Countries
List all countries or one specific country. It is possible to request the response in a specific language.


```js
lufthansa_public.Countries({
  "Accept": "",
  "countryCode": ""
}, context)
```

#### Parameters
* Accept (string) **required** - http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
* countryCode (string) **required** - 2-letter ISO 3166-1 country code
* lang (string) - 2 letter ISO 3166-1 language code
* limit (string) - Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)
* offset (string) - Number of records skipped. Defaults to 0

