# @datafire/nytimes_geo_api

Client library for Geographic

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_geo_api
```

```js
let datafire = require('datafire');
let nytimes_geo_api = require('@datafire/nytimes_geo_api').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    nytimes_geo_api: account,
  }
})


nytimes_geo_api.query.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
The Geographic API extends the Semantic API, using a linked data approach to enhance location concepts used in The New York Times' controlled vocabulary and data resources which combine them with the GeoNames database, an authoritative and free to use database of global geographical places, names and features.


## Actions
### query.json.get
Geographic API


```js
nytimes_geo_api.query.json.get({}, context)
```


