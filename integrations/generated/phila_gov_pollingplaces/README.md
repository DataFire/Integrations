# @datafire/phila_gov_pollingplaces

Client library for Polling Places API

## Installation and Usage
```bash
npm install --save @datafire/phila_gov_pollingplaces
```
```js
let phila_gov_pollingplaces = require('@datafire/phila_gov_pollingplaces').create();

.then(data => {
  console.log(data);
});
```

## Description


This data set contains the list of polling places. It can be organized by ward/division, accessibility rating, or type of building.

This list is used to assign poll workers, send the machines and necessary accessibility materials, etc.

**Endpoint:** http://api.phila.gov/polling-places/v1


## Actions

### .get
Get Polling Places Data


```js
phila_gov_pollingplaces..get({
  "ward": 0,
  "division": 0
}, context)
```

#### Input
* input `object`
  * ward **required** `integer`: Ward Number
  * division **required** `integer`: Division Number
  * callback `string`: Optional parameter for jsonp support.

#### Output
* output [features](#features)



## Definitions

### features
* features `object`
  * building `string`: Assigned code to denote the accessibility of the polling place. See above for details of the codes.
  * display_address `string`: Mailing address of the polling place (formatted for display purposes).
  * division `string`: The number of the electoral section that houses the polling place.
  * lat `number`: Latitudinal coordinates of the polling place.
  * lng `number`: Longitudinal coordinates of the polling place.
  * location `string`: The name of the polling place.
  * parking `string`: Assigned code to denote the availability of parking. See above for details of the codes.
  * pin_address `string`: Mailing address of the polling place.
  * ward `string`: The number of the electoral subdivision that houses the polling place.
  * zip_code `integer`: Zipcode of the polling place.


