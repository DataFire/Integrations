# @datafire/lufthansa_public

Client library for LH Public API

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

.then(data => {
  console.log(data);
});
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

### CargoGetRouteFromDateProductCodeByOriginAndDestinationGet
Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.


```js
lufthansa_public.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet({
  "origin": "",
  "destination": "",
  "fromDate": "",
  "productCode": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * origin **required** `string`: Departure Airport : 3-letter IATA airport code, e.g. FRA.
  * destination **required** `string`: Arrival airport : 3-letter IATA airport code, e.g. HKG.
  * fromDate **required** `string`: Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15
  * productCode **required** `string` (values: FAN, FCO, FCP, FDG, FTF, FUN, FWN, YCO, YCP, YDG, YNB, YNZ, YTF, YUN, ZXB, ZXF, ZXR): Product code for requested service and specials : 3-letter eg: YNZ
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

#### Output
* output `object`

### CargoShipmentTrackingByAWBPrefixAndAWBNumberGet
With this tracking service you can easily retrieve your shipment or flight status information.


```js
lufthansa_public.CargoShipmentTrackingByAWBPrefixAndAWBNumberGet({
  "aWBPrefix": "",
  "aWBNumber": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * aWBPrefix **required** `string`: aWBPrefix : Represents the airline that is the owner of this AWB, i.e. "020" = Lufthansa Cargo, format : [0-9]{3} e.g. 020
  * aWBNumber **required** `string`: aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050
  * Accept **required** `string`: http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")

#### Output
* output `object`

### OffersLoungesByLocationGet
Lounge information


```js
lufthansa_public.OffersLoungesByLocationGet({
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
* output `object`

### OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet
Cabin layout and seat characteristics.


```js
lufthansa_public.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet({
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
* output `object`

### OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet
Status of all arrivals at a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet({
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
* output `object`

### OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet
Status of all departures from a given airport up to 4 hours from the provided date time.


```js
lufthansa_public.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet({
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
* output `object`

### OperationsFlightstatusRouteDateByOriginAndDestinationGet
Status of flights between a given origin and destination on a given date.


```js
lufthansa_public.OperationsFlightstatusRouteDateByOriginAndDestinationGet({
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
* output `object`

### OperationsFlightstatusByFlightNumberAndDateGet
Status of a particular flight (boarding, delayed, etc.).


```js
lufthansa_public.OperationsFlightstatusByFlightNumberAndDateGet({
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
* output `object`

### OperationsSchedulesFromDateTimeByOriginAndDestinationGet
Scheduled flights between given airports on a given date.


```js
lufthansa_public.OperationsSchedulesFromDateTimeByOriginAndDestinationGet({
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
* output `object`

### ReferencesAircraftByAircraftCodeGet
List all aircraft types or one specific aircraft type.


```js
lufthansa_public.ReferencesAircraftByAircraftCodeGet({
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
* output `object`

### ReferencesAirlinesByAirlineCodeGet
List all airlines or one specific airline.


```js
lufthansa_public.ReferencesAirlinesByAirlineCodeGet({
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
* output `object`

### ReferencesAirportsNearestByLatitudeAndLongitudeGet
List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.


```js
lufthansa_public.ReferencesAirportsNearestByLatitudeAndLongitudeGet({
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
* output `object`

### ReferencesAirportsByAirportCodeGet
List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.


```js
lufthansa_public.ReferencesAirportsByAirportCodeGet({
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
* output [AirportResponse](#airportresponse)

### ReferencesCitiesByCityCodeGet
List all cities or one specific city. It is possible to request the response in a specific language.


```js
lufthansa_public.ReferencesCitiesByCityCodeGet({
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
* output `object`

### ReferencesCountriesByCountryCodeGet
List all countries or one specific country. It is possible to request the response in a specific language.


```js
lufthansa_public.ReferencesCountriesByCountryCodeGet({
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
* output `object`



## Definitions

### Airport
* Airport `object`: Array of all available airports or one airport matching the request.
  * AirportCode `string`: 3-letter IATA airport code, e.g. “TXL”.
  * CityCode `string`: 3-letter IATA city code, e.g. “BER”.
  * CountryCode `string`: 2-letter ISO 3166-1 country code, e.g. “DE”.
  * LocationType `string`:  “Airport”, “RailwayStation” or “BusStation”.
  * Names `object`: Container for airport names.
    * Name `array`: Array: language specific full name of airport.
      * items [Name](#name)
  * Position `object`: Physical location of an airport. This data section is optional and therefore not always present.
    * Coordinate [Coordinate](#coordinate)
  * TimeZoneId `string`: Time zone name airport is in
  * UtcOffset `number`: Hour offset of airport to UTC time zone

### AirportResource
* AirportResource `object`: Root element of airport response.
  * Airports `object`: Container for airport elements.
    * Airport [Airport](#airport)
  * Meta `object`: Container for meta links.
    * @Version `string`
    * Link `array`: Array: links to resource itself and other related resources.
      * items [Link](#link)
    * TotalCount `integer`

### AirportResponse
* AirportResponse `object`
  * AirportResource [AirportResource](#airportresource)

### Coordinate
* Coordinate `object`: Container for coordinates.
  * Latitude `number`: Decimal latitude. Range: -90 (South Pole) to +90 (North Pole), e.g. “51.540”.
  * Longitude `number`: Decimal longitude. Range: -180 (West of Prime Meridian) to +180 (East of Prime Meridian).

### Link
* Link `object`
  * @Href `string`: Link to actual a resource.
  * @Rel `string`: Specifying kind of link such as ‘self’ (link that returned this response), ‘alternate’ (link that points to another resource) or ‘related’ (link that points to related resource).

### Name
* Name `object`: 2-letter ISO 639-1 language code for the corresponding item.
  * $ `string`
  * @LanguageCode `string`


