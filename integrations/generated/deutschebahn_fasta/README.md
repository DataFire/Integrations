# @datafire/deutschebahn_fasta

Client library for FaSta-Station_Facilities_Status

## Installation and Usage
```bash
npm install --save @datafire/deutschebahn_fasta
```
```js
let deutschebahn_fasta = require('@datafire/deutschebahn_fasta').create({
  UserSecurity: ""
});

deutschebahn_fasta.findFacilities({}).then(data => {
  console.log(data);
})
```

## Description

A RESTful webservice to retrieve data about the operational state of public elevators and escalators in german railway stations operated by DB Station&Service AG. 
Note: Production and sandbox environments use the same production backend server. 

## Actions

### findDisruptions
Returns information about disruptions of facilities filtered by parameters.


```js
deutschebahn_fasta.findDisruptions({}, context)
```

#### Input
* input `object`
  * type `array`: type of the facility to filter by
  * equipmentnumber `integer`: equipmentnumber of the facility to fetch
  * stationnumber `integer`: stationnumber of the station to fetch

#### Output
* output `array`
  * items [disruption](#disruption)

### findDisruptionByDisruptionNumber
Returns information about a specific disruption of a facility


```js
deutschebahn_fasta.findDisruptionByDisruptionNumber({
  "disruptionnumber": 0
}, context)
```

#### Input
* input `object`
  * disruptionnumber **required** `integer`: disruptionnumber of the disruption to fetch

#### Output
* output [disruption](#disruption)

### findFacilities
Access to public facilities (escalators and elevators) in railway stations


```js
deutschebahn_fasta.findFacilities({}, context)
```

#### Input
* input `object`
  * type `array`: type of the facility to filter by
  * state `array`: the state of the facility to filter by
  * equipmentnumbers `array`: equipmentnumbers of the facility to filter by
  * stationnumber `integer`: station number to filter by
  * area `array`: Geo coordinate rectangle in WGS84-format to filter by. Parameters must be 4 numbers exactly as follows: longitudeWest, latitudeSouth, longitudeEast, latitudeNorth.

#### Output
* output `array`
  * items [facility](#facility)

### getFacilityByEquipmentNumber
Returns the facility identified by its equipmentnumber


```js
deutschebahn_fasta.getFacilityByEquipmentNumber({
  "equipmentnumber": 0
}, context)
```

#### Input
* input `object`
  * equipmentnumber **required** `integer`: equipmentnumber of the facility to fetch

#### Output
* output [facility](#facility)

### findStationByStationNumber
Returns information about the station and its facilities identified by a stationnumber.


```js
deutschebahn_fasta.findStationByStationNumber({
  "stationnumber": 0
}, context)
```

#### Input
* input `object`
  * stationnumber **required** `integer`: stationnumber of the station to fetch

#### Output
* output [station](#station)



## Definitions

### disruption
* disruption `object`: A disruption contains information associated with a facility that is temporarily not available.
  * description `string`: The local conditions of the related facility.
  * disruptionnumber **required** `integer`: Unique identifier.
  * equipmentnumber **required** `integer`: Identifier of the related facility.
  * furtherDescription `string`: Further information of the cause if available.
  * geographicCoordinates [point](#point)
  * lastUpdate `string`: Last time this disruption has been updated (formatted in ISO-1806).
  * outOfServiceOn `string`: Time specification when the facility will not be available for planned maintenance work (formatted in ISO-1806).
  * outOfServiceReason `string`: Cause of the disruption.
  * outOfServiceTo `string`: Time specification when the facility will be available again after planned maintenance work (formatted in ISO-1806).
  * plannedCompletion `string`: Time specification when the repair is planned to be finished (formatted in ISO-1806).
  * state `string` (values: INACTIVE): Actual operational status.
  * stationnumber **required** `integer`: Station number of the related facility.
  * type **required** `string` (values: ESCALATOR, ELEVATOR): The type of the related facility e.g. escalator or elevator.

### facility
* facility `object`: Currently a facility provided by this API is either a public elevator or escalator in a german railway station operated by Station&Service AG.
  * description `string`: The local conditions of the facility.
  * equipmentnumber **required** `integer`: Unique identifier of the facility.
  * geocoordX `number`: longitude component of geocoordinate in WGS84 format
  * geocoordY `number`: latitude component of geocoordinate in WGS84 format
  * state **required** `string` (values: ACTIVE, INACTIVE): Actual operational status.
  * stationnumber **required** `integer`: Number of the station where the facility is located.
  * type **required** `string` (values: ESCALATOR, ELEVATOR): Facility type. Currently elevator or escalator.

### point
* point `object`: Representation of a geographical point in GeoJSON format
  * coordinates **required** `array`: An array of numbers. First value is longitude, second latitude.
    * items `number`
  * type **required** `string`

### station
* station `object`
  * facilities `array`
    * items [facility](#facility)
  * name **required** `string`: Name of the station.
  * stationnumber **required** `integer`: Unique identifier of the railway station.


