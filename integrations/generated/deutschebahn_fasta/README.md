# @datafire/deutschebahn_fasta

Client library for FaSta - Station Facilities Status

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_fasta
```
```js
let deutschebahn_fasta = require('@datafire/deutschebahn_fasta').create({
  UserSecurity: ""
});

.then(data => {
  console.log(data);
});
```

## Description

A RESTful webservice to retrieve data about the operational state of public elevators and escalators in german railway stations.

## Actions

### findFacilities
Access to public facilities (escalators and elevators) in railway stations


```js
deutschebahn_fasta.findFacilities({}, context)
```

#### Input
* input `object`
  * type `array`: Type of the facility.
  * state `array`: Operational state of the facility.
  * equipmentnumbers `array`: List of equipmentnumbers to select.
  * stationnumber `integer`: Number of the station the facilities belong to.
  * area `array`: Geo coordinate rectangle in WGS84-format to filter facilities by geographical position. Parameters must be 4 numbers exactly as follows: longitudeWest, latitudeSouth, longitudeEast, latitudeNorth.

#### Output
* output `array`
  * items [facility](#facility)

### getFacilityByEquipmentNumber
Returns the facility identified by its equipmentnumber.


```js
deutschebahn_fasta.getFacilityByEquipmentNumber({
  "equipmentnumber": 0
}, context)
```

#### Input
* input `object`
  * equipmentnumber **required** `integer`: Equipmentnumber of the facility to fetch.

#### Output
* output [facility](#facility)

### findStationByStationNumber
Returns information about a station (and its corresponding facilities) identified by a stationnumber.


```js
deutschebahn_fasta.findStationByStationNumber({
  "stationnumber": 0
}, context)
```

#### Input
* input `object`
  * stationnumber **required** `integer`: Number of the station to fetch.

#### Output
* output [station](#station)



## Definitions

### facility
* facility `object`: A facility provided by this API is either a public elevator or escalator located at a German railway station.
  * description `string`: Textual description of the facility.
  * equipmentnumber **required** `integer`: Unique identifier of the facility.
  * geocoordX `number`: Longitude component of geocoordinate in WGS84 format.
  * geocoordY `number`: Latitude component of geocoordinate in WGS84 format.
  * operatorname `string`: The name of the operator of the facility.
  * state **required** `string` (values: ACTIVE, INACTIVE, UNKNOWN): Operational state of the facility.
  * stateExplanation `string`: Detailed description of the state.
  * stationnumber **required** `integer`: Number of the station the facility belongs to.
  * type **required** `string` (values: ESCALATOR, ELEVATOR): Type of the facility.

### station
* station `object`
  * facilities `array`
    * items [facility](#facility)
  * name **required** `string`: Name of the station.
  * stationnumber **required** `integer`: Unique identifier of the station.


