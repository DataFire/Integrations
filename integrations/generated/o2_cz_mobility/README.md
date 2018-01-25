# @datafire/o2_cz_mobility

Client library for Mobility

## Installation and Usage
```bash
npm install --save @datafire/o2_cz_mobility
```
```js
let o2_cz_mobility = require('@datafire/o2_cz_mobility').create();

o2_cz_mobility.getInfo(null).then(data => {
  console.log(data);
});
```

## Description

Transit API can be used to obtain time-aggregated data representing moving the people between various spatial points within the Czech republic. Having A - 'from' and B - 'to' points, the API can return count of people traveling from A to B or people that are from A and traveling to B, etc. The mobility data is based on moving mobile stations in O2 mobile network.

## Actions

### getInfo
Information about versions of application and data.


```js
o2_cz_mobility.getInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [InfoResult](#inforesult)

### transit
Get count of objects that were moving between basic residential units or objects that were visiting these basic residential units. Specific object's occurence type in the base residential unit can be requested. If none occurence type is present in the request or both occurence types are zero, the result will be aggregation of all types of occurence for given base residential units. More about base residential units can be found at https://www.czso.cz/csu/rso/zsj_rso (czech).


```js
o2_cz_mobility.transit({
  "from": "",
  "to": "",
  "uniques": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: source basic residential unit
  * to **required** `string`: destination basic residential unit
  * fromType `string`: occurence type in the source basic residential unit (1 - transit, 2 - visit, 0 - both)
  * toType `string`: occurence type in the destination basic residential unit (1 - transit, 2 - visit, 0 - both)
  * uniques **required** `string`: all or only uniques (0 - all, 1 - uniques)

#### Output
* output [CountResult](#countresult)



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


