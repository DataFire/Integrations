# @datafire/deutschebahn_fasta

Client library for FaSta-Station_Facilities_Status

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_fasta
```

```js
let datafire = require('datafire');
let deutschebahn_fasta = require('@datafire/deutschebahn_fasta').create({
  UserSecurity: "",
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

#### Parameters
* type (array) - type of the facility to filter by
* equipmentnumber (integer) - equipmentnumber of the facility to fetch
* stationnumber (integer) - stationnumber of the station to fetch

### findDisruptionByDisruptionNumber
Returns information about a specific disruption of a facility


```js
deutschebahn_fasta.findDisruptionByDisruptionNumber({
  "disruptionnumber": 0
}, context)
```

#### Parameters
* disruptionnumber (integer) **required** - disruptionnumber of the disruption to fetch

### findFacilities
Access to public facilities (escalators and elevators) in railway stations


```js
deutschebahn_fasta.findFacilities({}, context)
```

#### Parameters
* type (array) - type of the facility to filter by
* state (array) - the state of the facility to filter by
* equipmentnumbers (array) - equipmentnumbers of the facility to filter by
* stationnumber (integer) - station number to filter by
* area (array) - Geo coordinate rectangle in WGS84-format to filter by. Parameters must be 4 numbers exactly as follows: longitudeWest, latitudeSouth, longitudeEast, latitudeNorth.

### getFacilityByEquipmentNumber
Returns the facility identified by its equipmentnumber


```js
deutschebahn_fasta.getFacilityByEquipmentNumber({
  "equipmentnumber": 0
}, context)
```

#### Parameters
* equipmentnumber (integer) **required** - equipmentnumber of the facility to fetch

### findStationByStationNumber
Returns information about the station and its facilities identified by a stationnumber.


```js
deutschebahn_fasta.findStationByStationNumber({
  "stationnumber": 0
}, context)
```

#### Parameters
* stationnumber (integer) **required** - stationnumber of the station to fetch

