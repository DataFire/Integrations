# @datafire/o2_cz_sociodemo

Client library for Socio-demo

## Installation and Usage
```bash
npm install --save @datafire/o2_cz_sociodemo
```
```js
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

#### Input
* input `object`
  * location **required** `string`: basic residential unit
  * ageGroup **required** `string`: age-group specification (1: 8-18, 2: 19-25, 3: 26-35, 4: 36-55, 5: 56+)
  * occurenceType **required** `string`: occurence type in the basic residential unit (1 - transit, 2 - visit)
  * hour **required** `string`: time interval for the count aggregation (from 0 to 23)

#### Output
* output [CountResult](#countresult)

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

#### Input
* input `object`
  * location **required** `string`: basic residential unit
  * g **required** `string`: gender specification (1 - male, 2 - female)
  * occurenceType **required** `string`: occurence type in the basic residential unit (1 - transit, 2 - visit)
  * hour **required** `string`: time interval for the count aggregation (from 0 to 23)

#### Output
* output [CountResult](#countresult)

### getInfo
Information about versions of application and data.


```js
o2_cz_sociodemo.getInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [InfoResult](#inforesult)



## Definitions

### CountResult
* CountResult `object`: Response with the result
  * count `string`: Final count as the result of the request

### ErrorResult
* ErrorResult `object`: Response with error message
  * message `string`: Error response message content

### InfoResult
* InfoResult `object`: Response to the info request
  * appName `string`: Application name
  * appVendor `string`: Application vendor
  * appVersion `string`: Application version
  * backendAppName `string`: Backend application name
  * backendAppVendor `string`: Backend application vendor
  * backendAppVersion `string`: Backend application version
  * backendDataFrom `string`: For which day are data valid


