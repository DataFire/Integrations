# @datafire/google_qpxexpress

Client library for QPX Express

## Installation and Usage
```bash
npm install --save datafire @datafire/google_qpxexpress
```

```js
let datafire = require('datafire');
let google_qpxexpress = require('@datafire/google_qpxexpress').actions;
let context = new datafire.Context();

google_qpxexpress.trips.search({}, context).then(data => {
  console.log(data);
})
```

## Description
Finds the least expensive flights between an origin and a destination.

## Actions
### trips.search
Returns a list of flights.


```js
google_qpxexpress.trips.search({}, context)
```


