# @datafire/deutschebahn_fasta

Client library for FaSta-Station_Facilities_Status

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_fasta
```

```js
let datafire = require('datafire');
let deutschebahn_fasta = require('@datafire/deutschebahn_fasta').actions;

let account = {
  UserSecurity: "",
}
let context = new datafire.Context({
  accounts: {
    deutschebahn_fasta: account,
  }
})


deutschebahn_fasta.findFacilities({}, context).then(data => {
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

