# @datafire/deutschebahn_stada

Client library for Stationsdatenbereitstellung

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_stada
```
```js
let deutschebahn_stada = require('@datafire/deutschebahn_stada').create();

.then(data => {
  console.log(data);
});
```

## Description

An API providing master data for German railway stations by DB Station&Service AG.

## Actions

### stations.get
Get a QueryResult object containing station objects from the database applying to the parameters described below. 

QueryResult is a container providing the following information about the query result.
  1. the total number of hits
  2. the maximum number of hits to be returned in that QueryResult object
  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
  4. the result objects


  
The parameters described below work as filters to reduce the number of hits returned. Some of these parameters must be used only once, others are allowed to be used multiple times. Valid parameters that are allowed to be used only once are _offset_, _limit_ and _logicaloperator_. 

All other parameters described below may be used multiple times.

If a parameter is given more than once, the result will contain all hits that match all given parameter values.

E.g. _federalstate=berlin&federalstate=saarland_ returns all stations in Berlin and Saarland.

If more than one filter criterion is used at the same time, the different filter criteria are interpreted as if they are combined by a logical AND operator, unless the parameter _logicaloperator_ is set to _or_.

E.g. _category=1-2&federalstate=hamburg_ returns all stations in Hamburg having category 1 or 2.

_category=1-2&federalstate=hamburg&federalsate=hessen_ returns all stations in Hamburg and Hessen having category 1 or 2, while

_searchstring=berlin*&federalstate=hamburg&federalsate=hessen&logicaloperator=or_ will return all stations with a name starting with 'berlin' as well as all stations in Hamburg and Hessen.

If no 'limit' parameter is given, the number of hits (stations) is set to its maximum value of 10000.

To specify parameter values containing German umlauts, the following encoding has to be used
  * ä  => %C3%A4
  * ö  => %C3%B6
  * ü  => %C3%BC
  * Ä  => %C3%84
  * Ö  => %C3%96
  * Ü  => %C3%9C
  * ß  => %C3%9F



```js
deutschebahn_stada.stations.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
  * limit `integer`: The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 10000 hits will be returned.
  * searchstring `string`: String to search for a station name. The wildcards * (indicating an arbitrary number of characters) and ? (indicating one single character) can be used in the search pattern. A comma separated list of station names is also supported (e.g. searchstring=hamburg*,berlin*).
  * category `string`: Filter by station category. Category ranges are supported as well as lists of categories (e.g. category=2-4 or category=1,3-5). The category must be between 1 and 7 otherwise a parameter exception is returned.
  * federalstate `string`: Filter by German federal state. Lists of federal states are also supported (e.g. federalstate=bayern,hamburg). Wildcards are not allowed here.
  * eva `integer`: Filter by EVA number. Wildcards are not allowed here.
  * ril `string`: Filter by Ril100-identifier. Wildcards are not allowed here.
  * logicaloperator `string`: Logical operator to combine query parameters (default=AND). See above for further details.  Allowed values: or, and

