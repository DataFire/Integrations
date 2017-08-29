# @datafire/deutschebahn_stada

Client library for Stationsdatenbereitstellung

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_stada
```

```js
let datafire = require('datafire');
let deutschebahn_stada = require('@datafire/deutschebahn_stada').create();

deutschebahn_stada.szentralen.get({}).then(data => {
  console.log(data);
})
```

## Description
An API providing master data for german railway stations by DB Station&Service AG. 

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

If no 'limit' parameter is given, the number of hits (stations) is set to its maximum value of 100.

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

#### Parameters
* offset (integer) - Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
* limit (integer) - The maximum number of hits to be returned by that query. If 'limit' is set greater than 100, it will be reset to 100 internally and only 100 hits will be returned.
* searchstring (string) - String to search for a station name. The wildcards * (indicating an arbitrary number of characters) and ? (indicating one single character) can be used in the search pattern. A comma separated list of station names is also supported (e.g. searchstring=hamburg*,berlin*).
* category (string) - Filter by station category. Category ranges as well as lists of categories are also supported (e.g. category=2-4 or category=1,3-5). The category must be between 1 and 7, otherwise a parameter exception is returned.
* federalstate (string) - Filter by German federal state. Lists of federal states are also supported (e.g. federalstate=bayern,hamburg). Wildcards are not allowed here.
* logicaloperator (string) - Logical operator to combine query parameters (default=AND). See above for further details.  Allowed values: or, and

### stations.id.get
Get a QueryResult object containing one station object specified by its id.


```js
deutschebahn_stada.stations.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Station ID (Bahnhofsnummer)

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

#### Parameters
* offset (integer) - Offset of the first hit returned in the QueryResult object with respect to all hits returned by the query. If this parameter is omitted, it will be set to 0 internally.
* limit (integer) - The maximum number of hits to be returned by that query. If 'limit' is set greater than 100, it will be reset to 100 internally and only 100 hits will be returned.

### szentralen.id.get
Get a QueryResult object containing one SZentralen object specified by its id. 


```js
deutschebahn_stada.szentralen.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - id of the 3-S-Zentrale.

