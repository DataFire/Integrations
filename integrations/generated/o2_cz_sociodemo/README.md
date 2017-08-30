# @datafire/o2_cz_sociodemo

Client library for Socio-demo

## Installation and Usage
```bash
npm install --save datafire @datafire/o2_cz_sociodemo
```

```js
let datafire = require('datafire');
let o2_cz_sociodemo = require('@datafire/o2_cz_sociodemo').create();

o2_cz_sociodemo.age({}).then(data => {
  console.log(data);
})
```

## Description
Socio-demo API can be used to obtain time-aggregated data representing groups of people on the given location in the Czech Republic. Having a location, the API can return count of people belonging to age group or gender aggregated by hours. The socio-demo data is based on presence of mobile stations in O2 mobile network.

## Actions
### age
Get count of people in a given location and an hour, aggregated by age.


```js
o2_cz_sociodemo.age({
  "location": "",
  "ageGroup": "",
  "occurenceType": "",
  "hour": ""
}, context)
```

#### Parameters
* location (string) **required** - basic residential unit
* ageGroup (string) **required** - age-group specification (1: 8-18, 2: 19-25, 3: 26-35, 4: 36-55, 5: 56+)
* occurenceType (string) **required** - occurence type in the basic residential unit (1 - transit, 2 - visit)
* hour (string) **required** - time interval for the count aggregation (from 0 to 23)

### gender
Get count of people in a given location and an hour, aggregated by gender.


```js
o2_cz_sociodemo.gender({
  "location": "",
  "g": "",
  "occurenceType": "",
  "hour": ""
}, context)
```

#### Parameters
* location (string) **required** - basic residential unit
* g (string) **required** - gender specification (1 - male, 2 - female)
* occurenceType (string) **required** - occurence type in the basic residential unit (1 - transit, 2 - visit)
* hour (string) **required** - time interval for the count aggregation (from 0 to 23)

### getInfo
Information about versions of application and data.


```js
o2_cz_sociodemo.getInfo(null, context)
```

#### Parameters
*This action has no parameters*