#### Output
* output [StationQuery](#stationquery)

### stations.id.get
Get a QueryResult object containing one station object specified by its id.


```js
deutschebahn_stada.stations.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Station ID (Bahnhofsnummer)

#### Output
* output [StationQuery](#stationquery)

### szentralen.get
Get a QueryResult object containing SZentralen objects from the database applying to the parameters described below. 
QueryResult is a container providing the following information about the query result.
  1. the total number of hits
  2. the maximum number of hits to be returned in that QueryResult object
  3. the offset of the first hit returned in that QueryResult object with respect to all hits returned by the query
  4. the result objects



```js
deutschebahn_stada.szentralen.get({}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
  * limit `integer`: The maximum number of hits to be returned by that query. If 'limit' is set greater than 10000, it will be reset to 10000 internally and only 100 hits will be returned.

#### Output
* output [SZentraleQuery](#szentralequery)

### szentralen.id.get
Get a QueryResult object containing one SZentralen object specified by its id. 


```js
deutschebahn_stada.szentralen.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of the 3-S-Zentrale.

#### Output
* output [SZentraleQuery](#szentralequery)



## Definitions

### Address
* Address `object`
  * city `string`
  * houseNumber `string`
  * street `string`
  * zipcode `integer`

### Aufgabentraeger
* Aufgabentraeger `object`: local public sector entity, responsible for short distance public transport in a specific area
  * name `string`: full name of Aufgabentraeger
  * shortname `string`: unique identifier

### EVANumber
* EVANumber `object`
  * geographicCoordinate [GeographicPoint](#geographicpoint)
  * isMain `boolean`: station related EVA-Numbers
  * number `integer`: EVA identifier

### Error
* Error `object`
  * errMsg `string`: error message
  * errNo `integer`: error number

### GeographicPoint
* GeographicPoint `object`: GEOJSON object of type point. By default WGS84 is the coordinate system in GEOJSON.
  * coordinates `array`: first value is longitude, second latitude third altitude (currently not provided)
    * items `number`
  * type `string`: the type of the GEOJSON Object e.g. point. Currently only point coordinates without altitude are provided.

### OpeningHours
* OpeningHours `object`: period of time from/to
  * fromTime `string`
  * toTime `string`

### Partial
* Partial `string` (values: yes, no, partial)

### RegionalBereichRef
* RegionalBereichRef `object`: reference object. an internal organization type of Station&Service, regional department.
  * name `string`: name of the regional department
  * number `integer`: unique identifier of the regional department
  * shortName `string`

### Regionalbereich
* Regionalbereich `object`: reference object. an internal organization type of Station&Service, regional department.
  * name `string`: name of the regional department
  * number `integer`: unique identifier of the regional department
  * shortName `string`

### RiL100Identifier
* RiL100Identifier `object`
  * geographicCoordinate [GeographicPoint](#geographicpoint)
  * hasSteamPermission `boolean`: permission for steam engines y/n
  * isMain `boolean`: is stations main Ril100. Determination of Station&Service AG
  * rilIdentifier `string`: Unique identifier of 'Betriebsstelle' according to Ril100

### SZentrale
* SZentrale `object`: 3-S-Zentralen are 7/24 hours operating centers for german railway stations
  * address [Address](#address)
  * email `string`: email adress of the 3-S-Zentrale (no longer supported!)
  * internalFaxNumber `string`: internal fax number
  * internalPhoneNumber `string`: internal phone number
  * mobilePhoneNumber `string`: mobile phone number (no longer supported!)
  * name `string`: unique identifier of 3SZentrale
  * number `integer`: unique identifier for SZentrale
  * publicFaxNumber `string`: public fax number
  * publicPhoneNumber `string`

### SZentraleQuery
* SZentraleQuery `object`
  * limit `integer`: maximum number of result objects to be returned
  * offset `integer`: offset of the first result object with respect to the total number of  hits produced by the query
  * result `array`: result objects produced by that query
    * items [SZentrale](#szentrale)
  * total `integer`: total number of hits produced by that query

### SZentraleRef
* SZentraleRef `object`: reference object contained in station
  * name `string`: unique identifier of 3SZentrale
  * number `integer`: unique identifier for SZentrale
  * publicPhoneNumber `string`

### Schedule
* Schedule `object`: a weekly schedule
  * friday [OpeningHours](#openinghours)
  * holiday [OpeningHours](#openinghours)
  * monday [OpeningHours](#openinghours)
  * saturday [OpeningHours](#openinghours)
  * sunday [OpeningHours](#openinghours)
  * thursday [OpeningHours](#openinghours)
  * tuesday [OpeningHours](#openinghours)
  * wednesday [OpeningHours](#openinghours)

### Station
* Station `object`
  * DBinformation [Schedule](#schedule)
  * aufgabentraeger [Aufgabentraeger](#aufgabentraeger)
  * category `integer`: the stations category (-1...7). Stations with category -1 or 0 are not in production, e.g. planned, saled, without train stops.
  * evaNumbers `array`: station related EVA-Numbers
    * items [EVANumber](#evanumber)
  * federalState `string`: german federal state
  * hasBicycleParking `boolean`: public bicycle parking y/n
  * hasCarRental `boolean`: car sharing or car rental y/n
  * hasDBLounge `boolean`: DB lounge y/n
  * hasLocalPublicTransport `boolean`: local public transport y/n
  * hasLockerSystem `boolean`: public facilities y/n
  * hasLostAndFound `boolean`: lost and found y/n
  * hasMobilityService `string`: values are 'no', 'yes, advance notification is requested...' or 'yes, advance notification is required...'
  * hasParking `boolean`: public parking y/n
  * hasPublicFacilities `boolean`: public facilities y/n
  * hasRailwayMission `boolean`: railway mission y/n
  * hasSteplessAccess [Partial](#partial)
  * hasTaxiRank `boolean`: taxi rank in front of the station y/n
  * hasTravelCenter `boolean`: local travel center y/n
  * hasTravelNecessities `boolean`: a shop for travel necessities y/n
  * hasWiFi `boolean`: public Wi-Fi is available y/n
  * localServiceStaff [Schedule](#schedule)
  * mailingAdress [Address](#address)
  * name `string`: the stations name
  * number `integer`: unique identifier representing a specific railway station
  * priceCategory `integer`: determines in some respect the price for train stops at a specific station (1..7)
  * regionalbereich [RegionalBereichRef](#regionalbereichref)
  * riL100Identifiers `array`: station related Ril100s
    * items [RiL100Identifier](#ril100identifier)
  * stationManagement [StationManagementRef](#stationmanagementref)
  * szentrale [SZentraleRef](#szentraleref)
  * timetableOffice [TimetableOffice](#timetableoffice)

### StationManagement
* StationManagement `object`
  * name `string`
  * number `integer`: identifier

### StationManagementRef
* StationManagementRef `object`
  * name `string`
  * number `integer`: identifier

### StationQuery
* StationQuery `object`
  * limit `integer`: maximum number of result objects to be returned
  * offset `integer`: offset of the first result object with respect to the total number  of hits produced by the query
  * result `array`: result objects produced by that query
    * items [Station](#station)
  * total `integer`: total number of hits produced by that query

### TimetableOffice
* TimetableOffice `object`
  * email `string`: email
  * name `string`: identifier


