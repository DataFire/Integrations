# @datafire/citycontext

Client library for City Context

## Installation and Usage
```bash
npm install --save datafire @datafire/citycontext
```

```js
let datafire = require('datafire');
let citycontext = require('@datafire/citycontext').actions;

let account = {
  user_key: "",
}
let context = new datafire.Context({
  accounts: {
    citycontext: account,
  }
})

citycontext.byPoint({}, context).then(data => {
  console.log(data);
})
```

## Description
City Context provides a straightforward API to access UK Open Data: crime statistics, schools, demographics and more.

## Actions
### byPoint
Query by coordinates (SRID 4326 - decimal degrees)


```js
citycontext.byPoint({
  "lat": 0,
  "lon": 0
}, context)
```

#### Parameters
* lat (number) **required** - Latitude
* lon (number) **required** - Longitude
* school_search_radius (integer) - Search radius for schools, in metres, between 100 and 4000
* park_search_radius (integer) - Search radius for parks, in metres, between 100 and 2000

### byPostcode
Query by postcode


```js
citycontext.byPostcode({
  "postcode": ""
}, context)
```

#### Parameters
* postcode (string) **required** - Postcode
* school_search_radius (integer) - Search radius for schools, in metres, between 100 and 4000
* park_search_radius (integer) - Search radius for parks, in metres, between 100 and 2000

### usage
Get usage in current month


```js
citycontext.usage(null, context)
```


