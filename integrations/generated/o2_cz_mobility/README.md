# @datafire/o2_cz_mobility

Client library for Mobility

## Installation and Usage
```bash
npm install --save datafire @datafire/o2_cz_mobility
```

```js
let datafire = require('datafire');
let o2_cz_mobility = require('@datafire/o2_cz_mobility').create();

o2_cz_mobility.getInfo({}).then(data => {
  console.log(data);
})
```

## Description
Transit API can be used to obtain time-aggregated data representing moving the people between various spatial points within the Czech republic. Having A - 'from' and B - 'to' points, the API can return count of people traveling from A to B or people that are from A and traveling to B, etc. The mobility data is based on moving mobile stations in O2 mobile network.

## Actions
### getInfo
Information about versions of application and data.


```js
o2_cz_mobility.getInfo(null, context)
```


### transit
Get count of objects that were moving between basic residential units or objects that were visiting these basic residential units. Specific object's occurence type in the base residential unit can be requested. If none occurence type is present in the request or both occurence types are zero, the result will be aggregation of all types of occurence for given base residential units. More about base residential units can be found at https://www.czso.cz/csu/rso/zsj_rso (czech).


```js
o2_cz_mobility.transit({
  "from": "",
  "to": "",
  "uniques": ""
}, context)
```

#### Parameters
* from (string) **required** - source basic residential unit
* to (string) **required** - destination basic residential unit
* fromType (string) - occurence type in the source basic residential unit (1 - transit, 2 - visit, 0 - both)
* toType (string) - occurence type in the destination basic residential unit (1 - transit, 2 - visit, 0 - both)
* uniques (string) **required** - all or only uniques (0 - all, 1 - uniques)

