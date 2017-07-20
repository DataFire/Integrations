# @datafire/deutschebahn_reisezentren

Client library for Reisezentren

## Installation and Usage
```bash
npm install --save datafire @datafire/deutschebahn_reisezentren
```

```js
let datafire = require('datafire');
let deutschebahn_reisezentren = require('@datafire/deutschebahn_reisezentren').actions;
let context = new datafire.Context();

deutschebahn_reisezentren.reisezentren.get({}, context).then(data => {
  console.log(data);
})
```

## Description
This REST-API enables you to query information about travel centers in Germany.

## Actions
### reisezentren.get
Get all station infos


```js
deutschebahn_reisezentren.reisezentren.get({}, context)
```


### reisezentren.loc.lat.lon.get
Get information about a station near a location


```js
deutschebahn_reisezentren.reisezentren.loc.lat.lon.get({
  "lat": 0,
  "lon": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude
* lon (number) **required** - Longitude

### reisezentren.id.get
Get information about a specific station


```js
deutschebahn_reisezentren.reisezentren.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Station id

